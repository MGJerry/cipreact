// src/pages/AdminPage.js
import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import CustomerHeader from '../components/CustomerHeader';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled(Box)({
    padding: '20px 40px',
    backgroundColor: '#f4f9fc',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const StyledTableContainer = styled(TableContainer)({
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '100%',
});

const StyledButton = styled(Button)({
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'normal',
    fontSize: '0.9rem',
    textTransform: 'none',
    borderRadius: '30px',
    border: '1px solid #d1d5de',
    padding: '12px 24px',
    '&:hover': {
        backgroundColor: '#e6ebf5',
    },
    marginTop: '20px',
});

const StyledTableCell = styled(TableCell)({
    textAlign: 'center',
});

const StyledTableHeadCell = styled(TableCell)({
    textAlign: 'center',
    fontWeight: 'bold',
});

const projectList = [
    { id: 51010, name: 'Nexa Ventures', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'Nexa Ventures is an innovative ...' },
    { id: 19384, name: 'Vertex Innovations', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'Vertex Innovations is an innovative ...' },
    { id: 86052, name: 'Lumina Labs', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'Lumina Labs is an innovative ...' },
    { id: 42719, name: 'OrbitEdge', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'OrbitEdge is an innovative ...' },
    { id: 90236, name: 'QuantumRise', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'QuantumRise is an innovative ...' },
    { id: 65174, name: 'BlueWave Collective', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'BlueWave Collective is an innovative ...' },
    { id: 37491, name: 'StratosSpark', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'StratosSpark is an innovative ...' },
    { id: 50862, name: 'BrightHive Solutions', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'BrightHive Solutions is an innovative ...' },
    { id: 72905, name: 'NovaBridge', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'NovaBridge is an innovative ...' },
    { id: 14683, name: 'PulseShift Technologies', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'PulseShift Technologies is an innovative ...' },
    { id: 32057, name: 'Nexa Ventures', owner: 'Elliot Mercer', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025', description: 'Nexa Ventures is an innovative ...' },
];

function Admin() {
    const [visibleProjects, setVisibleProjects] = useState(10);
    const navigate = useNavigate();

    const handleLoadMore = () => {
        setVisibleProjects(prev => prev + 10);
    };

    const handleProjectClick = () => {
        navigate('/dashboard');
    };

    return (
        <>
            <CustomerHeader />
            <PageContainer>
                <StyledTableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableHeadCell>Project ID</StyledTableHeadCell>
                                <StyledTableHeadCell>Project Name</StyledTableHeadCell>
                                <StyledTableHeadCell>Owner</StyledTableHeadCell>
                                <StyledTableHeadCell>Status</StyledTableHeadCell>
                                <StyledTableHeadCell>Start Date</StyledTableHeadCell>
                                <StyledTableHeadCell>End Date</StyledTableHeadCell>
                                <StyledTableHeadCell>Description</StyledTableHeadCell>
                                <StyledTableHeadCell></StyledTableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projectList.slice(0, visibleProjects).map(project => (
                                <TableRow key={project.id}>
                                    <StyledTableCell onClick={handleProjectClick}>{project.id}</StyledTableCell>
                                    <StyledTableCell onClick={handleProjectClick}>{project.name}</StyledTableCell>
                                    <StyledTableCell>{project.owner}</StyledTableCell>
                                    <StyledTableCell>
                                        <Typography color="#4c6fec" fontWeight="bold">{project.status}</Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>{project.startDate}</StyledTableCell>
                                    <StyledTableCell>{project.endDate}</StyledTableCell>
                                    <StyledTableCell>{project.description}</StyledTableCell>
                                    <StyledTableCell><EditIcon color="action" /></StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
                {visibleProjects < projectList.length && (
                    <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
                )}
            </PageContainer>
        </>
    );
}

export default Admin;
