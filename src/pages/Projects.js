// src/pages/ProjectsPage.js
import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import CustomerHeader from '../components/CustomerHeader';
import { styled } from '@mui/system';
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
    { id: 51010, name: 'Nexa Ventures', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025' },
    { id: 19384, name: 'Vertex Innovations', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025' },
    { id: 86052, name: 'Lumina Labs', status: 'Completed', startDate: '12/04/2024', endDate: '12/10/2025' },
];

function Projects() {
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
                                <StyledTableHeadCell>Status</StyledTableHeadCell>
                                <StyledTableHeadCell>Start Date</StyledTableHeadCell>
                                <StyledTableHeadCell>End Date</StyledTableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projectList.slice(0, visibleProjects).map(project => (
                                <TableRow key={project.id}>
                                    <StyledTableCell onClick={handleProjectClick}>{project.id}</StyledTableCell>
                                    <StyledTableCell onClick={handleProjectClick}>{project.name}</StyledTableCell>
                                    <StyledTableCell>
                                        <Typography color="#4c6fec" fontWeight="bold">{project.status}</Typography>
                                    </StyledTableCell>
                                    <StyledTableCell>{project.startDate}</StyledTableCell>
                                    <StyledTableCell>{project.endDate}</StyledTableCell>
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

export default Projects;
