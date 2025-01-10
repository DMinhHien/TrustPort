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
  const sampleOrderStatus2: OrderStatus[] = [
    {
    id: 1,
    statusType: 'Giao Hàng',
    recipient: 'Nguyễn Văn A',
    deliveryPerson: 'Trần Thị B',
    timestamp: '2025-01-10 15:00',
    recipientAddress: '123 Đường ABC',
    postOfficeAddress: 'Bưu cục Hà Nội',
    itemReceiver: 'Nguyễn Văn C'
    },
];

  const orders: Order[] = [
    {
      orderId: 'ORD123456',
      senderAddress: '123 Đường A, Quận B, TP.HCM',
      recipientAddress: '456 Đường X, Quận Y, Hà Nội',
      weight: 2.5,
      service: 'Chuyển phát nhanh',
      status: 'Giao Thành Công',
      createdDate: '2025-01-05',
      receivedDate: '2025-01-06',
      estimatedDeliveryDate: '2025-01-10',
      liststatus: sampleOrderStatus
    },
    {
        orderId: 'ORD1234567',
        senderAddress: '234 Đường A, Quận B, TP.HCM',
        recipientAddress: '456 Đường X, Quận Y, Hà Nội',
        weight: 10,
        service: 'Chuyển phát nhanh',
        status: 'Đang giao',
        createdDate: '2025-01-05',
        receivedDate: '2025-01-06',
        estimatedDeliveryDate: '2025-01-10',
        liststatus: sampleOrderStatus2
      },
];

export default orders;

