import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary" align='center'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h5" align='' component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Tarefas da Semana
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;