import React from 'react';
import { useAuth } from '../../../application/context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <header className="navbar">
      <h1>Medic</h1>
      {user && <button onClick={logout}>Logout</button>}
    </header>
  );
};

export default Navbar;
