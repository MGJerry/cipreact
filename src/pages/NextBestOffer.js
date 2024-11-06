// src/pages/CrossAndUpSale.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroductionSection from '../components/IntroductionSection';
import NextBestOfferBenefitsSection from './NextBestOffer/NextBestOfferBenefitsSection';
import ContactInfo from '../components/ContactInfo';
import { Box } from '@mui/material';

function NextBestOffer() {
    const title = "Next Best Offer";
    const description = "CIP uses AI to analyze shopping behavior, engagement, and customer data to determine the most suitable product or service for each individual. The system makes personalized recommendations based on real-time data, helping to maximize sales opportunities and enhance the customer experience.";

    return (
        <Box sx={{
            background: "linear-gradient(#f4f9fc, #f4f9fc, #f2e4ff, #d2a1e8, #9c8ede)",
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header />
            <IntroductionSection title={title} description={description} />
            <NextBestOfferBenefitsSection />
            <ContactInfo />
            <Footer />
        </Box>
    );
}

export default NextBestOffer;
