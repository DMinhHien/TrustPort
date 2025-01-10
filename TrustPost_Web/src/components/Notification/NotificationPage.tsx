import React, { useState } from 'react';
import { Box, Typography, Card, TextField, Grid, Button, Pagination } from '@mui/material';
import NotificationCard from './NotificationCard';
import { notifications } from '../../data/Notification';
import Footer from '../HomePage/Footer';
import Header from '../HomePage/Header';

const NotificationPage: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const handleFilter = () => {
    // Logic to filter notifications by date can be added here
    console.log(`Filtering from ${startDate} to ${endDate}`);
  };
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const paginatedNotifications = notifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <Box>
      {/* Header component would be inserted here */}
    
      <Header></Header>

      <Typography variant="h4" sx={{ margin: 2 }}>
        Thông báo
      </Typography>

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

      <Box>
        {paginatedNotifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </Box>
      <Pagination
        count={Math.ceil(notifications.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ margin: 2, display: 'flex', justifyContent: 'center' }}
      />

      {/* Footer component would be inserted here */}
      <Footer></Footer>
    </Box>
  );
};

export default NotificationPage;
