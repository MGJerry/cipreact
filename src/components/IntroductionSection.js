// src/components/IntroductionSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const SectionContainer = styled(Box)({
    textAlign: 'center',
    padding: '60px 20px',
});

const Title = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
});

const HighlightedText = styled('span')({
    color: '#5363df', // Blue color for "CIP"
});

const Description = styled(Typography)({
    fontSize: '1rem',
    color: '#666',
    maxWidth: '800px',
    margin: '0 auto 40px',
    lineHeight: 1.6,
});

const ButtonGroup = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
});

const StyledSignUpButton = styled(Button)({
    color: '#6a5acd',
    borderColor: '#6a5acd',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: '16px',
    padding: '8px 20px',
    borderRadius: '50px',
});

const StyledContactButton = styled(Button)({
    background: 'linear-gradient(90deg, #6a5acd, #7a67d8)',
    color: '#fff',
    fontWeight: '500',
    textTransform: 'none',
    fontSize: '16px',
    padding: '8px 20px',
    borderRadius: '50px',
    '&:hover': {
        background: 'linear-gradient(90deg, #5d4cb5, #6958c7)',
    },
});

function IntroductionSection({ title, description }) {
    const navigate = useNavigate();

    return (
        <SectionContainer>
            <Title>
                {title.split(' ').map((word, index) =>
                    word === 'CIP' ? <HighlightedText key={index}>{word}</HighlightedText> : `${word} `
                )}
            </Title>
            <Description>{description}</Description>
            <ButtonGroup>
                <StyledSignUpButton
                    variant="outlined"
                    onClick={() => navigate('/sign-up')}
                >
                    Sign up
                </StyledSignUpButton>
                <StyledContactButton
                    variant="contained"
                    onClick={() => navigate('/contact')}
                >
                    Contact us
                </StyledContactButton>
            </ButtonGroup>
        </SectionContainer>
    );
}

export default IntroductionSection;
