import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
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
    margin: '0 1vw', // Default spacing
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
    borderRadius: '30px',
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
    borderRadius: '30px',
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
                {/* Logo */}
                <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
                    <img src={logo} alt="CIP Logo" width="78" height="42" />
                </IconButton>

                {/* Menu Icon for Small Screens */}
                <IconButton
                    edge="end"
                    color="inherit"
                    sx={{ display: { xs: 'flex', md: 'none' }, color: 'black' }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>

                {/* Centered Navigation Buttons (Hidden on Small Screens) */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                    }}
                >
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
                        <MenuItem onClick={() => { navigate('/blog'); handleNewsMenuClose(); }}>All Posts</MenuItem>
                    </Menu>

                    <StyledButton onClick={() => navigate('/contact')}>Contact</StyledButton>
                </Box>

                {/* Login and Sign Up Buttons */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <LoginButton variant="outlined" onClick={() => navigate('/login')}>
                        Log In
                    </LoginButton>
                    <SignUpButton variant="contained" onClick={() => navigate('/sign-up')}>
                        Sign Up
                    </SignUpButton>
                </Box>
            </Toolbar>

            {/* Drawer for Small Screens */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem button onClick={() => navigate('/company')}>
                            <ListItemText primary="Company" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/cross-and-up-sale')}>
                            <ListItemText primary="Cross And Up Sale" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/segmentation')}>
                            <ListItemText primary="Segmentation" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/next-best-offer')}>
                            <ListItemText primary="Next Best Offer" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/blog')}>
                            <ListItemText primary="Blog" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/posts')}>
                            <ListItemText primary="All Posts" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/contact')}>
                            <ListItemText primary="Contact" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/login')}>
                            <ListItemText primary="Log In" />
                        </ListItem>
                        <ListItem button onClick={() => navigate('/sign-up')}>
                            <ListItemText primary="Sign Up" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </StyledAppBar>
    );
}

export default Header;
