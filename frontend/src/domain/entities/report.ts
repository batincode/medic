export interface Report {
  id: number;
  assignmentId?: number;
  maintenanceScheduleId?: number;
  content: string;
  createdBy: number;
  createdAt: string;
  signedBy?: number;
  signedAt?: string;
}

