import { OrderStatus } from "./OrderStatus";
import sampleOrderStatus from "./OrderStatus";
export interface Order {
    orderId: string;
    senderAddress: string;
    recipientAddress: string;
    weight: number;
    service: string;
    status: string;
    createdDate: string;
    receivedDate?: string;
    estimatedDeliveryDate: string;
    liststatus: OrderStatus[]
  }

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

export default orders;