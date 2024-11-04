// src/components/ContactInfo.js
import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid2, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Phone, Email } from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';
import contactImage from '../images/Contact Info.png';

const ContactContainer = styled(Box)({
    maxWidth: '900px',
    margin: '40px auto',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const ContactInfoHeader = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
});

const ContactTitle = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '3.5rem',
    lineHeight: 1.2,
    textAlign: 'left',
});

const ContactForm = styled(Box)({
    flex: 1,
    marginLeft: '40px',
});

const SubmitButton = styled(Button)({
    color: '#fff',
    backgroundColor: '#2196f3',
    textTransform: 'none',
    fontWeight: 'bold',
    padding: '10px 24px',
    borderRadius: '30px',
    '&:hover': {
        backgroundColor: '#1e88e5',
    },
});

const ContactInfoSection = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
});

const ContactInfoText = styled(Typography)({
    color: '#5363df',
    fontSize: '0.9rem',
});

const InfoLabel = styled(Typography)({
    fontWeight: 'bold',
    color: '#333',
    fontSize: '0.9rem',
    marginRight: '5px',
});

function ContactInfo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        industry: '',
        content: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Your message has been sent!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            industry: '',
            content: '',
        });
    };

    return (
        <ContactContainer>
            <Toaster />
            <ContactInfoHeader>
                <ContactTitle>Contact</ContactTitle>
                <ContactTitle>Information</ContactTitle>
                <img src={contactImage} alt="Contact" style={{ width: '250px', height: 'auto', marginTop: '20px' }} />
            </ContactInfoHeader>

            <ContactForm component="form" onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Contact name"
                            variant="standard"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="E-mail"
                            variant="standard"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Contact Phone"
                            variant="standard"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Industry"
                            variant="standard"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Content"
                            variant="standard"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            multiline
                            rows={4}
                        />
                    </Grid2>
                </Grid2>
                
                <ContactInfoSection display="flex" alignItems="center" gap="20px" marginTop="20px">
                    <SubmitButton type="submit" variant="contained">Submit</SubmitButton>
                    
                    <Box display="flex" alignItems="center" gap="10px">
                        <IconButton color="inherit" disableRipple>
                            <Phone />
                        </IconButton>
                        <Box display="flex" flexDirection="column">
                            <InfoLabel>PHONE</InfoLabel>
                            <ContactInfoText>082 885 3801</ContactInfoText>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" gap="10px">
                        <IconButton color="inherit" disableRipple>
                            <Email />
                        </IconButton>
                        <Box display="flex" flexDirection="column">
                            <InfoLabel>E-MAIL</InfoLabel>
                            <ContactInfoText>cipvietnam@gmail.com</ContactInfoText>
                        </Box>
                    </Box>
                </ContactInfoSection>
            </ContactForm>
        </ContactContainer>
    );
}

export default ContactInfo;
