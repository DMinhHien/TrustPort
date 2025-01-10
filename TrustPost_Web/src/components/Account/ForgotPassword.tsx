import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Link, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomDialog from "../Dialog/dialog";

const ForgotPassPage: React.FC = () => {

  const [captchaChecked, setCaptchaChecked] = useState(false);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');

  const handleCaptchaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaptchaChecked(event.target.checked);
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({
      type: 'success',
      title: '',
      description: '',
    });

    const handleForgot = () => {
        // Kiểm tra thông tin nhập liệu
        if (!email) {
            setDialogData({
              type: 'error',
              title: 'Lỗi Khôi Phục',
              description: 'Vui lòng điền đầy đủ thông tin.',
            });
            setDialogOpen(true);
            return;
          }
    
          // Chuyển hướng trang chủ nếu thành công
        setDialogData({
            type: 'success',
            title: 'Gửi OTP Thành Công',
            description: 'Mã OTP đã được gửi về email của bạn',
          });
          setDialogOpen(true);
      }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      {/* Khung Quên mật khẩu */}
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 360,
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Quên Mật Khẩu
        </Typography>

        {/* Hướng dẫn khôi phục mật khẩu */}
        <Typography variant="body2" sx={{ marginBottom: 3, color: 'gray' }}>
          Để khôi phục mật khẩu, hãy nhập số điện thoại hoặc email đã đăng ký trên hệ thống.
        </Typography>

        {/* Hộp nhập Email hoặc Số điện thoại */}
        <TextField
          fullWidth
          margin="normal"
          label="Email hoặc Số điện thoại"
          type="text"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* CAPTCHA xác nhận */}
        <FormControlLabel
          control={
            <Checkbox
              checked={captchaChecked}
              onChange={handleCaptchaChange}
              color="success"
            />
          }
          label="Tôi không phải là người máy"
          sx={{ marginTop: 2, justifyContent: 'left' }}
        />

        {/* Nút khôi phục mật khẩu */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handleForgot}
        >
          Khôi Phục Mật Khẩu
        </Button>

        {/* Quay lại trang đăng nhập */}
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          <Link href="#" underline="none" onClick={() => navigate('/signin')}>
            Quay lại 
          </Link>
        </Typography>
      </Paper>

      {/* Dialog Thông Báo */}
      <CustomDialog
        open={dialogOpen}
        type={dialogData.type as 'error' | 'success' | 'info'}
        title={dialogData.title}
        description={dialogData.description}
        onClose={() => setDialogOpen(false)}
      />
    </Box>
  );
};

export default ForgotPassPage;
