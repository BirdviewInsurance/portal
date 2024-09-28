import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PeopleIcon from '@mui/icons-material/People';
import PolicyIcon from '@mui/icons-material/Policy';
import ReportIcon from '@mui/icons-material/Report';
import NoteIcon from '@mui/icons-material/Note';
import MenuIcon from '@mui/icons-material/Menu';

const SidebarNavigation = ({ setActiveComponent }) => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ left: open });
  };

  // Mapping of menu items to their corresponding icons
  const menuItems = [
    { text: 'Home', icon: <OtherHousesIcon /> },
    { text: 'Account', icon: <PeopleIcon /> },
    { text: 'Quotes', icon: <PolicyIcon /> },
    { text: 'Claims', icon: <ReportIcon /> },
    { text: 'Statements', icon: <NoteIcon /> },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem onClick={() => setActiveComponent(item.text)} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            {index < menuItems.length - 1 && <Divider />} {/* Add a Divider except after the last item */}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} size="large" style={{ color: '#157EBC' }}>
        <MenuIcon style={{ color: '#157EBC' }} />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default SidebarNavigation;
