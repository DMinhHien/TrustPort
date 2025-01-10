import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, Paper } from '@mui/material';
import CustomDialog from "../Dialog/dialog";
import { useNavigate } from 'react-router-dom';
const SignUpPage: React.FC = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({
    type: 'error',
    title: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleSignUp = () => {
    // Kiểm tra thông tin nhập liệu
    if (!name || !phone || !password || !confirmPassword) {
        setDialogData({
          type: 'error',
          title: 'Lỗi Đăng Ký',
          description: 'Vui lòng điền đầy đủ thông tin.',
        });
        setDialogOpen(true);
        return;
      }

      if (password !== confirmPassword) {
        setDialogData({
          type: 'error',
          title: 'Lỗi Mật Khẩu',
          description: 'Mật khẩu và xác nhận mật khẩu không khớp.',
        });
        setDialogOpen(true);
        return;
      }

      // Chuyển hướng trang chủ nếu thành công
    setDialogData({
        type: 'success',
        title: 'Đăng Ký Thành Công',
        description: 'Bạn đã đăng ký thành công!',
      });
      setDialogOpen(true);
  
    setTimeout(() => {
        setDialogOpen(false);
        navigate('/'); // Điều hướng đến trang chủ
    }, 2000);
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
      {/* Khung đăng ký */}
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
          Đăng Ký
        </Typography>

        {/* Họ tên */}
        <TextField
          fullWidth
          margin="normal"
          label="Họ và tên"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Số điện thoại */}
        <TextField
          fullWidth
          margin="normal"
          label="Số điện thoại"
          type="tel"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Mật khẩu */}
        <TextField
          fullWidth
          margin="normal"
          label="Mật khẩu"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Xác nhận mật khẩu */}
        <TextField
          fullWidth
          margin="normal"
          label="Xác nhận mật khẩu"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Nút Đăng Ký */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handleSignUp}
        >
          Đăng Ký
        </Button>

        {/* Hướng dẫn người dùng */}
        <Typography variant="body2" sx={{ marginTop: 2, color: 'gray' }}>
        Khi nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao dịch mua bán theo Điều kiện sử dụng & chính sách của TrustPost.
        </Typography>

        {/* Điều hướng về trang Đăng nhập */}
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Bạn đã có tài khoản?{' '}
          <Link href="/signin" underline="none">
            Đăng nhập ngay
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

export default SignUpPage;
