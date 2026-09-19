import type { Appointment } from '../types/appointment';

export const appointments: Appointment[] = [
  {
    id: 1,
    patientName: 'Aina Rahman',
    time: '09:00 AM',
    service: 'Consultation',
    status: 'Confirmed',
  },
  {
    id: 2,
    patientName: 'Daniel Tan',
    time: '09:30 AM',
    service: 'Follow-up',
    status: 'Waiting',
  },
  {
    id: 3,
    patientName: 'Mei Ling',
    time: '10:00 AM',
    service: 'Consultation',
    status: 'Completed',
  },
  {
    id: 4,
    patientName: 'Ahmad Faiz',
    time: '10:30 AM',
    service: 'Vaccination',
    status: 'Confirmed',
  },
];