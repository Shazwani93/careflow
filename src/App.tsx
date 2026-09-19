import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import TextField from '@mui/material/TextField';

import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatCard from './components/StatCard';

import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import AppointmentTable from './components/AppointmentTable';
import { appointments } from './data/appointments';

import type { AppointmentStatus } from './types/appointment';



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAppointments = appointments.filter(
  (appointment) => {
    const matchesStatus =
      statusFilter === 'All' ||
      appointment.status === statusFilter;

    const matchesSearch =
      appointment.patientName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  }
);

  return (
    <Box>
      <TopBar
        onMenuClick={() => setSidebarOpen(true)}
      />

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Good morning, Shazwani 👋
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          <StatCard
            title="Today's Appointments"
            value={12}
            icon={<EventIcon />}
          />

          <StatCard
            title="Waiting"
            value={4}
            icon={<PeopleIcon />}
          />

          <StatCard
            title="Served"
            value={8}
            icon={<CheckCircleIcon />}
          />

          <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
          Today's Appointments
          </ Typography>

          <TextField
          label="Search patient"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          sx={{ mb: 2, mr: 2 }}
          />

          <FormControl sx={{ minWidth: 200, mb: 2 }}>
            <InputLabel id="status-filter-label">
            Status
            </InputLabel>
            
            <Select
            labelId="status-filter-label"
            value={statusFilter}
            label="Status"
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
            >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Waiting">Waiting</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
            </FormControl>

         <AppointmentTable
         appointments={filteredAppointments}
         />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;