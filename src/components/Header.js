import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';

// Google Analytics tag
useEffect(() => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-HB7SDJTC2F';

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HB7SDJTC2F');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);
}, []);

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
    margin: '0 1vw',
    [theme.breakpoints.down('sm')]: {
        margin: '0 10px',
        fontSize: '14px',
    },
}));

function Header() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
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

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <StyledAppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <IconButton edge="start" color="inherit" onClick={() => navigate('/')}> <img src={logo} alt="CIP Logo" width="78" height="42" /> </IconButton>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
                    <StyledButton onClick={() => navigate('/company')}>Company</StyledButton>
                    <StyledButton onClick={handleSolutionMenuOpen} endIcon={<ExpandMoreIcon />}>Solution</StyledButton>
                    <Menu anchorEl={solutionAnchorEl} open={Boolean(solutionAnchorEl)} onClose={handleSolutionMenuClose}>
                        <MenuItem onClick={() => { navigate('/cross-and-up-sale'); handleSolutionMenuClose(); }}>Cross And Up Sale</MenuItem>
                        <MenuItem onClick={() => { navigate('/segmentation'); handleSolutionMenuClose(); }}>Segmentation</MenuItem>
                        <MenuItem onClick={() => { navigate('/next-best-offer'); handleSolutionMenuClose(); }}>Next Best Offer</MenuItem>
                    </Menu>
                    <StyledButton onClick={handleNewsMenuOpen} endIcon={<ExpandMoreIcon />}>News</StyledButton>
                    <Menu anchorEl={newsAnchorEl} open={Boolean(newsAnchorEl)} onClose={handleNewsMenuClose}>
                        <MenuItem onClick={() => { navigate('/blog'); handleNewsMenuClose(); }}>Blog</MenuItem>
                        <MenuItem onClick={() => { navigate('/blog'); handleNewsMenuClose(); }}>All Posts</MenuItem>
                    </Menu>
                    <StyledButton onClick={() => navigate('/contact')}>Contact</StyledButton>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
