// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './HomePage/HeroSection';
import WhyChooseUs from './HomePage/WhyChooseUs';
import FaqSection from './HomePage/FaqSection';
import ContactInfo from '../components/ContactInfo';
import { Box } from '@mui/material';

function HomePage() {
    return (
        <Box sx={{ bgcolor: "#f4f9fc" }}>
            <Header />
            <HeroSection />
            <WhyChooseUs />
            <FaqSection />
            <ContactInfo />
            <Footer />
        </Box>
    );
}

export default HomePage;
