// src/components/CustomerHeader.js
import React from 'react';
import { AppBar, Toolbar, Button, Avatar, Box, MenuItem, FormControl, Select } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';

import Logo from '../images/logo.png'; // Update path if needed
import UserAvatar from '../images/pexels-christina-morillo.png';

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#f4f9fc',
    boxShadow: 'none',
    padding: '10px 20px',
});

const LogoLink = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    marginRight: '40px',
});

const StyledSelect = styled(Select)({
    backgroundColor: '#f0f1ff',
    borderRadius: '8px',
    minWidth: '180px',
    marginLeft: 'auto',
    border: '1px solid #e1e4f6',
    '& .MuiSelect-select': {
        paddingRight: '32px', // Ensures no placeholder text after selection
    },
});

const StyledButton = styled(Button)({
    backgroundColor: '#f0f1ff',
    color: '#333',
    fontWeight: 'bold',
    textTransform: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    marginRight: '10px',
    border: '1px solid #e1e4f6',
    '&:hover': {
        backgroundColor: '#e2e4f8',
    },
});

const HighlightedButton = styled(Button)({
    backgroundColor: '#5363df',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    marginRight: '10px',
    '&:hover': {
        backgroundColor: '#6a3eed',
    },
});

const UserInfo = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
});

function CustomerHeader() {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                {/* Logo */}
                <LogoLink to="/">
                    <img src={Logo} alt="CIP Logo" style={{ height: '40px' }} />
                </LogoLink>

                {/* Project Dropdown */}
                <FormControl variant="outlined" size="small">
                    <StyledSelect defaultValue="Nexa Ventures">
                        <MenuItem value="Nexa Ventures">Nexa Ventures</MenuItem>
                        <MenuItem value="Vertex Innovations">Vertex Innovations</MenuItem>
                        <MenuItem value="Lumina Labs">Lumina Labs</MenuItem>
                    </StyledSelect>
                </FormControl>

                {/* Spacer to push elements to the right */}
                <Box sx={{ flexGrow: 1 }} />

                {/* Buttons */}
                <StyledButton component={Link} to="/report" startIcon={<AssignmentIcon />}>
                    Report
                </StyledButton>
                <HighlightedButton component={Link} to="/dashboard" startIcon={<DashboardIcon />}>
                    Dashboard
                </HighlightedButton>

                {/* User Info */}
                <UserInfo>
                    <StyledButton component={Link} to="/account" startIcon={<PersonIcon />}>Jane Doe</StyledButton>
                    <Avatar alt="Jane Doe" src={UserAvatar} component={Link} to="/account" />
                </UserInfo>
            </Toolbar>
        </StyledAppBar>
    );
}

export default CustomerHeader;