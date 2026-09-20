import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import StatCard from '../components/StatCard';
import AppointmentTable from '../components/AppointmentTable';

import { appointments } from '../data/appointments';

function DashboardPage() {
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

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Today's Appointments
        </Typography>

        <AppointmentTable appointments={appointments} />
      </Box>
    </Box>
  );
}

export default DashboardPage;