// src/pages/HomePage/WhyChooseUs.js
import React from 'react';
import { Box, Typography, Button, Grid2 } from '@mui/material';
import { styled } from '@mui/system';
import aiIcon from '../../images/ai-icon.svg';
import accuracyIcon from '../../images/accuracy-icon.svg';
import flexibilityIcon from '../../images/flexibility-icon.svg';
import sectionBackground from '../../images/BG.svg';

const SectionContainer = styled(Box)({
    textAlign: 'center',
    margin: '20px auto',
    padding: '100px 20px',
    position: 'relative',
    overflow: 'hidden',
});

const SectionBackgroundImage = styled('img')({
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40%',
    height: 'auto',
    zIndex: 0,
});

const SectionTitle = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 1,
});

const ContactButton = styled(Button)({
    color: '#2196f3',
    backgroundColor: 'white',
    borderColor: '#2196f3',
    padding: '10px 24px',
    borderRadius: '30px',
    marginTop: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    textTransform: 'uppercase',
    border: '1px solid',
    position: 'relative',
    zIndex: 1,
    '&:hover': {
        backgroundColor: '#e0f7fa',
    },
});

const FeatureCard = styled(Box)({
    color: '#2196f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    borderRadius: '16px',
    backgroundColor: 'white',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    width: '160px',
    height: '160px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
});

const FeatureIcon = styled('img')({
    width: '120px',
    height: '120px',
    marginBottom: '15px',
});

const FeatureLabel = styled(Typography)({
    fontSize: '1rem',
    fontWeight: 'bold',
});

function WhyChooseUs() {
    return (
        <SectionContainer>
            <SectionBackgroundImage src={sectionBackground} alt="Background SVG" />
            <SectionTitle>Why Choose Us?</SectionTitle>
            <ContactButton variant="contained">Contact Us</ContactButton>
            <Grid2 container spacing={2} justifyContent="center" sx={{ marginTop: '40px', maxWidth: '1000px', marginX: 'auto' }}>
                {[{ icon: aiIcon, label: 'AI Integration' }, { icon: accuracyIcon, label: 'Accuracy' }, { icon: flexibilityIcon, label: 'Flexibility' }].map((feature, index) => (
                    <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                        <FeatureCard>
                            <FeatureIcon src={feature.icon} alt={`${feature.label} Icon`} />
                            <FeatureLabel>{feature.label}</FeatureLabel>
                        </FeatureCard>
                    </Grid2>
                ))}
            </Grid2>
        </SectionContainer>
    );
}

export default WhyChooseUs;
