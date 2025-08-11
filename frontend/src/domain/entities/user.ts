export type UserRole = 'Admin' | 'Technician' | 'Warehouse' | 'Staff';

export interface User {
  id: number;
  name: string;
  role: UserRole;
}
