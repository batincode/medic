import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../application/context/AuthContext';
import { UserRole } from '../../domain/entities/user';

interface ProtectedRouteProps {
  element: React.ReactElement;
  roles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, roles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  return element;
};

export default ProtectedRoute;

