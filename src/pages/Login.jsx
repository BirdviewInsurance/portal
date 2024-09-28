import React, { useState } from 'react';
import { TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // No need for type definition

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate a login check
    if (username === 'admin' && password === 'password') {
      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success'); // Set severity to success
      setOpenSnackbar(true);
      console.log('Login successful');

      // Delay for 2 seconds before redirecting to the dashboard
      setTimeout(() => {
        navigate('/dashboard'); // Replace '/dashboard' with your dashboard route
      }, 2000); // 2000 milliseconds (2 seconds) delay
    } else {
      setSnackbarMessage('Invalid username or password');
      setSnackbarSeverity('error'); // Set severity to error
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close the Snackbar
  };

  return (
    <>
      <style>
        {`
          .shadow-div {
            background-color: white;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            padding: 16px;
          }
          .logoImage {
            width: 100%; /* Use full width for responsiveness */
            max-width: 150px; /* Set a max width to keep it from getting too big */
            height: auto;
            object-fit: contain;
            display: block;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>

      <div style={{ backgroundColor: '#E42D2C' }} className='p-4'></div>
      <div className='shadow-div mb-2'>
        <img className='logoImage' src="images/logo.jpeg" alt="Logo" />
      </div>

      <div style={{boxShadow:'0px 8px 20px rgba(0, 0, 0, 0.3)'}} className="  bg-white py-16 px-6 rounded shadow-md  max-w-sm   lg:max-w-lg   mx-auto mt-8">
        <Typography variant="h5" align="center" gutterBottom>
          Birdview Login
        </Typography>

        <form onSubmit={handleSubmit} className="py-4 space-y-4">
          <TextField
            variant="outlined"
            label="Username"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity} // Use severity state
          variant="filled"
          sx={{
            width: '100%',
            bgcolor: snackbarSeverity === 'success' ? 'green.600' : 'red.600', // Custom color
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
