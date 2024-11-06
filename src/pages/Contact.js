// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import { Box } from '@mui/material';

function HomePage() {
    return (
        <Box sx={{ bgcolor: "#f4f9fc" }}>
            <Header />
            <ContactInfo />
            <Footer />
        </Box>
    );
}

export default HomePage;