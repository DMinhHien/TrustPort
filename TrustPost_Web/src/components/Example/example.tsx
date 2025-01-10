import React from 'react';
import { Box } from '@mui/material';
import OrderDetail from '../Order/OrderDetail';
import { Order } from '../../data/Order';

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
    },
    {
      orderId: 'ORD789012',
      senderAddress: '789 Đường C, Quận D, Đà Nẵng',
      recipientAddress: '101 Đường Z, Quận K, TP.HCM',
      weight: 1.2,
      service: 'Chuyển phát thường',
      status: 'Chờ lấy hàng',
      createdDate: '2025-01-07',
      estimatedDeliveryDate: '2025-01-15',
    },
    {
      orderId: 'ORD345678',
      senderAddress: '654 Đường E, Quận F, TP.HCM',
      recipientAddress: '321 Đường G, Quận H, Huế',
      weight: 3.1,
      service: 'Giao hàng tiết kiệm',
      status: 'Đã nhận hàng',
      createdDate: '2025-01-03',
      receivedDate: '2025-01-04',
      estimatedDeliveryDate: '2025-01-08',
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