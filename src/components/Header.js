import React from 'react';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Toolbar, Typography, IconButton, AppBar } from '@material-ui/core';


function Header() {
  return (
    <AppBar position="sticky" color="primary">
    <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        <AssessmentIcon />
        </IconButton>
        <Typography variant="h6">
        Sort Visualizer
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
    </Toolbar>
    </AppBar>
  );
}

export default Header;
