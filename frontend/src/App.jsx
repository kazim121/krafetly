
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Funnels from './pages/Funnels';
import Emails from './pages/Emails';
import Courses from './pages/Courses';
import Automations from './pages/Automations';
import Sidebar from './components/Sidebar';

const App = () => (
  <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/funnels" element={<Funnels />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/automations" element={<Automations />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
