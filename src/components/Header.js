// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import logo from '../images/logo.png';

// Custom styling for the AppBar and Buttons
const StyledAppBar = styled(AppBar)({
    backgroundColor: '#f7faff',
    boxShadow: 'none',
    padding: '0 20px',
});

const StyledButton = styled(Button)({
    color: '#333',
    fontWeight: '500',
    textTransform: 'none',
    fontSize: '16px',
    margin: '0 10px',
});

const LoginButton = styled(Button)({
    color: '#6a5acd',
    borderColor: '#6a5acd',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: '16px',
    padding: '8px 20px',
    borderRadius: '50px',
    marginRight: '10px',
});

const SignUpButton = styled(Button)({
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

function Header() {
    const navigate = useNavigate();

    const [solutionAnchorEl, setSolutionAnchorEl] = useState(null);
    const [newsAnchorEl, setNewsAnchorEl] = useState(null);

    const handleSolutionMenuOpen = (event) => {
        setSolutionAnchorEl(event.currentTarget);
    };

    const handleSolutionMenuClose = () => {
        setSolutionAnchorEl(null);
    };

    const handleNewsMenuOpen = (event) => {
        setNewsAnchorEl(event.currentTarget);
    };

    const handleNewsMenuClose = () => {
        setNewsAnchorEl(null);
    };

    return (
        <StyledAppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
                    <img src={logo} alt="CIP Logo" width="78" height="42" />
                </IconButton>

                {/* Centered Navigation Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                    <StyledButton onClick={() => navigate('/company')}>Company</StyledButton>
                    <StyledButton onClick={handleSolutionMenuOpen}>Solution</StyledButton>
                    <Menu
                        anchorEl={solutionAnchorEl}
                        open={Boolean(solutionAnchorEl)}
                        onClose={handleSolutionMenuClose}
                    >
                        <MenuItem onClick={() => { navigate('/cross-and-up-sale'); handleSolutionMenuClose(); }}>Cross And Up Sale</MenuItem>
                        <MenuItem onClick={() => { navigate('/segmentation'); handleSolutionMenuClose(); }}>Segmentation</MenuItem>
                        <MenuItem onClick={() => { navigate('/next-best-offer'); handleSolutionMenuClose(); }}>Next Best Offer</MenuItem>
                    </Menu>

                    <StyledButton onClick={handleNewsMenuOpen}>News</StyledButton>
                    <Menu
                        anchorEl={newsAnchorEl}
                        open={Boolean(newsAnchorEl)}
                        onClose={handleNewsMenuClose}
                    >
                        <MenuItem onClick={() => { navigate('/blog'); handleNewsMenuClose(); }}>Blog</MenuItem>
                        <MenuItem onClick={() => { navigate('/posts'); handleNewsMenuClose(); }}>All Posts</MenuItem>
                    </Menu>

                    <StyledButton onClick={() => navigate('/contact')}>Contact</StyledButton>
                </Box>

                {/* Login and Sign Up Buttons */}
                <LoginButton variant="outlined" onClick={() => navigate('/login')}>
                    Log In
                </LoginButton>
                <SignUpButton variant="contained" onClick={() => navigate('/sign-up')}>
                    Sign Up
                </SignUpButton>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
