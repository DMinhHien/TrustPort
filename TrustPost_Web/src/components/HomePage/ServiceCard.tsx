import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import service1 from "../../assets/service1.png"
import service2 from "../../assets/service2.png"
import service3 from "../../assets/service3.png"
import service4 from "../../assets/service4.png"
const cardsData = [
  {
    title: "EXPRESS",
    description: "Giao tận nơi 63 tỉnh thành dành cho mặt hàng nhỏ 20kg",
    image: service1,
  },
  {
    title: "TRUST",
    description: "Đảm bảo cập nhật thông tin đơn",
    image: service2,
  },
  {
    title: "SAFE",
    description: "Giao tận nơi 63 tỉnh thành cho mặt hàng 1 cách an toàn",
    image: service3,
  },
  {
    title: "MANAGE",
    description: "Quản lý đơn hàng",
    image: service1,
  },
];

// Custom styling for the cards
const CardContainer = styled(Card)(({ theme }) => ({
  position: "relative",
  color: "#fff",
  borderRadius: "8px",
  overflow: "hidden",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "&:hover": {
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
}));

const CardImage = styled("div")(({ image }: { image: string }) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  opacity: 0.7,
}));

const CardOverlay = styled("div")(() => ({
  zIndex: 1,
  position: "relative",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));

const AddButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#007BFF",
  color: "#fff",
  alignSelf: "flex-start",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));

const ServiceCardGrid = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Các dịch vụ của TrustPost
      </Typography>
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <CardContainer>
            <CardImage image={card.image} />
            <CardOverlay>
              <CardContent>
                <Typography variant="h5" component="div" fontWeight="bold">
                  {card.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {card.description}
                </Typography>
              </CardContent>
              <AddButton variant="contained">+</AddButton>
            </CardOverlay>
          </CardContainer>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default ServiceCardGrid;