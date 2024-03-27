import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
    <AppBar position="static" data-testid='header'>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cushon ISA
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>U</Avatar>
          <Typography variant="subtitle1" component="div">
            My Account
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
