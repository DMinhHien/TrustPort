import React, { useState } from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, Button, Alert, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/system';
import delivery from '../../assets/uoctinh_icon.png'; // Thay thế bằng đường dẫn ảnh thực tế của bạn
import OrderDetail from '../Order/OrderDetail';
import orders from '../../data/Order';

// Styled component cho hình minh họa
const Illustration = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  marginTop: '24px',
  borderRadius: '8px',
});

const Uoctinh: React.FC = () => {
  const [fromCity, setFromCity] = useState('');
  const [fromDistrict, setFromDistrict] = useState('');
  const [toCity, setToCity] = useState('');
  const [toDistrict, setToDistrict] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [calculation, setCalculation] = useState<any | null>(null);

  const handleSearch = () => {
    setError(null);
    setCalculation(null); // Reset kết quả tìm kiếm

    if (!fromCity || !fromDistrict || !toCity || !toDistrict || !weight) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    // Giả lập tính cước phí (có thể thay thế bằng API thực tế)
    const result = {
      from: `${fromCity}, ${fromDistrict}`,
      to: `${toCity}, ${toDistrict}`,
      weight: weight,
      fee: Math.floor(Math.random() * 50000) + 20000, // Tính cước phí giả định
    };

    setCalculation(result);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Box
        sx={{
          maxWidth: '600px',
          margin: 'auto',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          ƯỚC TÍNH CƯỚC PHÍ
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          (Chọn các thông tin để tính cước phí gửi hàng)
        </Typography>

        <Typography variant="body1" fontWeight="bold" sx={{ marginTop: '16px' }}>
          Gửi từ:
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <InputLabel>Chọn Tỉnh/Thành phố</InputLabel>
          <Select
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            label="Chọn Tỉnh/Thành phố"
          >
            <MenuItem value="Hà Nội">Hà Nội</MenuItem>
            <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
            <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
            {/* Thêm các tỉnh thành khác */}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <InputLabel>Chọn Quận/Huyện</InputLabel>
          <Select
            value={fromDistrict}
            onChange={(e) => setFromDistrict(e.target.value)}
            label="Chọn Quận/Huyện"
          >
            <MenuItem value="Ba Đình">Ba Đình</MenuItem>
            <MenuItem value="Hoàn Kiếm">Hoàn Kiếm</MenuItem>
            <MenuItem value="Tân Bình">Tân Bình</MenuItem>
            {/* Thêm các quận huyện khác */}
          </Select>
        </FormControl>

        <Typography variant="body1" fontWeight="bold" sx={{ marginTop: '16px' }}>
          Gửi đến:
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <InputLabel>Chọn Tỉnh/Thành phố</InputLabel>
          <Select
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            label="Chọn Tỉnh/Thành phố"
          >
            <MenuItem value="Hà Nội">Hà Nội</MenuItem>
            <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
            <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
            {/* Thêm các tỉnh thành khác */}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <InputLabel>Chọn Quận/Huyện</InputLabel>
          <Select
            value={toDistrict}
            onChange={(e) => setToDistrict(e.target.value)}
            label="Chọn Quận/Huyện"
          >
            <MenuItem value="Ba Đình">Ba Đình</MenuItem>
            <MenuItem value="Hoàn Kiếm">Hoàn Kiếm</MenuItem>
            <MenuItem value="Tân Bình">Tân Bình</MenuItem>
            {/* Thêm các quận huyện khác */}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          variant="outlined"
          label="Khối lượng (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          sx={{ marginBottom: '16px' }}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: '16px' }}
          onClick={handleSearch}
        >
          TRA CỨU
        </Button>
        {error && <Alert severity="error" sx={{ marginTop: '16px' }}>{error}</Alert>}
      </Box>

      {calculation && (
        <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
          <Typography variant="h6" fontWeight="bold">
            Kết quả ước tính:
          </Typography>
          <Typography variant="body1">Gửi từ: {calculation.from}</Typography>
          <Typography variant="body1">Gửi đến: {calculation.to}</Typography>
          <Typography variant="body1">Khối lượng: {calculation.weight} kg</Typography>
          <Typography variant="body1">Cước phí: {calculation.fee.toLocaleString()} VNĐ</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Uoctinh;
