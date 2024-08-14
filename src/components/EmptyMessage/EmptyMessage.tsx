import React from 'react';
import { Typography, Box } from '@mui/material';

interface EmptyMessageProps {
  message?: string;
}

export const EmptyMessage: React.FC<EmptyMessageProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      textAlign="center"
    >
      <Typography variant="h5" gutterBottom>
        {message || 'No items found.'}
      </Typography>
    </Box>
  );
};
