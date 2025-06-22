export interface IMentorship {
  id: string;
  mentorId: string;
  menteeId: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  startDate: Date;
  endDate?: Date;
  schedule: {
    day: string;
    time: string;
    duration: number; // en minutos
  }[];
  goals: string[];
  progress: {
    completedGoals: string[];
    notes: string;
    lastSession: Date;
  };
  rating?: number;
  review?: string;
  price: number;
  currency: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  meetingLink?: string;
  createdAt: Date;
  updatedAt: Date;
}