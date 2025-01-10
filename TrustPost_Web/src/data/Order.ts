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
  }