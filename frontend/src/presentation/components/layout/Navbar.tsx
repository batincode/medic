import React from 'react';
 reec67-codex/design-react-ui-structure-for-project
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


const Navbar: React.FC = () => (
  <header className="navbar">
    <h1>Medic</h1>
  </header>
);
 main

export default Navbar;
