import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Grid, InputLabel, MenuItem, Select, FormControl } from '@mui/material';

const UserInformation: React.FC = () => {
  const [birthDate, setBirthDate] = useState('01/01/1990');
  const [province, setProvince] = useState('Hà Nội');
  const [district, setDistrict] = useState('Ba Đình');
  const [ward, setWard] = useState('Láng Hạ');
  const [street, setStreet] = useState('Đường Láng');
  
  const handleSave = () => {
    console.log("Thông tin đã lưu");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Thông Tin Tài Khoản</Typography>

      {/* Tên khách hàng, công ty */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Tên khách hàng" variant="outlined" defaultValue="Nguyễn Văn A" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Công ty" variant="outlined" defaultValue="Công ty TNHH ABC" />
        </Grid>
      </Grid>

      {/* Email và số điện thoại */}
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Email" variant="outlined" defaultValue="nguyenvana@example.com" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Số điện thoại" variant="outlined" defaultValue="0912345678" />
        </Grid>
      </Grid>

      {/* Ngày sinh */}
      <TextField
        label="Ngày sinh"
        variant="outlined"
        fullWidth
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        sx={{ marginTop: 2 }}
        placeholder="Nhập ngày sinh (dd/mm/yyyy)"
      />

      {/* Chứng minh nhân dân và mã thẻ */}
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Chứng minh nhân dân" variant="outlined" defaultValue="123456789" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Mã thẻ" variant="outlined" defaultValue="987654321" />
        </Grid>
      </Grid>

      {/* Địa chỉ thường trú */}
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Địa chỉ thường trú</Typography>

          {/* Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Đường/Thôn */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Tỉnh/Thành phố</InputLabel>
                <Select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  label="Tỉnh/Thành phố"
                >
                  <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                  <MenuItem value="TP.HCM">TP.HCM</MenuItem>
                  <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Quận/Huyện</InputLabel>
                <Select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  label="Quận/Huyện"
                >
                  <MenuItem value="Ba Đình">Ba Đình</MenuItem>
                  <MenuItem value="Hoàn Kiếm">Hoàn Kiếm</MenuItem>
                  <MenuItem value="Cầu Giấy">Cầu Giấy</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Phường/Xã</InputLabel>
                <Select
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                  label="Phường/Xã"
                >
                  <MenuItem value="Láng Hạ">Láng Hạ</MenuItem>
                  <MenuItem value="Trung Liệt">Trung Liệt</MenuItem>
                  <MenuItem value="Thịnh Quang">Thịnh Quang</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Đường/Thôn"
                variant="outlined"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                defaultValue="Đường Láng"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Nút lưu thông tin */}
      <Box sx={{ marginTop: 3 }}>
        <Button variant="contained" color="primary" onClick={handleSave} fullWidth>
          Lưu thông tin
        </Button>
      </Box>
    </Box>
  );
};

export default UserInformation;
