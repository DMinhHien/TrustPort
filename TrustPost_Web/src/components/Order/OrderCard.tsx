import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { Order } from '../../data/Order';  // Giả sử bạn đã định nghĩa interface Order ở file khác
import { useNavigate } from 'react-router-dom';
interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/orderdetail`);
      };
    
  return (
    <Card sx={{ width: '100%', margin: 2 }} onClick={handleCardClick}>
      <CardContent>
        {/* Mã đơn hàng */}
        <Typography variant="h6" color="text.secondary" align="left">
          Mã đơn hàng: {order.orderId}
        </Typography>

        {/* Trạng thái đơn hàng */}
        <Typography variant="body1" color="primary" align="left">
          Trạng thái: {order.status}
        </Typography>

        {/* Tên người nhận */}
        <Typography variant="body2" color="text.secondary" align="left">
          Người nhận: {order.recipientAddress}
        </Typography>

        {/* Khối lượng và dịch vụ */}
        
            <Typography variant="body2" color="text.secondary">
              Khối lượng: {order.weight}kg
            </Typography>
          
          
            <Typography variant="body2" color="text.secondary" align="left">
              Dịch vụ: {order.service}
            </Typography>
          

        {/* Thông tin ngày */}
        <Typography variant="body2" color="text.secondary" align="left" sx={{ marginTop: 1 }}>
          Ngày tạo: {new Date(order.createdDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          Ngày dự kiến giao: {new Date(order.estimatedDeliveryDate).toLocaleDateString()}
        </Typography>

        {/* Các nút hành động */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Button variant="outlined" size="small">Gọi CSKH</Button>
          <Button variant="outlined" size="small">Hành trình</Button>
          <Button variant="outlined" size="small">...</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
