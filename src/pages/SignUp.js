// src/pages/SignUp.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, Button, TextField, Grid2, Link } from '@mui/material';
import { styled } from '@mui/system';

const PageContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
    backgroundColor: '#f4f9fc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
});

const SignUpContainer = styled(Box)({
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
    marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
    marginBottom: '20px',
    '& .MuiInputBase-root': {
        backgroundColor: '#f2e6fa',
        borderRadius: '8px',
    },
});

const SignUpButton = styled(Button)({
    backgroundColor: '#7a3ffd',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 0',
    borderRadius: '30px',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: '#6a3eed',
    },
});

const OtherSignUpText = styled(Typography)({
    marginTop: '20px',
    fontWeight: 'bold',
    color: '#333',
});

const BottomText = styled(Box)({
    marginTop: '20px',
    color: '#666',
    fontSize: '0.9rem',
});

function SignUpSection() {
    return (
        <SignUpContainer>
            <Title>Create new account</Title>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <StyledTextField
                        fullWidth
                        variant="outlined"
                        placeholder="First Name"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <StyledTextField
                        fullWidth
                        variant="outlined"
                        placeholder="Last Name"
                    />
                </Grid2>
            </Grid2>
            <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Email Address"
            />
            <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Password"
                type="password"
            />
            <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Re-enter Password"
                type="password"
            />
            <SignUpButton fullWidth href="/projects">Sign up</SignUpButton>
            <OtherSignUpText>Sign up with Others</OtherSignUpText>
            <BottomText>
                Already a member?{' '}
                <Link href="/login" underline="hover" color="#5363df">
                    Log in now
                </Link>
            </BottomText>
        </SignUpContainer>
    );
}

function SignUp() {
    return (
        <Box>
            <Header />
            <PageContainer>
                <SignUpSection />
            </PageContainer>
            <Footer />
        </Box>
    );
}

export default SignUp;
