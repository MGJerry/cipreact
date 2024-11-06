// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../images/logo.png';

// Custom styling for the AppBar and Buttons
const StyledAppBar = styled(AppBar)({
    backgroundColor: '#f7faff',
    boxShadow: 'none',
    padding: '0 20px',
});

const StyledButton = styled(Button)(({ theme }) => ({
    color: '#333',
    fontWeight: '500',
    textTransform: 'none',
    fontSize: '16px',
    margin: '0 40px', // Default spacing
    [theme.breakpoints.down('sm')]: { // Adjust for small screens
        margin: '0 10px', 
        fontSize: '14px',
    },
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#6a5acd',
    borderColor: '#6a5acd',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: '16px',
    padding: '8px 20px',
    borderRadius: '50px',
    marginRight: '10px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        padding: '6px 16px',
    },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(90deg, #6a5acd, #7a67d8)',
    color: '#fff',
    fontWeight: '500',
    textTransform: 'none',
    fontSize: '16px',
    padding: '8px 20px',
    borderRadius: '50px',
    marginLeft: '10px',
    '&:hover': {
        background: 'linear-gradient(90deg, #5d4cb5, #6958c7)',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        padding: '6px 16px',
    },
}));

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
            <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                {/* Logo */}
                <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
                    <img src={logo} alt="CIP Logo" width="78" height="42" />
                </IconButton>

                {/* Centered Navigation Buttons */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    flexGrow: 1,
                }}>
                    <StyledButton onClick={() => navigate('/company')}>Company</StyledButton>
                    
                    <StyledButton onClick={handleSolutionMenuOpen} endIcon={<ExpandMoreIcon />}>
                        Solution
                    </StyledButton>
                    <Menu
                        anchorEl={solutionAnchorEl}
                        open={Boolean(solutionAnchorEl)}
                        onClose={handleSolutionMenuClose}
                    >
                        <MenuItem onClick={() => { navigate('/cross-and-up-sale'); handleSolutionMenuClose(); }}>Cross And Up Sale</MenuItem>
                        <MenuItem onClick={() => { navigate('/segmentation'); handleSolutionMenuClose(); }}>Segmentation</MenuItem>
                        <MenuItem onClick={() => { navigate('/next-best-offer'); handleSolutionMenuClose(); }}>Next Best Offer</MenuItem>
                    </Menu>

                    <StyledButton onClick={handleNewsMenuOpen} endIcon={<ExpandMoreIcon />}>
                        News
                    </StyledButton>
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
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mt: { xs: 2, sm: 0 } }}>
                    <LoginButton variant="outlined" onClick={() => navigate('/login')}>
                        Log In
                    </LoginButton>
                    <SignUpButton variant="contained" onClick={() => navigate('/sign-up')}>
                        Sign Up
                    </SignUpButton>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
