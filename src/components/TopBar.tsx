import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import MenuIcon from '@mui/icons-material/Menu';

type TopBarProps = {
  onMenuClick: () => void;
};

function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          CareFlow
        </Typography>

        <Avatar>
          S
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;