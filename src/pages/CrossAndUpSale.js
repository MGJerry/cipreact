// src/pages/CrossAndUpSale.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroductionSection from '../components/IntroductionSection';
import BenefitsSection from './CrossAndUpSale/BenefitsSection';
import ContactInfo from '../components/ContactInfo';
import { Box } from '@mui/material';

function CrossAndUpSale() {
    const title = "Cross and Up Sale";
    const description = "CIP uses AI algorithms to analyze customer data to identify cross-sell and up-sell opportunities based on past purchase behavior and demographics. The system dynamically makes recommendations and optimizes pricing, helping businesses reach out at the right time with the right offers. This personalizes the customer experience and increases sales success rates.";

    return (
        <Box sx={{
            background: "linear-gradient(#f4f9fc, #f4f9fc, #a6ccfc, #64a5fd, #4a96fd)",
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header />
            <IntroductionSection title={title} description={description} />
            <BenefitsSection />
            <ContactInfo />
            <Footer />
        </Box>
    );
}

export default CrossAndUpSale;
