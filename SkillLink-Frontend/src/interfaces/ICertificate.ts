export interface ICertificate {
  id: string;
  userId: string;
  courseId: string;
  enrollmentId: string;
  issueDate: Date;
  certificateNumber: string;
  status: 'issued' | 'revoked';
  verificationUrl: string;
  metadata: {
    completionDate: Date;
    finalScore?: number;
    instructorName: string;
    courseName: string;
    skills: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}