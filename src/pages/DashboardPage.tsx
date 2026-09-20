import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import StatCard from '../components/StatCard';
import AppointmentTable from '../components/AppointmentTable';

import { appointments } from '../data/appointments';

function DashboardPage() {
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
      <Typography variant="h4" sx={{ mb: 1 }}>
        Dashboard
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Overview of today's appointments and queue.
      </Typography>

      {/* Statistics */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        <StatCard
          title="Today's Appointments"
          value={appointments.length}
          icon="📅"
        />

        <StatCard
          title="Waiting"
          value={
            appointments.filter(
              (appointment) =>
                appointment.status === 'Waiting'
            ).length
          }
          icon="⏳"
        />

        <StatCard
          title="Completed"
          value={
            appointments.filter(
              (appointment) =>
                appointment.status === 'Completed'
            ).length
          }
          icon="✓"
        />
      </Box>

      {/* Today's Appointments */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Today's Appointments
        </Typography>

        {/* Search */}
        <TextField
          label="Search patient"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          sx={{ mb: 2, mr: 2 }}
        />

        {/* Status Filter */}
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
            <MenuItem value="Confirmed">
              Confirmed
            </MenuItem>
            <MenuItem value="Waiting">
              Waiting
            </MenuItem>
            <MenuItem value="Completed">
              Completed
            </MenuItem>
            <MenuItem value="Cancelled">
              Cancelled
            </MenuItem>
          </Select>
        </FormControl>

        {/* Appointment Table */}
        <AppointmentTable
          appointments={filteredAppointments}
        />
      </Box>
    </Box>
  );
}

export default DashboardPage;