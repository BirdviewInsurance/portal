import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GenerateClaim from './components/Claims/GenerateClaim';
import imageUrl from '../assets/plane.jpg'; 
// Claims component
const Claims = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="relative bg-gray-100">
      {/* Top Div with Background Image */}
      <div 
        className="bg-gray-100 h-64 w-full relative flex flex-col justify-center items-start pl-8"
        style={{
          backgroundImage: `url(${imageUrl})`, // Replace with your image URL
          backgroundSize: 'cover',      // Default for small screens
          backgroundPosition: 'center',  // Center the image
        }}
      >
        {/* Uncomment if you want to add a heading */}
        {/* <h2 className="text-white text-2xl font-bold -ml-1">Evacuation and Repatriation</h2> */}
      </div>

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-4 flex flex-col items-center justify-start overflow-visible rounded-3xl">
          {/* Bottom Div Content */}
          <h2 className="mb-2 mt-0 text-lg font-bold text-blueCustom">Claims</h2> {/* Bold and blue color */}
          <hr style={{ padding: '1px' }} className='w-full bg-blueCustom' />

          {/* Scrollable Tabs component */}
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="scrollable tabs example"
                variant="scrollable" 
                scrollButtons="auto" // Enables scroll buttons if needed
              >
                <Tab label="Generate Claim" />
                <Tab label="Claim History" />
                <Tab label="Decline Claims" />
              </Tabs>
            </Box>
            {value === 0 && (
              <Box sx={{ p: 3 }}><span className="mb-2 text-redCustom">Upload Required Documents Below!</span></Box>
            )}
            {value === 1 && (
              <Box sx={{ p: 3 }}><span className="mb-2 text-redCustom">View Approved Claims History!</span></Box>
            )}
            {value === 2 && (
              <Box sx={{ p: 3 }}><span className="mb-2 text-redCustom">View Declined Claims History!</span></Box>
            )}
          </Box>

          {/* More content as needed */}
        </div>
      </div>

      <div className='bg-white'> 
        {value === 0 && (
          <Box sx={{ p: 3 }}><GenerateClaim/></Box>
        )}
      </div>
    </div>
  );
};

export default Claims;
