import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import QueueIcon from '@mui/icons-material/Queue';
import SettingsIcon from '@mui/icons-material/Settings';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

function Sidebar({ open, onClose }: SidebarProps) {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      label: 'Appointments',
      icon: <EventIcon />,
    },
    {
      label: 'Patients',
      icon: <PeopleIcon />,
    },
    {
      label: 'Queue',
      icon: <QueueIcon />,
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Drawer
      open={open}
      onClose={onClose}
    >
      <Box sx={{ width: 260 }}>
        <List>
          {menuItems.map((item) => (
            <ListItemButton key={item.label}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;