export interface ILesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  content: {
    type: 'video' | 'text' | 'quiz' | 'assignment';
    url?: string;
    text?: string;
    duration?: number; // en minutos
    resources?: {
      title: string;
      url: string;
      type: 'pdf' | 'link' | 'file';
    }[];
  };
  order: number;
  prerequisites: string[]; // IDs de lecciones que deben completarse antes
  quiz?: {
    questions: {
      id: string;
      question: string;
      options: string[];
      correctAnswer: number;
      points: number;
    }[];
    passingScore: number;
    timeLimit?: number; // en minutos
  };
  assignment?: {
    description: string;
    dueDate?: Date;
    submissionType: 'file' | 'text' | 'url';
    maxAttempts?: number;
  };
  createdAt: Date;
  updatedAt: Date;
}