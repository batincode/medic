
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../application/context/AuthContext';
import { UserRole } from '../../domain/entities/user';

const LoginPage: React.FC = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>('Technician');

  const handleLogin = () => {
    setUser({ id: 1, name: 'Demo User', role });
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <select value={role} onChange={e => setRole(e.target.value as UserRole)}>
        <option value="Admin">Admin</option>
        <option value="Technician">Technician</option>
        <option value="Warehouse">Warehouse</option>
        <option value="Staff">Staff</option>
      </select>
      <button onClick={handleLogin}>Login</button>

import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2>Login</h2>
      {/* TODO: implement login form */}
 main
    </div>
  );
};

export default LoginPage;
