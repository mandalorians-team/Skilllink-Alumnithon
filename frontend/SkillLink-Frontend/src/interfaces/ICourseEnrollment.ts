export interface ICourseEnrollment {
  id: string;
  courseId: string;
  userId: string;
  status: 'active' | 'completed' | 'cancelled';
  progress: {
    completedLessons: string[];
    currentLesson: string;
    quizScores: {
      quizId: string;
      score: number;
      attempts: number;
    }[];
    certificates: string[];
  };
  startDate: Date;
  completionDate?: Date;
  lastAccessDate: Date;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  price: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}