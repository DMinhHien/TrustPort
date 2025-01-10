import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, Divider, Card, TextField, Button, Pagination } from '@mui/material';
import OrderCard from './OrderCard';
import orders from '../../data/Order';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';

const OrderList: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Bộ lọc theo ngày
  const filteredOrders = orders.filter(order => {
    const orderDate = new Date(order.createdDate);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    return (
      (!start || orderDate >= start) &&
      (!end || orderDate <= end)
    );
  });

  // Phân trang
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleFilter = () => {
    setCurrentPage(1); // Đặt lại trang về 1 sau khi lọc
  };

  return (
    <>
      {/* Thanh NavigationBar */}
      <Header />

      {/* Container chính */}
      <Container maxWidth="lg" sx={{ marginTop: 3 }}>
        {/* Tiêu đề */}
        <Typography variant="h5" align="center" gutterBottom>
          Danh Sách Đơn Hàng
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        {/* Bộ lọc ngày */}
        <Card variant="outlined" sx={{ margin: 2, padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
              <TextField
                label="Từ ngày"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Đến ngày"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" onClick={handleFilter}>
                Lọc
              </Button>
            </Grid>
          </Grid>
        </Card>

        {/* Danh sách OrderCard */}
        <Grid container spacing={2}>
          {paginatedOrders.map((order) => (
            <Grid item xs={12} key={order.orderId}>
              <OrderCard order={order} />
            </Grid>
          ))}
        </Grid>

        {/* Phân trang */}
        <Pagination
          count={Math.ceil(filteredOrders.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ margin: 2, display: 'flex', justifyContent: 'center' }}
        />
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default OrderList;
