export interface OrderStatus {
    id: number;
    statusType: 'Tạo Đơn' | 'Đã Nhận' | 'Vận Chuyển' | 'Giao Hàng' | 'Giao Thành Công';
    
    
    recipient: string;
    recipientAddress: string;
    
    deliveryPerson: string; 
    
    itemReceiver: string;
   
    timestamp: string; // Time of the status update
    
    postOfficeAddress: string;
}

const sampleOrderStatus: OrderStatus[] = [
    {
    id: 1,
    statusType: 'Giao Thành Công',
    recipient: 'Nguyễn Văn A',
    deliveryPerson: 'Trần Thị B',
    timestamp: '2025-01-10 15:00',
    recipientAddress: '123 Đường ABC',
    postOfficeAddress: 'Bưu cục Hà Nội',
    itemReceiver: 'Nguyễn Văn C'
    },
    {
        id: 2,
        statusType: 'Giao Hàng',
        recipient: 'Nguyễn Văn A',
        deliveryPerson: 'Trần Thị B',
        timestamp: '2025-01-10 15:00',
        recipientAddress: '123 Đường ABC',
        postOfficeAddress: 'Bưu cục Hà Nội',
        itemReceiver: 'Nguyễn Văn C'
    },
];
  export default sampleOrderStatus;