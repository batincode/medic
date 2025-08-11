import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC = () => (
  <div className="app-layout">
    <Navbar />
    <div className="app-body">
      <Sidebar />
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
