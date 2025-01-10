import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, Divider } from '@mui/material';
import OrderCard from './OrderCard';
import OrderDetail from './OrderDetail';
import orders from '../../data/Order';
import order1 from '../../data/OrderKhac'
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
const OrderDetailPage: React.FC = () => {
    return (
      <>
        {/* Thanh NavigationBar */}
        <Header></Header>
  
        {/* Container chính */}
        <Container maxWidth="lg" sx={{ marginTop: 3 }}>
          
          <Typography variant="h5" align="center" gutterBottom>
            Chi tiết Đơn Hàng
          </Typography>
  
          <Divider sx={{ marginY: 2 }} />
  
          {/* Danh sách OrderCard */}
          <OrderDetail key={order1.orderId}  order ={order1}></OrderDetail>
        </Container>
  
        {/* Footer */}
        <Footer></Footer>
      </>
    );
  };
  
  export default OrderDetailPage;