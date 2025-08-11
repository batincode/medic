export interface MaintenanceSchedule {
  id: number;
  deviceId: number;
  scheduledFor: string;
  type: 'Periodic' | 'Repair';
  assignedTechnicianId?: number;
  status: 'Pending' | 'Completed' | 'Cancelled';
}

