import React from 'react';
import { Link } from 'react-router-dom';
reec67-codex/design-react-ui-structure-for-project
import { useAuth } from '../../../application/context/AuthContext';

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/scan">Scan Device</Link></li>
          {user?.role === 'Technician' && <li><Link to="/assignments">Assignments</Link></li>}
          {user?.role === 'Warehouse' && <li><Link to="/stock">Stock</Link></li>}
          {(user?.role === 'Admin' || user?.role === 'Technician') && (
            <li><Link to="/maintenance">Maintenance</Link></li>
          )}
        </ul>
      </nav>
    </aside>
  );
};


const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
      </ul>
    </nav>
  </aside>
);
 main

export default Sidebar;
