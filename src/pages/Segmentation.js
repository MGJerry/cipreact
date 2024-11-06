// src/pages/Segmentation.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroductionSection from '../components/IntroductionSection';
import BenefitsSection from './Segmentation/SegmentationBenefitsSection';
import ContactInfo from '../components/ContactInfo';
import { Box } from '@mui/material';

function Segmentation() {
    const title = "Segmentation";
    const description = "At CIP, we provide in-depth data analysis services, helping small businesses (SMEs) better understand customers through accurate and effective segmentation. With the support of AI-integrated algorithms, CIP helps you optimize your business strategy and provide wise recommendations on reaching the right target customer group.";

    return (
        <Box sx={{
            background: "linear-gradient(#f4f9fc, #f4f9fc, #f2e4ff, #d2a1e8, #9c8ede)",
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

export default Segmentation;
