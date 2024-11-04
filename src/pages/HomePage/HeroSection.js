// src/pages/HomePage/HeroSection.js
import React from 'react';
import { Box, Typography, Button, Container, Grid2 } from '@mui/material';
import { styled } from '@mui/system';
import illustration from '../../images/Illustration.png';
import backgroundSvg1 from '../../images/Group 47215.svg';
import backgroundSvg2 from '../../images/Group 47216.svg';

const HeroContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '40px 20px',
    position: 'relative',
    overflow: 'hidden',
});

const HeroTextBox = styled(Box)({
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '500px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1,
});

const HighlightedText = styled('span')({
    color: '#2196f3',
    fontWeight: 'bold',
});

const HeroButton = styled(Button)({
    color: '#2196f3',
    borderColor: '#2196f3',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: '16px',
    padding: '8px 20px',
    borderRadius: '20px',
    marginTop: '20px',
});

const BackgroundImage = styled('img')({
    position: 'absolute',
    zIndex: 0,
    '@media (max-width: 600px)': {
        display: 'none',
    },
});

const IllustrationImage = styled('img')({
    width: '100%',
    maxWidth: '500px',
    position: 'relative',
    zIndex: 1,
});

function HeroSection() {
    return (
        <HeroContainer>
            <Container>
                <Grid2 container spacing={2} alignItems="center">
                    <Grid2 size={{ xs: 12, md: 6 }} position="relative">
                        <Box position="relative">
                            <HeroTextBox>
                                <Typography variant="h3" gutterBottom>
                                    Hi! We Are <HighlightedText>CIP</HighlightedText>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We provide superior tools and services to help businesses grow revenue, manage customers, and optimize profits. With smart solutions like <strong>Cross & Up-Sale</strong>, <strong>Segmentation</strong>, and <strong>Next Best Offer</strong>, we help you better understand your customers and develop effective marketing strategies.
                                </Typography>
                                <HeroButton variant="outlined">See More</HeroButton>
                            </HeroTextBox>
                            <BackgroundImage src={backgroundSvg1} alt="Background SVG" style={{ left: '-40%', top: '-15%', width: '500px' }} />
                            <BackgroundImage src={backgroundSvg1} alt="Small Background SVG" style={{ left: '45%', top: '130%', width: '100px' }} />
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center" alignItems="center">
                        <Box position="relative">
                            <IllustrationImage src={illustration} alt="Illustration" />
                            <BackgroundImage src={backgroundSvg2} alt="Background SVG" style={{ right: '45%', top: '-25%', width: '100px' }} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </HeroContainer>
    );
}

export default HeroSection;
