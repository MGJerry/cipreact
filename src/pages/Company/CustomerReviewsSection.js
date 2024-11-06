// src/pages/Company/CustomerReviewsSection.js
import React, { useState } from 'react';
import { Box, Typography, IconButton, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import novatekLogo from '../../images/Novatek-Solution-logo.svg';
import evoluxionLogo from '../../images/Evoluxion-Systems-logo.svg';
import luminaryLogo from '../../images/Luminary-Edge-logo.svg';
import bubble1 from '../../images/Group 47218.svg';
import bubble2 from '../../images/Group 47219.svg';
import bubble3 from '../../images/Group 47217.svg';
import bubble4 from '../../images/Group 47220.svg';

const SectionContainer = styled(Box)({
    position: 'relative',
    textAlign: 'center',
    padding: '100px 20px', // Increased padding for more space
    overflow: 'hidden', // Ensures bubbles stay within the section bounds
});

const Title = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#5363df',
    paddingBottom: '40px', // Increased padding for more space
    marginBottom: '40px',
    position: 'relative', // Ensures it stays above the bubbles
    zIndex: 1,
});

const ReviewContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    position: 'relative', // Ensures it stays above the bubbles
    zIndex: 1,
});

const ReviewCard = styled(Card)(({ isCenter }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
    padding: '20px',
    width: isCenter ? '500px' : '400px',
    margin: '0 auto',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    opacity: isCenter ? 1 : 0.5,
    transform: isCenter ? 'scale(1)' : 'scale(0.9)',
    transition: 'all 0.3s ease',
}));

const ReviewText = styled(Typography)({
    fontSize: '1rem',
    color: '#333',
    fontStyle: 'italic',
    marginBottom: '20px',
});

const Reviewer = styled(Typography)({
    fontSize: '0.875rem',
    color: '#666',
    fontWeight: 'bold',
});

const CompanyLogo = styled('img')({
    width: '40px',
    height: 'auto',
    marginBottom: '20px',
});

const ArrowButton = styled(IconButton)({
    color: '#2196f3',
    zIndex: 1, // Ensure buttons stay above the bubbles
});

const BackgroundBubble = styled('img')({
    position: 'absolute',
    opacity: 0.5,
    zIndex: 0, // Set bubbles behind all other elements
});

const reviews = [
    {
        logo: evoluxionLogo,
        text: `"CIP's customer segmentation solution is extremely accurate and easy to use. Thanks to this, we can customize marketing campaigns for each customer group, significantly increasing conversion rates."`,
        reviewer: 'Michael Khoi',
        position: 'Branding Manager, Evoluxion Systems',
    },
    {
        logo: novatekLogo,
        text: `"CIP has helped us better understand our customers and leverage upsell opportunities more effectively. Thanks to CIP, our revenue has increased significantly after just a few months of use."`,
        reviewer: 'Nguyen Van Bao',
        position: 'Sales Manager, Novatek Solutions',
    },
    {
        logo: luminaryLogo,
        text: `"CIP's integration is seamless and has enhanced our analytics capabilities, allowing for deeper insights and smarter decision-making across all departments."`,
        reviewer: 'Tran Thanh Phi',
        position: 'Operations Director, Luminary Edge',
    },
];

function CustomerReviewsSection() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(1);

    const handlePrevious = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Calculate indices for the three reviews to display
    const leftIndex = (currentReviewIndex + reviews.length - 1) % reviews.length;
    const rightIndex = (currentReviewIndex + 1) % reviews.length;

    return (
        <SectionContainer>
            {/* Background Bubbles */}
            <BackgroundBubble src={bubble1} style={{ top: '60%', left: '20%', width: '15%', translate: '-50%'  }} />
            <BackgroundBubble src={bubble2} style={{ top: '30%', right: '20%', width: '7%', translate: '-50%'  }} />
            <BackgroundBubble src={bubble3} style={{ top: '30%', left: '50%', width: '30%', translate: '-50%' }} />
            <BackgroundBubble src={bubble4} style={{ bottom: '0%', right: '10%', width: '10%', translate: '-50%'  }} />

            <Title>What Partners Think About CIP?</Title>
            <Box position="relative" display="flex" alignItems="center" justifyContent="center">
                <ArrowButton onClick={handlePrevious}>
                    <ArrowBackIosIcon />
                </ArrowButton>
                
                <ReviewContainer>
                    <ReviewCard key={leftIndex}>
                        <CardContent>
                            <CompanyLogo src={reviews[leftIndex].logo} alt="Company Logo" />
                            <ReviewText>{reviews[leftIndex].text}</ReviewText>
                            <Reviewer>{reviews[leftIndex].reviewer}</Reviewer>
                            <Typography variant="caption" color="textSecondary">{reviews[leftIndex].position}</Typography>
                        </CardContent>
                    </ReviewCard>

                    <ReviewCard key={currentReviewIndex} isCenter>
                        <CardContent>
                            <CompanyLogo src={reviews[currentReviewIndex].logo} alt="Company Logo" />
                            <ReviewText>{reviews[currentReviewIndex].text}</ReviewText>
                            <Reviewer>{reviews[currentReviewIndex].reviewer}</Reviewer>
                            <Typography variant="caption" color="textSecondary">{reviews[currentReviewIndex].position}</Typography>
                        </CardContent>
                    </ReviewCard>

                    <ReviewCard key={rightIndex}>
                        <CardContent>
                            <CompanyLogo src={reviews[rightIndex].logo} alt="Company Logo" />
                            <ReviewText>{reviews[rightIndex].text}</ReviewText>
                            <Reviewer>{reviews[rightIndex].reviewer}</Reviewer>
                            <Typography variant="caption" color="textSecondary">{reviews[rightIndex].position}</Typography>
                        </CardContent>
                    </ReviewCard>
                </ReviewContainer>

                <ArrowButton onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </ArrowButton>
            </Box>
        </SectionContainer>
    );
}

export default CustomerReviewsSection;
