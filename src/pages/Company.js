// src/pages/Company.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroductionSection from '../components/IntroductionSection';
import VisionMissionSection from './Company/VisionMissionSection';
import CustomerReviewsSection from './Company/CustomerReviewsSection';
import { Box } from '@mui/material';

function Company() {
    const title = "About CIP";
    const description = "Customer Insight Portal (CIP) is an AI solution that helps small and medium-sized businesses optimize revenue and manage customer experience. The name 'CIP' represents the ability to provide in-depth customer information, support businesses in business strategies, and make quick, accurate decisions for sustainable growth.";

    return (
        <Box sx={{ bgcolor: "#f4f9fc" }}>
            <Header />
            <IntroductionSection title={title} description={description} />
            <VisionMissionSection />
            <CustomerReviewsSection />
            <Footer />
        </Box>
    );
}

export default Company;
