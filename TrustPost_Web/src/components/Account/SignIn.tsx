import React from 'react';
import { Box, TextField, Button, Typography, Link, Paper } from '@mui/material';

const SignInPage: React.FC = () => {
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
      {/* Khung đăng nhập */}
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
          Đăng Nhập
        </Typography>

        {/* Hộp nhập Email */}
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          variant="outlined"
        />

        {/* Hộp nhập Mật khẩu */}
        <TextField
          fullWidth
          margin="normal"
          label="Mật khẩu"
          type="password"
          variant="outlined"
        />

        {/* Nút Đăng Nhập */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Đăng Nhập
        </Button>

        {/* Quên mật khẩu và Chuyển đến trang Đăng ký */}
        <Box sx={{ marginTop: 2 }}>
          <Link href="#" variant="body2" underline="none">
            Quên mật khẩu?
          </Link>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Bạn chưa có tài khoản?{' '}
            <Link href="/signup" underline="none">
              Đăng ký ngay
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignInPage;
