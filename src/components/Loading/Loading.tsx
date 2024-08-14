import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <CircularProgress />
      <Typography variant="h6" style={{ marginTop: '16px' }}>
        {message || 'Loading...'}
      </Typography>
    </Box>
  );
};
