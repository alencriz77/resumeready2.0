import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 group-hover:-translate-y-2">
      {Icon && <Icon className="h-10 w-10 origin-left transform-gpu text-blue-400 transition-all duration-300 ease-in-out group-hover:scale-110" />}
      <h3 className="text-xl font-semibold text-white font-sans mt-2">
        {name}
      </h3>
      <p className="max-w-lg text-slate-400 text-sm">{description}</p>
    </div>

    {cta && (
      <div className="pointer-events-none z-10 flex flex-row items-center gap-2 font-semibold text-blue-400 text-sm transition-all duration-300 group-hover:translate-x-1">
        {cta}
        <ArrowRightIcon className="h-4 w-4" />
      </div>
    )}
  </div>
);
