import React, { useState } from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, Button, Alert } from '@mui/material';
import { styled } from '@mui/system';
import delivery from '../../assets/delivery.png'; // Thay thế bằng đường dẫn ảnh thực tế của bạn
import OrderDetail from '../Order/OrderDetail';
import orders from '../../data/Order';
// Styled component cho hình minh họa
const Illustration = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  marginTop: '24px',
  borderRadius: '8px',
});

const Tracuu: React.FC = () => {
    
  const [trackingId, setTrackingId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<any | null>(null);

  const handleSearch = () => {
    setError(null);
    setOrder(null); // Reset kết quả tìm kiếm

    if (!trackingId.trim()) {
      setError('Vui lòng nhập mã phiếu gửi.');
      return;
    }

    const ids = trackingId.split(',').map(id => id.trim());
    const foundOrder = orders.find(order => ids.includes(order.orderId));

    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      setError('Không tìm thấy mã phiếu gửi.');
    }
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
        Mã phiếu gửi
      </Typography>

      <Typography variant="body2" color="textSecondary" gutterBottom>
        (Tra nhiều bill bằng cách thêm dấu phẩy giữa các bill)
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="VD: ORD123456"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        sx={{ marginBottom: '16px' }}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Tôi không phải là người máy"
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

      <Illustration
        src={delivery}
        alt="Illustration"
      />

    {error && <Alert severity="error" sx={{ marginTop: '16px' }}>{error}</Alert>}
    </Box>
    {order && (
        <Box sx={{ marginTop: '16px' }}>
            <OrderDetail order={order} />
        </Box>
        )}
  </Box>
  );
};

export default Tracuu;
