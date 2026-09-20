import { useState } from 'react';

import Box from '@mui/material/Box';

import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import AppointmentsPage from './pages/AppointmentsPage';
import PatientsPage from './pages/PatientsPage';
import QueuePage from './pages/QueuePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box>
      <TopBar
        onMenuClick={() => setSidebarOpen(true)}
      />

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <Box sx={{ p: 3 }}>
        <Routes>
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/appointments"
            element={<AppointmentsPage />}
          />

          <Route
            path="/patients"
            element={<PatientsPage />}
          />

          <Route
            path="/queue"
            element={<QueuePage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />

          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;