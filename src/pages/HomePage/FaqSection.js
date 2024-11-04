// src/pages/HomePage/FaqSection.js
import React, { useState } from 'react';
import { Box, Typography, Button, Grid2, Card, CardContent, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import faqImage from '../../images/FAQ Img.png';

const FaqSectionContainer = styled(Box)({
    textAlign: 'center',
    padding: '60px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const FaqHeader = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
});

const FaqTitle = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '3.5rem',
    lineHeight: 1.2,
    textAlign: 'left',
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
    '&:hover': {
        backgroundColor: '#e0f7fa',
    },
});

const FaqImage = styled('img')({
    width: '250px',
    height: 'auto',
    marginTop: '20px',
});

const FaqCard = styled(Card)({
    border: '1px solid #2196f3',
    borderRadius: '8px',
    marginBottom: '10px',
});

const FaqQuestion = styled(Typography)({
    fontWeight: 'bold',
    color: 'black',
});

const HighlightedText = styled('span')({
    color: '#5363df',
});

function FaqSection() {
    const [expanded, setExpanded] = useState(null);

    const handleExpandClick = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const faqs = [
        { question: "How CIP’s AI integration perform?", answer: "Our AI integration uses advanced algorithms to analyze large data sets, delivering actionable insights in real-time." },
        { question: "How can CIP help my business grow revenue?", answer: "CIP helps you identify growth opportunities by providing data-driven insights and recommendations tailored to your business needs." },
        { question: "What type of data used in CIP’s analysis?", answer: "We use a combination of historical sales data, customer demographics, and behavioral data for comprehensive analysis." },
        { question: "Can CIP customize on client’s demand?", answer: "Yes, CIP offers customization options to meet the unique needs of each client, ensuring personalized solutions." },
        { question: "How soon can a client expect the result from CIP?", answer: "Clients can expect to see results within a few weeks, as CIP quickly adapts and integrates with existing systems." },
    ];

    const renderQuestionText = (text) => {
        const parts = text.split('CIP');
        return (
            <>
                {parts.map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index < parts.length - 1 && <HighlightedText>CIP</HighlightedText>}
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <FaqSectionContainer>
            <Grid2 container spacing={4} alignItems="center" sx={{ maxWidth: '1000px', paddingX: '20px' }}>
                <Grid2 size={{ xs: 12, md: 4 }} textAlign="center">
                    <FaqHeader>
                        <FaqTitle>Frequently</FaqTitle>
                        <FaqTitle>Asked</FaqTitle>
                        <FaqTitle>Questions</FaqTitle>
                    </FaqHeader>
                    <ContactButton variant="contained">Contact Us</ContactButton>
                    <FaqImage src={faqImage} alt="FAQ Image" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    {faqs.map((faq, index) => (
                        <FaqCard key={index}>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <FaqQuestion>{renderQuestionText(faq.question)}</FaqQuestion>
                                    <IconButton onClick={() => handleExpandClick(index)} aria-expanded={expanded === index} aria-label="show answer">
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </Box>
                                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                                    <Typography variant="body2" color="textSecondary" style={{ paddingTop: '10px', textAlign: 'left' }}>{faq.answer}</Typography>
                                </Collapse>
                            </CardContent>
                        </FaqCard>
                    ))}
                </Grid2>
            </Grid2>
        </FaqSectionContainer>
    );
}

export default FaqSection;
