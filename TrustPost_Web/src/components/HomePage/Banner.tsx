import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import banner from "../../assets/banner.png"
const BannerContainer = styled(Box)(({ theme }) => ({
  height: '400px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: banner,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  color: '#fff',
  textAlign: 'center',
  "&:before": {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    zIndex: 1,
  },
}));

const BannerContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const BannerButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: theme.spacing(1.5, 4),
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  "&:hover": {
    backgroundColor: '#0056b3',
  },
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <Typography variant="h3" fontWeight="bold">
          Welcome to Our Service
        </Typography>
        <Typography variant="h6" mt={2} mb={3}>
          Fast, reliable, and secure delivery across 63 provinces.
        </Typography>
        <BannerButton variant="contained">Learn More</BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
