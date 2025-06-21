
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-900 text-white p-4">
    <h1 className="text-xl font-bold mb-6">Krafetly</h1>
    <nav className="flex flex-col gap-4">
      <Link to="/">Dashboard</Link>
      <Link to="/funnels">Funnels</Link>
      <Link to="/emails">Emails</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/automations">Automations</Link>
    </nav>
  </div>
);

export default Sidebar;
