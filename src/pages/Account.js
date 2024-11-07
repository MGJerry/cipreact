// src/pages/AccountPage.js
import React from 'react';
import { Box, Grid2, Typography, Button, TextField, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import CustomerHeader from '../components/CustomerHeader';
import SecurePasswordImage from '../images/secure-password.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';

const PageContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '40px',
    backgroundColor: '#f4f9fc',
});

const FormContainer = styled(Box)({
    maxWidth: '400px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
});

const Title = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4c6fec',
    textAlign: 'center',
    marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
    marginBottom: '20px',
    '& .MuiInputBase-root': {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
    },
});

const ChangePasswordButton = styled(Button)({
    background: 'linear-gradient(to right, #a2d8f0, #4c6fec)',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 0',
    borderRadius: '30px',
    marginTop: '20px',
    '&:hover': {
        background: 'linear-gradient(to right, #90c6e8, #3b5ed6)',
    },
});

function AccountPage() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChangePassword = () => {
        toast.success('Password changed successfully!', {
            duration: 5000,
        });
    };

    return (
        <>
            <CustomerHeader />
            <PageContainer>
                <Toaster />
                <Grid2 container spacing={12} justifyContent="center" alignItems="center">
                    <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
                        <FormContainer>
                            <Title>Changing Password</Title>
                            <StyledTextField
                                fullWidth
                                variant="outlined"
                                placeholder="Previous Password"
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
                                placeholder="Current Password"
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
                            <ChangePasswordButton fullWidth onClick={handleChangePassword}>
                                Change Password
                            </ChangePasswordButton>
                        </FormContainer>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
                        <Box>
                            <img src={SecurePasswordImage} alt="Secure Password" style={{ width: '100%', maxWidth: '500px' }} />
                        </Box>
                    </Grid2>
                </Grid2>
            </PageContainer>
        </>
    );
}

export default AccountPage;
