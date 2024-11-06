// src/pages/Company/VisionMissionSection.js
import React from 'react';
import { Box, Typography, Grid2 } from '@mui/material';
import { styled } from '@mui/system';
import visionMissionImage from '../../images/ai-company.png';

const SectionContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
});

const VisionMissionImage = styled('img')({
    width: '100%',
    maxWidth: '500px',
});

const Title = styled(Typography)({
    fontSize: '4rem', // Four times the size of the text
    fontWeight: 'bold',
    color: '#5363df',
    marginBottom: '10px',
});

const Text = styled(Typography)({
    fontSize: '1rem',
    color: '#666',
    lineHeight: 1.6,
    marginBottom: '20px',
});

function VisionMissionSection() {
    return (
        <SectionContainer>
            <Grid2 container spacing={4} alignItems="center" maxWidth="1200px">
                {/* Left side: Image */}
                <Grid2 size={{ xs: 12, md: 6 }} textAlign="center">
                    <VisionMissionImage src={visionMissionImage} alt="Our Vision and Mission" />
                </Grid2>

                {/* Right side: Vision and Mission texts */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Box>
                        <Title>Our Vision</Title>
                        <Text>
                            Become a <strong>top 5 solution</strong> in providing opportunities to SMEs
                            growing in their major aspect in Vietnam.
                        </Text>

                        <Title>Our Mission</Title>
                        <Text>
                            Provide an AI integrated solution to SMEs which helps businesses in their
                            revenue and future growth.
                        </Text>
                    </Box>
                </Grid2>
            </Grid2>
        </SectionContainer>
    );
}

export default VisionMissionSection;
