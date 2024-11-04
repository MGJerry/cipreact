// src/components/Footer.js
import React from 'react';
import { Box, Typography, IconButton, Grid2 } from '@mui/material';
import { Facebook, LinkedIn, Phone, Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import logo from '../images/logo.png';

// Custom styles for the footer container and typography
const FooterContainer = styled(Box)({
    backgroundColor: '#f7faff',
    padding: '40px 20px',
    borderTop: '1px solid #e0e0e0',
});

const FooterLink = styled(Typography)({
    cursor: 'pointer',
    color: '#333',
    '&:hover': {
        textDecoration: 'underline',
    },
});

function Footer() {
    const navigate = useNavigate();

    return (
        <FooterContainer component="footer">
            <Grid2 container spacing={4} justifyContent="center">
                {/* Logo and Social Icons */}
                <Grid2 size={{ xs: 12, md: 3 }} textAlign="center">
                    <IconButton onClick={() => navigate('/')}>
                        <img src={logo} alt="CIP Logo" width="78" height="42" />
                    </IconButton>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: 1 }}>
                        <IconButton component="a" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook fontSize="large" sx={{ color: '#3b5998' }} />
                        </IconButton>
                        <IconButton component="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedIn fontSize="large" sx={{ color: '#0077b5' }} />
                        </IconButton>
                    </Box>
                </Grid2>

                {/* Solution Links */}
                <Grid2 size={{ xs: 12, md: 3 }} textAlign="left">
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        SOLUTION
                    </Typography>
                    <FooterLink onClick={() => navigate('/cross-and-up-sale')}>Cross and Up Sale</FooterLink>
                    <FooterLink onClick={() => navigate('/segmentation')}>Segmentation</FooterLink>
                    <FooterLink onClick={() => navigate('/next-best-offer')}>Next best offer</FooterLink>
                </Grid2>

                {/* News Links */}
                <Grid2 size={{ xs: 12, md: 3 }} textAlign="left">
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        NEWS
                    </Typography>
                    <FooterLink onClick={() => navigate('/blog')}>Blog and Industry News</FooterLink>
                </Grid2>

                {/* Contact Information */}
                <Grid2 size={{ xs: 12, md: 3 }} textAlign="left">
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        CONTACT
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: 1 }}>
                        <Phone fontSize="small" />
                        <Typography>0828853801</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: 1 }}>
                        <Email fontSize="small" />
                        <Typography>cipvietnam@gmail.com</Typography>
                    </Box>
                </Grid2>
            </Grid2>

            {/* Copyright */}
            <Box sx={{ textAlign: 'center', mt: 4, color: '#666' }}>
                <Typography variant="body2">© 2024. All rights reserved.</Typography>
            </Box>
        </FooterContainer>
    );
}

export default Footer;
