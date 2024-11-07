import React from 'react';
import { Box, Typography, TextField, Grid2, Button } from '@mui/material';
import { styled } from '@mui/system';
import CustomerHeader from '../components/CustomerHeader';
import NewProjectImage from '../images/new-project.png';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled(Box)({
    padding: '40px 20px',
    backgroundColor: '#f4f9fc',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const ContentContainer = styled(Grid2)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    width: '100%',
});

const ImageSection = styled(Box)({
    textAlign: 'center',
    width: '100%',
});

const TextSection = styled(Box)({
    textAlign: 'center',
    width: '100%',
});

const StyledTextField = styled(TextField)({
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '30px',
    '& .MuiInputBase-root': {
        padding: '10px 15px',
        borderRadius: '30px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#4c6fec',
    },
});

const CreateProjectButton = styled(Button)({
    background: 'linear-gradient(to right, #a2d8f0, #4c6fec)',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '30px',
    marginTop: '20px',
    '&:hover': {
        background: 'linear-gradient(to right, #90c6e8, #3b5ed6)',
    },
});

function NewProjectPage() {
    const navigate = useNavigate();

    const handleCreateProject = () => {
        toast.success('New project created!');
        setTimeout(() => {
            navigate('/projects');
        }, 5000);
    };

    return (
        <>
            <CustomerHeader />
            <PageContainer>
                <Toaster />
                <ContentContainer container spacing={2}>
                    {/* Image Section */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageSection>
                            <img src={NewProjectImage} alt="New Project" style={{ width: '100%', maxWidth: '600px' }} />
                        </ImageSection>
                    </Grid2>
                    
                    {/* Text Section */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextSection>
                            <Typography variant="h4" component="h1" color="#4c6fec" fontWeight="bold" gutterBottom>
                                Let’s provide a name for the project.
                            </Typography>
                            <StyledTextField
                                placeholder="e.g. Production Analyst"
                                variant="outlined"
                            />
                            <CreateProjectButton onClick={handleCreateProject} fullWidth>
                                Create Project
                            </CreateProjectButton>
                        </TextSection>
                    </Grid2>
                </ContentContainer>
            </PageContainer>
        </>
    );
}

export default NewProjectPage;
