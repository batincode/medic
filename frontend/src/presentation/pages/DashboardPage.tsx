import React from 'react';
import { useAuth } from '../../application/context/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {user?.role === 'Admin' && <p>Admin overview of devices and users.</p>}
      {user?.role === 'Technician' && <p>Your upcoming maintenance tasks.</p>}
      {user?.role === 'Warehouse' && <p>Stock levels and recent transactions.</p>}
      {!user && <p>Please log in to see your dashboard.</p>}
    </div>
  );
};

export default DashboardPage;
