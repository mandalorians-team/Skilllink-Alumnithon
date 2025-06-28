export interface IProjectContribution {
  id: string;
  projectId: string;
  userId: string;
  type: 'code' | 'design' | 'documentation' | 'review' | 'other';
  title: string;
  description: string;
  status: 'En progreso' | 'Completado' | 'Revisado' | 'Fusionado';
  files: {
    name: string;
    url: string;
    type: string;
    size: number;
  }[];
  review?: {
    reviewerId: string;
    status: 'Aprobado' | 'Cambios necesarios' | 'Rechazado';
    comments: {
      id: string;
      text: string;
      lineNumber?: number;
      createdAt: Date;
    }[];
    reviewedAt: Date;
  };
  metrics?: {
    linesAdded: number;
    linesRemoved: number;
    filesChanged: number;
    timeSpent: number; // en minutos
  };
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}