import React, { useState, useEffect } from 'react';
import Home from './Home';
import SwipeableDrawer from '../components/SiderbarNavidation';
import Claims from './Claims';

// MUI imports
import { Button } from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PeopleIcon from '@mui/icons-material/People';
import PolicyIcon from '@mui/icons-material/Policy';
import ReportIcon from '@mui/icons-material/Report';
import NoteIcon from '@mui/icons-material/Note';
import {  Login as LoginIcon,  Mail as MailIcon,  Notifications as NotificationsIcon, AccountCircle, } from "@mui/icons-material";
import { AppBar, Box, Toolbar, IconButton, Badge, Menu, MenuItem } from "@mui/material";
import { useMediaQuery } from '@mui/material';


const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem('activeComponent') || 'Home'
  );

  // Save the selected component to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeComponent', activeComponent);
  }, [activeComponent]);

   // Effect to listen for changes in local storage and update activeComponent
   useEffect(() => {
    const handleStorageChange = () => {
      const storedComponent = localStorage.getItem('activeComponent');
      if (storedComponent) {
        setActiveComponent(storedComponent);
      }
    };

    // Add event listener for storage change
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
   // Check if the screen is small (smaller than 600px)
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  // Render the currently active component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Home />; // Replace with your actual Home component
      case 'Account':
        return <div>Account Component</div>; // Replace with your actual Account component
      case 'Quotes':
        return <div>Quotes Component</div>; // Replace with your actual Quotes component
      case 'Claims':
        return <Claims />;
      case 'Statements':
        return <div>Statements Component</div>; // Replace with your actual Statements component
      default:
        return <div>Home Component</div>; // Default case
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        Logout <LoginIcon />
      </MenuItem>
    </Menu>
  );

  return (
    <>
        <>
   

   

      <style>
        {`
          .shadow-div {
            background-color: white;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
            border-radius: 7px;
            padding: 7px;
          }
          .logoImage {
            width: 12%;
            height: auto;
            object-fit: contain;
            display: block;
          }
        `}
      </style>

      {/* Red background for header */}
      <div style={{ backgroundColor: "#E42D2C" }} className="p-3  "></div>
  
      <div className="">
        {/* AppBar with white background and icons */}
        <AppBar position="static" style={{ backgroundColor: "white", color: "black"  }}>
          <Toolbar>
            {/* Logo Image hide on small Screen */}
            {!isSmallScreen &&
            <img className="logoImage" src="images/logo.jpeg" alt="Logo" />
             }
            {/* Flex grow pushes the rest to the right */}
            <Box style={{ flexGrow: 1 }} />

            {/* Icons end (aligned right) */}
            
            <IconButton size="large" style={{ color: '#157EBC' }}>
              <Badge badgeContent={4} color="error">
                <MailIcon style={{ color: '#157EBC' }} />
              </Badge>
            </IconButton>
            <IconButton size="large" style={{ color: '#157EBC' }}>
              <Badge badgeContent={17} color="error">
                <NotificationsIcon style={{ color: '#157EBC' }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              style={{ color: '#157EBC' }}
            >
              <AccountCircle style={{ color: '#157EBC' }} />
            </IconButton>
            {/* Navigation Bar */}
           {isSmallScreen &&
            <SwipeableDrawer setActiveComponent={setActiveComponent}  />
          }
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    </>
      {!isSmallScreen &&
      <div className="flex bg-blueCustom items-center justify-center space-x-4 text-white py-4">
        <Button
          onClick={() => setActiveComponent('Home')}
          startIcon={<OtherHousesIcon sx={{ color: 'white' }} />}
          sx={{ color: 'white', '&:hover': { color: '#141740' } }}
        >
          Home
        </Button>

        <Button
          onClick={() => setActiveComponent('Account')}
          startIcon={<PeopleIcon sx={{ color: 'white' }} />}
          sx={{ color: 'white', '&:hover': { color: '#141740' } }}
        >
          Account
        </Button>

        <Button
          onClick={() => setActiveComponent('Quotes')}
          startIcon={<PolicyIcon sx={{ color: 'white' }} />}
          sx={{ color: 'white', '&:hover': { color: '#141740' } }}
        >
          Quotes
        </Button>

        <Button
          onClick={() => setActiveComponent('Claims')}
          startIcon={<NoteIcon sx={{ color: 'white' }} />}
          sx={{ color: 'white', '&:hover': { color: '#141740' } }}
        >
          Claims
        </Button>

        <Button
          onClick={() => setActiveComponent('Statements')}
          startIcon={<ReportIcon sx={{ color: 'white' }} />}
          sx={{ color: 'white', '&:hover': { color: '#141740' } }}
        >
          Statements
        </Button>
      </div>
        }

      <main>{renderComponent()}</main>
    
    </>
  );
};

export default Dashboard;
