export interface IProject {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  status: 'planning' | 'active' | 'completed' | 'cancelled';
  category: string;
  skills: string[];
  teamSize: {
    min: number;
    max: number;
    current: number;
  };
  members: {
    userId: string;
    role: string;
    status: 'pending' | 'active' | 'left';
    joinedAt: Date;
  }[];
  timeline: {
    startDate: Date;
    endDate?: Date;
    milestones: {
      id: string;
      title: string;
      description: string;
      dueDate: Date;
      status: 'pending' | 'in-progress' | 'completed';
      assignedTo?: string[];
    }[];
  };
  resources: {
    type: 'document' | 'link' | 'file';
    title: string;
    url: string;
    uploadedBy: string;
    uploadedAt: Date;
  }[];
  communication: {
    platform: 'slack' | 'discord' | 'teams' | 'other';
    channelId?: string;
    meetingSchedule?: {
      day: string;
      time: string;
      duration: number;
    }[];
  };
  visibility: 'public' | 'private';
  createdAt: Date;
  updatedAt: Date;
}