// src/pages/NextBestOffer/NextBestOfferBenefitsSection.js
import React from 'react';
import { Box, Typography, Grid2, Button } from '@mui/material';
import { styled } from '@mui/system';
import purpleBubble from '../../images/BG.png';
import personalizationIcon from '../../images/black-personalization-icon.svg';
import proactivityIcon from '../../images/black-proactivity-icon.svg';
import flexibilityIcon from '../../images/black-ai-icon.svg';

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
    transform: 'translateX(-50%)',
    opacity: 1.0,
    pointerEvents: 'none',
});

const SectionTitle = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 1,
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
    position: 'relative',
    zIndex: 1,
    marginBottom: '30px',
});

const CardContainer = styled(Grid2)({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
});

const FeatureCard = styled(Box)({
    backgroundColor: '#f2e6fa',
    borderRadius: '16px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    maxWidth: '300px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // Ensures the card has a consistent height
});

const IconSection = styled(Box)({
    padding: '40px 0', // Increased padding for better spacing around the icon
    backgroundColor: '#f2e6fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Icon = styled('img')({
    width: '100px',
    height: '100px',
});

const ContentSection = styled(Box)({
    backgroundColor: '#fff',
    padding: '20px',
    textAlign: 'left',
    flexGrow: 1, // Allows this section to fill the remaining height of the card
    boxSizing: 'border-box',
    height: '100%', // Makes the ContentSection span the full height below the IconSection
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

function NextBestOfferBenefitsSection() {
    return (
        <SectionContainer>
            <BackgroundBubble src={purpleBubble} alt="Background Bubble" style={{ zIndex: 0 }} />
            <SectionTitle>Benefits of the Service</SectionTitle>
            <ContactButton variant="contained">Contact Us</ContactButton>

            <CardContainer container spacing={3}>
                <Grid2 item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <FeatureCard>
                        <IconSection>
                            <Icon src={personalizationIcon} alt="Personalization Icon" />
                        </IconSection>
                        <ContentSection>
                            <BenefitTitle>Personalization</BenefitTitle>
                            <BenefitDescription>
                                Providing tailored recommendations for each customer, enhancing satisfaction and increasing conversion rates.
                            </BenefitDescription>
                        </ContentSection>
                    </FeatureCard>
                </Grid2>

                <Grid2 item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <FeatureCard>
                        <IconSection>
                            <Icon src={proactivityIcon} alt="Proactivity Icon" />
                        </IconSection>
                        <ContentSection>
                            <BenefitTitle>Proactivity</BenefitTitle>
                            <BenefitDescription>
                                Not only analyzes past data but also predicts future trends, allowing businesses to reach customers before they seek out products.
                            </BenefitDescription>
                        </ContentSection>
                    </FeatureCard>
                </Grid2>

                <Grid2 item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <FeatureCard>
                        <IconSection>
                            <Icon src={flexibilityIcon} alt="Flexibility Icon" />
                        </IconSection>
                        <ContentSection>
                            <BenefitTitle>Flexibility</BenefitTitle>
                            <BenefitDescription>
                                Continuously adjusts recommendations based on real-time data, ensuring offers are always relevant and appealing to each customer segment.
                            </BenefitDescription>
                        </ContentSection>
                    </FeatureCard>
                </Grid2>
            </CardContainer>
        </SectionContainer>
    );
}

export default NextBestOfferBenefitsSection;
