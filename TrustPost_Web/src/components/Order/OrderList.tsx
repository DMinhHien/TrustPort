import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, Divider } from '@mui/material';
import OrderCard from './OrderCard';
import orders from '../../data/Order';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
const OrderList: React.FC = () => {
    return (
      <>
        {/* Thanh NavigationBar */}
        <Header></Header>
  
        {/* Container chính */}
        <Container maxWidth="lg" sx={{ marginTop: 3 }}>
          {/* Tiêu đề */}
          <Typography variant="h5" align="center" gutterBottom>
            Danh Sách Đơn Hàng
          </Typography>
  
          <Divider sx={{ marginY: 2 }} />
  
          {/* Danh sách OrderCard */}
          <Grid container spacing={2}>
            {orders.map((order) => (
              <Grid item xs={12} key={order.orderId}>
                <OrderCard order={order} />
              </Grid>
            ))}
          </Grid>
        </Container>
  
        {/* Footer */}
        <Footer></Footer>
      </>
    );
  };
  
  export default OrderList;