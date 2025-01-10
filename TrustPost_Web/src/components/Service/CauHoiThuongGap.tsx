import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import questionImage from '../../assets/question_icon.png'; // Thay thế bằng đường dẫn ảnh thực tế của bạn

// Styled component cho hình minh họa
const Illustration = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  marginTop: '24px',
  borderRadius: '8px',
  width: '300px', // Chỉnh kích thước hình ảnh
  marginLeft: 'auto',
});

const Cauhoi: React.FC = () => {
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
          CÁC CÂU HỎI THƯỜNG GẶP
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          (Dưới đây là những câu hỏi mà khách hàng thường xuyên hỏi. Nếu bạn không tìm thấy câu trả lời, vui lòng liên hệ với chúng tôi.)
        </Typography>

        {/* Nút Xem ngay */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: '16px' }}     
        >
          Xem ngay
        </Button>
      </Box>

      <Box
        sx={{
          maxWidth: '200px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px',
        }}
      >
        <Illustration
          src={questionImage}
          alt="Câu hỏi thường gặp"
        />
      </Box>
    </Box>
  );
};

export default Cauhoi;
