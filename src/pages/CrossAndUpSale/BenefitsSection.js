// src/pages/CrossAndUpSale/BenefitsSection.js
import React from 'react';
import { Box, Typography, Grid2, Button } from '@mui/material';
import { styled } from '@mui/system';
import blueBubble from '../../images/bluebubble.svg';
import accuracyIcon from '../../images/white-accuracy-icon.svg';
import efficiencyIcon from '../../images/white-efficiency-icon.svg';
import automationIcon from '../../images/white-automation-icon.svg';

const SectionContainer = styled(Box)({
    position: 'relative',
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto', // Center the section within the page
});

const BackgroundBubble = styled('img')({
    position: 'absolute',
    left: '-5%',
    top: '5%',
    width: '40%',
    opacity: 1.0,
    zIndex: 0,
});

const SectionTitleContainer = styled(Box)({
    textAlign: 'left',
    zIndex: 1,
    position: 'relative', // Ensure z-index is applied
});

const SectionTitle = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#f4f9fc',
    marginBottom: '20px',
    textShadow: '2px 2px 0 #131313', // Add a shadow outline for non-Webkit browsers
    WebkitTextStroke: '1px #131313', // Outline text for Webkit-based browsers
    position: 'relative', // Ensure z-index is applied
});

const ContactButton = styled(Button)({
    color: '#674cec',
    backgroundColor: 'white',
    borderColor: '#2196f3',
    padding: '10px 24px',
    borderRadius: '30px',
    marginTop: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    textTransform: 'uppercase',
    border: '1px solid',
    zIndex: 1,
    position: 'relative', // Ensure z-index is applied
    '&:hover': {
        backgroundColor: '#e0f7fa',
    },
});

const FeatureCard = styled(Box)({
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    textAlign: 'left',
    marginBottom: '20px',
    zIndex: 1,
    position: 'relative', // Ensure z-index is applied
});

const IconContainer = styled(Box)({
    width: '60px',
    height: '60px',
    minWidth: '60px', // Ensure the width stays consistent
    minHeight: '60px', // Ensure the height stays consistent
    borderRadius: '20%',
    display: 'inline-flex', // Helps maintain the size for inline content
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #6D44EB, #13BAFC)',
    position: 'relative', // Ensure z-index is applied
});


const Icon = styled('img')({
    width: '30px',
    height: '30px',
});

const BenefitTitle = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
});

const BenefitDescription = styled(Typography)({
    color: '#666',
    fontSize: '1rem',
});

function BenefitsSection() {
    return (
        <SectionContainer>
            {/* Background Bubble positioned behind content */}
            <BackgroundBubble src={blueBubble} alt="Background Bubble" />

            <Grid2 container spacing={5} alignItems="center" justifyContent="center">
                {/* Left Side: Title and Button */}
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <SectionTitleContainer>
                        <SectionTitle>Benefits of the Service</SectionTitle>
                        <ContactButton variant="contained">Contact Us</ContactButton>
                    </SectionTitleContainer>
                </Grid2>

                {/* Right Side: Feature Cards */}
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <Box>
                        <FeatureCard>
                            <IconContainer>
                                <Icon src={accuracyIcon} alt="Accuracy Icon" />
                            </IconContainer>
                            <Box>
                                <BenefitTitle>Accuracy</BenefitTitle>
                                <BenefitDescription>
                                    CIP analyzes customer data in detail, providing precise predictions about the products and services customers are likely to be interested in.
                                </BenefitDescription>
                            </Box>
                        </FeatureCard>

                        <FeatureCard>
                            <IconContainer>
                                <Icon src={efficiencyIcon} alt="Efficiency Icon" />
                            </IconContainer>
                            <Box>
                                <BenefitTitle>Efficiency</BenefitTitle>
                                <BenefitDescription>
                                    CIP’s solution helps businesses optimize sales opportunities through cross-selling and up-selling strategies quickly and effectively.
                                </BenefitDescription>
                            </Box>
                        </FeatureCard>

                        <FeatureCard>
                            <IconContainer>
                                <Icon src={automationIcon} alt="Automation Icon" />
                            </IconContainer>
                            <Box>
                                <BenefitTitle>Automation</BenefitTitle>
                                <BenefitDescription>
                                    The system automates analysis and recommendations, saving businesses time and resources in reaching out to customers.
                                </BenefitDescription>
                            </Box>
                        </FeatureCard>
                    </Box>
                </Grid2>
            </Grid2>
        </SectionContainer>
    );
}

export default BenefitsSection;
