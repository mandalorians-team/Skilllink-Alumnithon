export interface IProjectApplication {
  id: string;
  projectId: string;
  userId: string;
  status: 'pending' | 'accepted' | 'rejected';
  role: string;
  motivation: string;
  relevantExperience: {
    title: string;
    description: string;
    duration: string;
  }[];
  skills: string[];
  availability: {
    hoursPerWeek: number;
    timezone: string;
    preferredSchedule?: {
      day: string;
      timeRange: string;
    }[];
  };
  portfolio?: {
    type: 'github' | 'behance' | 'dribbble' | 'other';
    url: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
  reviewedAt?: Date;
  reviewedBy?: string;
  feedback?: string;
}