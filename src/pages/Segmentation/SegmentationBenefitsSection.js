// src/pages/Segmentation/SegmentationBenefitsSection.js
import React from 'react';
import { Box, Typography, Grid2, Button } from '@mui/material';
import { styled } from '@mui/system';
import purpleBubble from '../../images/BG.png';
import customerIcon from '../../images/white-customer-icon.svg';
import megaphoneIcon from '../../images/white-megaphone-icon.svg';
import resourceIcon from '../../images/white-resource-icon.svg';

const SectionContainer = styled(Box)({
    position: 'relative',
    padding: '100px 20px',
    textAlign: 'center',
});

const BackgroundBubble = styled('img')({
    position: 'absolute',
    top: '0',
    left: '50%',
    width: '50%',
    translate: '-50%',
    opacity: 1.0,
    pointerEvents: 'none',
});

const SectionTitleContainer = styled(Box)({
    position: 'relative', // Ensures zIndex works
    zIndex: 1, // Higher zIndex to layer over the background bubble
});

const SectionTitle = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
});

const ContactButton = styled(Button)({
    color: '#674cec',
    backgroundColor: 'white',
    padding: '10px 24px',
    borderRadius: '30px',
    fontWeight: 'bold',
    fontSize: '1rem',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    border: '1px solid #2196f3',
    '&:hover': {
        backgroundColor: '#e0f7fa',
    },
    position: 'relative', // Ensures zIndex works
    zIndex: 1, // Higher zIndex to layer over the background bubble
});

const CardContainer = styled(Grid2)({
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    position: 'relative', // Ensures zIndex works
    zIndex: 1, // Higher zIndex to layer over the background bubble
});

const FeatureCard = styled(Box)({
    backgroundColor: '#fff',
    padding: '40px 20px',
    borderRadius: '16px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '0 auto', // Center within the grid
});

const IconContainer = styled(Box)({
    width: '50px',
    height: '50px',
    borderRadius: '20%',
    margin: '0 auto 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #EC407A, #FF80AB)',
});

const Icon = styled('img')({
    width: '30px',
    height: '30px',
});

const BenefitTitle = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
});

const BenefitDescription = styled(Typography)({
    color: '#666',
    fontSize: '1rem',
});

function SegmentationBenefitsSection() {
    return (
        <SectionContainer>
            <BackgroundBubble src={purpleBubble} alt="Background Bubble" style={{ zIndex: 0 }} />
            <SectionTitleContainer>
                <SectionTitle>Benefits of the Service</SectionTitle>
                <ContactButton variant="contained" style={{ marginBottom: '30px' }}>
                    Contact Us
                </ContactButton>
            </SectionTitleContainer>

            <CardContainer container spacing={3}>
                <Grid2 item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <FeatureCard>
                        <IconContainer>
                            <Icon src={customerIcon} alt="Customer Icon" />
                        </IconContainer>
                        <BenefitTitle>In-depth Customer Understanding</BenefitTitle>
                        <BenefitDescription>
                            Helping businesses gain a deeper understanding of each group's specific needs. This forms the foundation for more personalized and effective marketing strategies.
                        </BenefitDescription>
                    </FeatureCard>
                </Grid2>

                <Grid2 item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <FeatureCard>
                        <IconContainer>
                            <Icon src={megaphoneIcon} alt="Marketing Efficiency Icon" />
                        </IconContainer>
                        <BenefitTitle>Enhanced Marketing Efficiency</BenefitTitle>
                        <BenefitDescription>
                            Segmentation helps you target the right potential customers. This reduces unnecessary marketing costs while increasing conversion rates.
                        </BenefitDescription>
                    </FeatureCard>
                </Grid2>

                <Grid2 item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <FeatureCard>
                        <IconContainer>
                            <Icon src={resourceIcon} alt="Resource Allocation Icon" />
                        </IconContainer>
                        <BenefitTitle>Optimized Resource Allocation</BenefitTitle>
                        <BenefitDescription>
                            Optimize your resources—time, manpower, and finances—by focusing on high-value customer segments, leading to overall business efficiency improvements.
                        </BenefitDescription>
                    </FeatureCard>
                </Grid2>
            </CardContainer>
        </SectionContainer>
    );
}

export default SegmentationBenefitsSection;
