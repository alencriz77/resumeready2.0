import { create } from 'zustand';

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface ResumeState {
  // State
  personalInfo: PersonalInfo;
  summary: string;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  selectedTemplate: 'modern' | 'executive' | 'creative' | 'ats';
  accentColor: string;
  fontFamily: 'sans' | 'serif' | 'mono';
  lineSpacing: number;
  marginPadding: number;
  zoomLevel: number;
  previewDevice: 'desktop' | 'mobile';
  isSaving: boolean;
  lastSavedAt: Date | null;

  // Actions
  setPersonalInfo: (info: Partial<PersonalInfo>) => void;
  setSummary: (summary: string) => void;
  setExperiences: (experiences: Experience[]) => void;
  setEducation: (education: Education[]) => void;
  setSkills: (skills: string[]) => void;
  setSelectedTemplate: (template: ResumeState['selectedTemplate']) => void;
  setAccentColor: (color: string) => void;
  setFontFamily: (font: ResumeState['fontFamily']) => void;
  setLineSpacing: (spacing: number) => void;
  setMarginPadding: (margin: number) => void;
  setZoomLevel: (zoom: number) => void;
  setPreviewDevice: (device: ResumeState['previewDevice']) => void;
  setIsSaving: (isSaving: boolean) => void;
  setLastSavedAt: (date: Date | null) => void;

  // Complex Actions
  addExperience: () => void;
  removeExperience: (id: string) => void;
  updateExperience: (id: string, data: Partial<Experience>) => void;
  updateBulletOptimistic: (expId: string, bulletIndex: number, newText: string) => void;

  addEducation: () => void;
  removeEducation: (id: string) => void;
  updateEducation: (id: string, data: Partial<Education>) => void;

  loadDemoData: () => void;
}

const initialPersonalInfo: PersonalInfo = {
  fullName: '',
  jobTitle: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  github: '',
  website: '',
};

// Variable to hold the debounce timer for optimistic updates
let saveTimeout: NodeJS.Timeout | null = null;

export const useResumeStore = create<ResumeState>((set, get) => ({
  personalInfo: initialPersonalInfo,
  summary: '',
  experiences: [],
  education: [],
  skills: [],
  selectedTemplate: 'modern',
  accentColor: '#2563eb',
  fontFamily: 'sans',
  lineSpacing: 1.4,
  marginPadding: 24,
  zoomLevel: 100,
  previewDevice: 'desktop',
  isSaving: false,
  lastSavedAt: null,

  setPersonalInfo: (info) =>
    set((state) => ({ personalInfo: { ...state.personalInfo, ...info } })),
  
  setSummary: (summary) => set({ summary }),
  setExperiences: (experiences) => set({ experiences }),
  setEducation: (education) => set({ education }),
  setSkills: (skills) => set({ skills }),
  setSelectedTemplate: (selectedTemplate) => set({ selectedTemplate }),
  setAccentColor: (accentColor) => set({ accentColor }),
  setFontFamily: (fontFamily) => set({ fontFamily }),
  setLineSpacing: (lineSpacing) => set({ lineSpacing }),
  setMarginPadding: (marginPadding) => set({ marginPadding }),
  setZoomLevel: (zoomLevel) => set({ zoomLevel }),
  setPreviewDevice: (previewDevice) => set({ previewDevice }),
  setIsSaving: (isSaving) => set({ isSaving }),
  setLastSavedAt: (lastSavedAt) => set({ lastSavedAt }),

  addExperience: () =>
    set((state) => ({
      experiences: [
        ...state.experiences,
        {
          id: crypto.randomUUID(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          bullets: [''],
        },
      ],
    })),

  removeExperience: (id) =>
    set((state) => ({
      experiences: state.experiences.filter((exp) => exp.id !== id),
    })),

  updateExperience: (id, data) =>
    set((state) => ({
      experiences: state.experiences.map((exp) =>
        exp.id === id ? { ...exp, ...data } : exp
      ),
    })),

  updateBulletOptimistic: (expId, bulletIndex, newText) => {
    // 1. Update local state immediately (0ms)
    set((state) => {
      const newExperiences = state.experiences.map((exp) => {
        if (exp.id === expId) {
          const newBullets = [...exp.bullets];
          newBullets[bulletIndex] = newText;
          return { ...exp, bullets: newBullets };
        }
        return exp;
      });
      return { experiences: newExperiences, isSaving: true };
    });

    // 2. Trigger debounced backend sync
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }

    saveTimeout = setTimeout(async () => {
      try {
        // Mock backend sync logic here
        // await syncWithBackend(get().experiences);
        set({ isSaving: false, lastSavedAt: new Date() });
      } catch (error) {
        console.error('Failed to sync bullets:', error);
        set({ isSaving: false });
      }
    }, 1000); // 1s debounce
  },

  addEducation: () =>
    set((state) => ({
      education: [
        ...state.education,
        {
          id: crypto.randomUUID(),
          institution: '',
          degree: '',
          startDate: '',
          endDate: '',
        },
      ],
    })),

  removeEducation: (id) =>
    set((state) => ({
      education: state.education.filter((edu) => edu.id !== id),
    })),

  updateEducation: (id, data) =>
    set((state) => ({
      education: state.education.map((edu) =>
        edu.id === id ? { ...edu, ...data } : edu
      ),
    })),

  loadDemoData: () => {
    set({
      personalInfo: {
        fullName: 'Alice Hart',
        jobTitle: 'Senior Software Engineer',
        email: 'alice.hart@example.com',
        phone: '(555) 123-4567',
        location: 'San Francisco, CA',
        linkedin: 'linkedin.com/in/alicehart',
        github: 'github.com/alicehart',
        website: 'alicehart.dev',
      },
      summary:
        'Detail-oriented Senior Software Engineer with over 6 years of experience building scalable web applications. Passionate about frontend architecture, performance optimization, and creating intuitive user experiences.',
      experiences: [
        {
          id: crypto.randomUUID(),
          company: 'TechFlow Solutions',
          position: 'Senior Frontend Engineer',
          startDate: '2021-03',
          endDate: 'Present',
          bullets: [
            'Architected and migrated the legacy monolithic frontend to a Next.js App Router architecture, improving core web vitals by 40%.',
            'Led a team of 4 engineers in developing a comprehensive internal component library using React, Tailwind CSS, and Storybook.',
            'Implemented optimistic UI updates for the data grid component, reducing perceived latency by over 80%.',
          ],
        },
        {
          id: crypto.randomUUID(),
          company: 'Innovate Digital',
          position: 'Software Engineer',
          startDate: '2018-07',
          endDate: '2021-02',
          bullets: [
            'Developed and maintained multiple high-traffic client portals serving over 100k daily active users.',
            'Integrated Stripe payment processing, handling over $2M in monthly transactions with 99.99% uptime.',
            'Mentored 3 junior developers through pair programming and comprehensive code reviews.',
          ],
        },
      ],
      education: [
        {
          id: crypto.randomUUID(),
          institution: 'University of California, Berkeley',
          degree: 'B.S. Computer Science',
          startDate: '2014-08',
          endDate: '2018-05',
        },
      ],
      skills: [
        'TypeScript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
        'GraphQL',
        'PostgreSQL',
        'AWS',
        'Figma',
        'Jest',
      ],
      selectedTemplate: 'modern',
      accentColor: '#2563eb',
      fontFamily: 'sans',
      lineSpacing: 1.4,
      marginPadding: 24,
      zoomLevel: 100,
      previewDevice: 'desktop',
    });
  },
}));
