import React from 'react';
import { Box } from '@mui/material';
import OrderDetail from '../Order/OrderDetail';
import { Order } from '../../data/Order';
import OrderStatusCard from '../Order/OrderStatus';
import { OrderStatus } from '../../data/OrderStatus';
import sampleOrderStatus from '../../data/OrderStatus';
const orders: Order[] = [
    {
      orderId: 'ORD123456',
      senderAddress: '123 Đường A, Quận B, TP.HCM',
      recipientAddress: '456 Đường X, Quận Y, Hà Nội',
      weight: 2.5,
      service: 'Chuyển phát nhanh',
      status: 'Đang giao',
      createdDate: '2025-01-05',
      receivedDate: '2025-01-06',
      estimatedDeliveryDate: '2025-01-10',
      liststatus: sampleOrderStatus
    },
  ];

  const Example: React.FC = () => {
    return (
      <Box sx={{ padding: 3 }}>
        {orders.map((order) => (
          <OrderDetail key={order.orderId} order={order} />
        ))}     
      </Box>
    );
  };
  
  export default Example;