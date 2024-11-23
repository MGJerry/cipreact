// src/components/EnjoyPostContact.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function EnjoyPostContact() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align text and button to the left
        justifyContent: 'center',
        textAlign: 'left',
        p: 4,
        m: {
          xs: 2,
          sm: 6,
          md: 12,
        },
        backgroundColor: 'rgba(224, 199, 255, 0.1)', // Light purple background with 10% opacity
        border: '2px solid #E0C7FF', // Border in solid purple
        borderRadius: '8px',
        boxShadow: 3,
        position: 'relative',
        overflow: 'hidden', // For rounded borders and clipping the circle
      }}
    >
      {/* Decorative Circle */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          backgroundColor: 'rgba(224, 199, 255, 0.3)', // Subtle purple circle
          borderRadius: '50%',
        }}
      />

      {/* Text Content */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold', // Bold text
          fontSize: {
            xs: '2rem', // Smaller size on extra-small screens
            sm: '2.5rem', // Medium size on small screens
            md: '3rem', // Larger size on medium and above screens
          },
          color: '#8E8E93', // Grey color for "Enjoy this post?"
          mb: 1,
        }}
      >
        Enjoy this post?
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold', // Bold text
          fontSize: {
            xs: '2rem', // Smaller size on extra-small screens
            sm: '2.5rem', // Medium size on small screens
            md: '3rem', // Larger size on medium and above screens
          },
          color: '#000000', // Black color for "Join us now."
          mb: 3,
        }}
      >
        Join us now.
      </Typography>

      {/* Contact Us Button */}
      <Button
        variant="outlined"
        sx={{
          textTransform: 'uppercase',
          px: 4,
          py: 1.5,
          fontWeight: 'bold',
          fontSize: {
            xs: '0.8rem',
            sm: '0.9rem',
            md: '1rem',
          },
          borderRadius: 4,
          backgroundColor: '#ffffff', // White background
          borderColor: '#674CEC', // Purple border color
          color: '#674CEC', // Purple text color
          '&:hover': {
            backgroundColor: '#f5f0ff', // Slightly light purple on hover
            borderColor: '#674CEC', // Keep the border color
          },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
}

export default EnjoyPostContact;
