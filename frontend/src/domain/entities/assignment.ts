export interface Assignment {
  id: number;
  deviceId: number;
  assignedToUserId: number;
  assignedByUserId: number;
  assignedAt: string;
  returnedAt?: string;
  status: 'Active' | 'Returned';
}

