// src/pages/NewPassword.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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

const NewPasswordContainer = styled(Box)({
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

const ChangePasswordButton = styled(Button)({
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

function NewPasswordSection() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleChangePassword = () => {
        toast.success('Password changed successfully!');
        setTimeout(() => {
            window.location.href = '/login';
        }, 5000); // 5 seconds delay
    };

    return (
        <NewPasswordContainer>
            <Toaster />
            <Title>Set New Password</Title>
            <Subtitle>Enter a new password below to change your password</Subtitle>
            <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="New password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Confirm your password"
                type={showConfirmPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end">
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <ChangePasswordButton fullWidth onClick={handleChangePassword}>Change Password</ChangePasswordButton>
        </NewPasswordContainer>
    );
}

function NewPassword() {
    return (
        <Box>
            <Header />
            <PageContainer>
                <NewPasswordSection />
            </PageContainer>
            <Footer />
        </Box>
    );
}

export default NewPassword;
