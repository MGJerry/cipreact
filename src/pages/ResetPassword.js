// src/pages/ResetPassword.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, Button, TextField, Link } from '@mui/material';
import { styled } from '@mui/system';
import toast, { Toaster } from 'react-hot-toast';

const PageContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
    backgroundColor: '#f4f9fc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
});

const ResetPasswordContainer = styled(Box)({
    maxWidth: '500px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
});

const Title = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
});

const Subtitle = styled(Typography)({
    color: '#666',
    marginBottom: '20px',
    fontSize: '0.9rem',
});

const StyledTextField = styled(TextField)({
    marginBottom: '20px',
    '& .MuiInputBase-root': {
        backgroundColor: '#f2e6fa',
        borderRadius: '8px',
    },
});

const ResetButton = styled(Button)({
    backgroundColor: '#7a3ffd',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 0',
    borderRadius: '30px',
    marginBottom: '10px',
    '&:hover': {
        backgroundColor: '#6a3eed',
    },
});

const ReturnButton = styled(Button)({
    backgroundColor: '#fff',
    color: '#333',
    fontWeight: 'bold',
    padding: '10px 0',
    borderRadius: '30px',
    border: '1px solid #ccc',
    '&:hover': {
        backgroundColor: '#f4f4f4',
    },
});

const BottomText = styled(Box)({
    marginTop: '20px',
    color: '#666',
    fontSize: '0.9rem',
});

function ResetPasswordSection() {
    const handleResetEmail = () => {
        toast.success('Email sent!');
        setTimeout(() => {
            window.location.href = '/reset-password/new';
        }, 5000); // 5 seconds delay
    };

    return (
        <ResetPasswordContainer>
            <Toaster />
            <Title>Reset Your Password</Title>
            <Subtitle>Type in your email and we'll send you a link to reset your password</Subtitle>
            <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
            />
            <ResetButton fullWidth onClick={handleResetEmail}>Send Reset E-mail</ResetButton>
            <ReturnButton fullWidth href="/login">Return to Log In</ReturnButton>
            <BottomText>
                Already a member?{' '}
                <Link href="/login" underline="hover" color="#5363df">
                    Log in now
                </Link>
            </BottomText>
        </ResetPasswordContainer>
    );
}

function ResetPassword() {
    return (
        <Box>
            <Header />
            <PageContainer>
                <ResetPasswordSection />
            </PageContainer>
            <Footer />
        </Box>
    );
}

export default ResetPassword;
