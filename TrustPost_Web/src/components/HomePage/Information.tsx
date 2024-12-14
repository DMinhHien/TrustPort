import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';

const Information = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Background Section */}
      <Box 
        sx={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '150px', 
          backgroundImage: 'url("../images/v121_3.png")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }} 
      />

      {/* Header Section */}
      <Box 
        sx={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '90px', 
          backgroundColor: 'rgba(51,153,255,1)',
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px'
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>Mạng lưới bưu cục trên 63 tỉnh thành</Typography>
        {/* <Button variant="contained" sx={{ backgroundColor: 'white', color: 'rgba(51,153,255,1)' }}>Button</Button> */}
      </Box>

      {/* Main Content */}
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={2} sx={{ marginTop: '120px' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ backgroundImage: 'url("../images/v121_5.png")', backgroundSize: 'cover', height: '40px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ backgroundImage: 'url("../images/v121_6.png")', backgroundSize: 'cover', height: '40px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ backgroundImage: 'url("../images/v121_7.png")', backgroundSize: 'cover', height: '40px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ backgroundImage: 'url("../images/v121_8.png")', backgroundSize: 'cover', height: '35px', width: '100%' }} />
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ padding: 2, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>990.870+</Typography>
              <Typography variant="body2">KHÁCH HÀNG TIN DÙNG</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ padding: 2, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>483.870+</Typography>
              <Typography variant="body2">ĐƠN HÀNG ĐANG VẬN CHUYỂN</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ padding: 2, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>483.870+</Typography>
              <Typography variant="body2">ĐƠN HÀNG ĐANG VẬN CHUYỂN</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ padding: 2, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>483.870+</Typography>
              <Typography variant="body2">ĐƠN HÀNG ĐANG VẬN CHUYỂN</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Information;