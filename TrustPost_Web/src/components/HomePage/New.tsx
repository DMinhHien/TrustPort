import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
import new4 from "../../assets/new4.png";
const New = () => {
  const newsItems = [
    {
      title: 'GIAO TRỌN TRÁI TIM – CÙNG HÀNG VIỆT TIẾN BƯỚC TOÀN CẦU',
      date: '10 Tháng mười, 2024',
      description:
        'Với tầm nhìn hướng đến tương lai chuyển đổi số và mục tiêu khẳng định...',
      image: new1,
    },
    {
      title: 'DỊCH VỤ HOÀN CƯỚC – HOÀN 100% VỚI MỌI NGUYÊN NHÂN',
      date: '31 Tháng mười, 2024',
      description:
        'Đối với các doanh nghiệp và chủ cửa hàng, việc kinh doanh tồn tại các rủi ro...',
      image: new2,
    },
    {
      title: 'LINH HOẠT DÒNG TIỀN – TÀI CHÍNH CHỦ ĐỘNG',
      date: '20 Tháng năm, 2024',
      description:
        'Đối với doanh nghiệp, chủ shop, việc linh hoạt luồng tiền trong kinh doanh giúp rút...',
      image: new3,
    },
    {
      title:
        'TĂNG CƯỜNG KẾT NỐI, PHÁT TRIỂN LOGISTICS XUYÊN BIÊN GIỚI GIỮA VIỆT NAM – TRUNG QUỐC',
      date: '6 Tháng ba, 2024',
      description:
        'Ngày 05/03/2024, tại Trung Quốc, đoàn công tác do TGĐ Hoàng Trung Thành chủ trì...',
      image: new4,
    },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Tin tức TrustPort
      </Typography>

      <Grid container spacing={2}>
        {/* Main News */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={newsItems[0].image}
              alt="Main news image"
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                {newsItems[0].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {newsItems[0].date}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: '10px', color: 'text.primary' }}
              >
                {newsItems[0].description}
              </Typography>
              
            </CardContent>
            <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Card>
        </Grid>

        {/* Side News */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {newsItems.slice(1).map((news, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100px', height: '100px', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={news.image}
                      alt={news.title}
                      sx={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 'bold', marginBottom: '5px' }}
                    >
                      {news.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: '5px' }}
                    >
                      {news.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.description}
                    </Typography>
                  </CardContent>
                  <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
        <Button variant="contained" color="primary">
          Xem tất cả
        </Button>
      </Box>
    </Box>
  );
};

export default New;