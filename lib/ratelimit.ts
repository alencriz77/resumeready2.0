import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// In-memory sliding window rate limiter fallback if Redis env vars are omitted in local dev
class MemoryRateLimiter {
  private requests: Map<string, number[]> = new Map();

  async limit(identifier: string, limitCount = 30, windowMs = 60000) {
    const now = Date.now();
    const timestamps = (this.requests.get(identifier) || []).filter(
      (ts) => now - ts < windowMs
    );

    if (timestamps.length >= limitCount) {
      return {
        success: false,
        limit: limitCount,
        remaining: 0,
        reset: now + windowMs,
      };
    }

    timestamps.push(now);
    this.requests.set(identifier, timestamps);

    return {
      success: true,
      limit: limitCount,
      remaining: limitCount - timestamps.length,
      reset: now + windowMs,
    };
  }
}

const memoryRatelimit = new MemoryRateLimiter();

export async function checkRateLimit(
  identifier: string,
  limitCount = 30,
  windowSeconds = 60
) {
  if (
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    try {
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      });

      const ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(limitCount, `${windowSeconds} s`),
        analytics: true,
      });

      return await ratelimit.limit(identifier);
    } catch (error) {
      console.warn("Upstash Redis connection failed, using memory fallback", error);
    }
  }

  return await memoryRatelimit.limit(identifier, limitCount, windowSeconds * 1000);
}
