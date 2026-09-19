import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

import type { Appointment } from '../types/appointment';

type AppointmentTableProps = {
  appointments: Appointment[];
};

function getStatusColor(
  status: Appointment['status']
): 'success' | 'warning' | 'default' | 'error' {
  switch (status) {
    case 'Confirmed':
      return 'success';

    case 'Waiting':
      return 'warning';

    case 'Completed':
      return 'default';

    case 'Cancelled':
      return 'error';
  }
}

function AppointmentTable({
  appointments,
}: AppointmentTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>
                {appointment.patientName}
              </TableCell>

              <TableCell>
                {appointment.time}
              </TableCell>

              <TableCell>
                {appointment.service}
              </TableCell>

              <TableCell>
                <Chip
                  label={appointment.status}
                  color={getStatusColor(appointment.status)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppointmentTable;