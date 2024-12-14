import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#243447', // Màu nền
        color: '#ffffff', // Màu chữ
        padding: '40px 20px',
        fontSize: '14px',
      }}
    >
      <Grid container spacing={4}>
        {/* Cột 1 */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            TrustPort
          </Typography>
          <Typography variant="body2">
            TrustPort là doanh nghiệp hàng đầu cung cấp dịch vụ chuyển phát
            nhanh hàng hoá, bưu kiện trong nước, quốc tế tại Việt Nam.
          </Typography>
        </Grid>

        {/* Cột 2 */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>
            Về TrustPort
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Giới thiệu
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Tin tức
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Mạng lưới bưu cục
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Tuyển dụng
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Hợp tác
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Kết nối API
            </Link>
          </Typography>
        </Grid>

        {/* Cột 3 */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Hỗ trợ khách hàng
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Chat online với CSKH
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Hướng dẫn sử dụng dịch vụ
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Câu hỏi thường gặp
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Điều khoản sử dụng
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Chính sách bảo mật thông tin
            </Link>
          </Typography>
        </Grid>

        {/* Cột 4 */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Thông tin liên hệ
          </Typography>
          <Typography variant="body2">VP giao dịch: Hồ Chí Minh</Typography>
          <Typography variant="body2">cskh@trustport.com.vn</Typography>
          <Typography variant="body2">Số điện thoại: XXXXXXXX</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Kết nối cùng TrustPort:</Typography>
            <Box>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: '40px', fontSize: '12px' }}>
        © 2024 TrustPort. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;