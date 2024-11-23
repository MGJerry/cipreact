// src/components/SubToBlog.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

function SubToBlog() {
    const handleSubscribe = () => {
        toast.success('Subscribed successfully!', {
            duration: 5000,
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 4,
                m: {
                    xs: 2, // Smaller margin on extra-small screens
                    sm: 6, // Medium margin on small screens
                    md: 12, // Larger margin on medium and above screens
                },
                backgroundColor: 'rgba(224, 199, 255, 0.1)', // Background with 10% opacity
                border: '2px solid #E0C7FF', // Stroke with full opacity
                borderRadius: '8px',
                boxShadow: 3,
            }}
        >
            <Toaster />
            <Typography
                variant="h4"
                sx={{
                    mb: 2,
                    fontWeight: 'bold', // Make the title bold
                    fontSize: {
                        xs: '2rem', // Smaller size on extra-small screens
                        sm: '2.5rem', // Medium size on small screens
                        md: '3rem', // Larger size on medium and above screens
                    },
                }}
            >
                Subscribe to the blog
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    mb: 3,
                    color: 'text.secondary',
                    fontSize: {
                        xs: '0.8rem', // Smaller size on extra-small screens
                        sm: '0.85rem', // Slightly larger size on small screens
                        md: '0.9rem', // Default size on medium and above screens
                    },
                }}
            >
                The best source of information for customer service, sales tips, guides, and industry best practices. Join us.
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    maxWidth: '500px',
                    width: '100%',
                }}
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    sx={{
                        flexGrow: 1,
                        backgroundColor: 'white',
                        borderRadius: '4px',
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        px: 3,
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        backgroundColor: '#683FEA', // Set button background color
                        '&:hover': {
                            backgroundColor: '#572fd6', // Slightly darker hover color
                        },
                    }}
                    onClick={handleSubscribe}
                >
                    Subscribe
                </Button>
            </Box>
        </Box>
    );
}

export default SubToBlog;
