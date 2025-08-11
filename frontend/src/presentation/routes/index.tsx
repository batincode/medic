import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import AssignmentsPage from '../pages/AssignmentsPage';
import MaintenancePage from '../pages/MaintenancePage';
import StockPage from '../pages/StockPage';
import ScanDevicePage from '../pages/ScanDevicePage';
import Layout from '../components/layout/Layout';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route element={<Layout />}> 
      <Route path="/" element={<ProtectedRoute element={<DashboardPage />} />} />
      <Route path="/assignments" element={<ProtectedRoute roles={['Technician']} element={<AssignmentsPage />} />} />
      <Route path="/maintenance" element={<ProtectedRoute roles={['Admin', 'Technician']} element={<MaintenancePage />} />} />
      <Route path="/stock" element={<ProtectedRoute roles={['Warehouse']} element={<StockPage />} />} />
      <Route path="/scan" element={<ProtectedRoute element={<ScanDevicePage />} />} />
    </Route>
  </Routes>
);

export default AppRoutes;
