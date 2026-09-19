export type AppointmentStatus =
  | 'Confirmed'
  | 'Waiting'
  | 'Completed'
  | 'Cancelled';

export type Appointment = {
  id: number;
  patientName: string;
  time: string;
  service: string;
  status: AppointmentStatus;
};