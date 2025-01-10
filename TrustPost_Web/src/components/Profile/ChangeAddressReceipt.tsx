import React, { useState } from 'react';
import { Container, Typography, Box, Divider, TextField, Grid, MenuItem, FormControl, Select, InputLabel, Button } from '@mui/material';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import { useNavigate } from 'react-router-dom';
const ChangeAddressReceipt: React.FC = () => {
  // Set initial state with pre-filled values
  const [city, setCity] = useState('Hà Nội');
  const [district, setDistrict] = useState('Ba Đình');
  const [ward, setWard] = useState('Cửa Đông');
  const [street, setStreet] = useState('Phố Lê Duẩn');
  const navigate = useNavigate();
  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
  };

  const handleDistrictChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDistrict(event.target.value as string);
  };

  const handleWardChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWard(event.target.value as string);
  };

  const handleStreetChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStreet(event.target.value as string);
  };
  const handleConfirmClick = () => {
    // Navigate to the order detail page
    navigate('/orderdetail');
  };
  return (
    <>
      <Header />
  
      {/* Container chính */}
      <Container maxWidth="lg" sx={{ marginTop: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sửa địa chỉ nhận hàng
        </Typography>
  
        <Divider sx={{ marginY: 2 }} />
  
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Thông Tin Người Nhận
        </Typography>
  
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Họ tên" fullWidth variant="outlined" value="Nguyễn Văn A" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Số điện thoại" fullWidth variant="outlined" value="0123456789" />
          </Grid>
        </Grid>
  
        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Địa chỉ
        </Typography>
  
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Tỉnh thành</InputLabel>
              <Select value={city} onChange={handleCityChange} label="Tỉnh thành">
                <MenuItem value={'Hà Nội'}>Hà Nội</MenuItem>
                <MenuItem value={'Hồ Chí Minh'}>Hồ Chí Minh</MenuItem>
                <MenuItem value={'Đà Nẵng'}>Đà Nẵng</MenuItem>
                {/* Thêm các tỉnh thành khác */}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Quận huyện</InputLabel>
              <Select value={district} onChange={handleDistrictChange} label="Quận huyện">
                <MenuItem value={'Ba Đình'}>Ba Đình</MenuItem>
                <MenuItem value={'Hoàn Kiếm'}>Hoàn Kiếm</MenuItem>
                {/* Thêm các quận huyện khác */}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Phường xã</InputLabel>
              <Select value={ward} onChange={handleWardChange} label="Phường xã">
                <MenuItem value={'Cửa Đông'}>Cửa Đông</MenuItem>
                <MenuItem value={'Cửa Nam'}>Cửa Nam</MenuItem>
                {/* Thêm các phường xã khác */}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Đường thôn xóm" fullWidth variant="outlined" value={street} onChange={handleStreetChange} />
          </Grid>
        </Grid>
  
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Button variant="contained" color="primary" sx={{ fontSize: '1.1rem', padding: '10px 20px' }} onClick={handleConfirmClick}>
            Xác nhận
          </Button>
        </Box>
        {/* Divider giữa container và footer */}
        <Divider sx={{ marginY: 4 }} />
      </Container>
  
      <Footer />
    </>
  );
};

export default ChangeAddressReceipt;
