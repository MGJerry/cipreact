// src/pages/Login.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Typography, Button, TextField, IconButton, InputAdornment, Link } from '@mui/material';
import { styled } from '@mui/system';
import { Visibility, VisibilityOff, AccountCircle, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
    backgroundColor: '#f4f9fc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
});

const LoginContainer = styled(Box)({
    maxWidth: '400px',
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

const LoginButton = styled(Button)({
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

const OtherLoginText = styled(Typography)({
    marginTop: '20px',
    fontWeight: 'bold',
    color: '#333',
});

const BottomText = styled(Box)({
    marginTop: '20px',
    color: '#666',
    fontSize: '0.9rem',
});

function LoginSection() {
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginClick = () => {
        navigate('/projects');
    };

    return (
        <LoginContainer>
            <Title>Welcome back</Title>
            <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Business email"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
            <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Box textAlign="right" mb="10px">
                <Link href="/reset-password" underline="hover" color="inherit">
                    Forgot password?
                </Link>
            </Box>
            <LoginButton fullWidth onClick={handleLoginClick}>Log in</LoginButton>
            <OtherLoginText>Log In with Others</OtherLoginText>
            <BottomText>
                Don't have an account?{' '}
                <Link href="/sign-up" underline="hover" color="#5363df">
                    Sign up now
                </Link>
            </BottomText>
        </LoginContainer>
    );
}

function Login() {
    return (
        <Box>
            <Header />
            <PageContainer>
                <LoginSection />
            </PageContainer>
            <Footer />
        </Box>
    );
}

export default Login;