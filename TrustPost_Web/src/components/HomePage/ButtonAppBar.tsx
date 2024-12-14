import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HelpIcon from '@mui/icons-material/Help';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuBookIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tìm kiếm bưu cục
          </Typography>
          <IconButton
            size="large"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="print"
            color="inherit"
          >
            <PrintIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="help"
            color="inherit"
          >
            <LightbulbIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="help"
            color="inherit"
          >
            <HelpIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="help"
            color="inherit"
          >
            <SmartphoneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}