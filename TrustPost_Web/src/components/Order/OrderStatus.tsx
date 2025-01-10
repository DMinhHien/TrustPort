import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { OrderStatus } from '../../data/OrderStatus';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface OrderStatusProps {
    status: OrderStatus;
}

const OrderStatusCard: React.FC<OrderStatusProps> = ({ status }) => {
    const getStatusColor = () => {
        switch (status.statusType) {
            case 'Giao Thành Công':
                return 'green';
            case 'Tạo Đơn':
                return 'red';
            default:
                return 'blue';
        }
    };

    const renderContent = () => {
        switch (status.statusType) {
            case 'Giao Thành Công':
                return (
                    <>
                        <Typography variant="body2" color="textSecondary">
                            Tên người nhận: {status.recipient}
                        </Typography>
                    </>
                );
            case 'Giao Hàng':
                return (
                    <>
                        <Typography variant="body2" color="textSecondary">
                            Người giao: {status.deliveryPerson}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Địa chỉ bưu cục: {status.postOfficeAddress}
                        </Typography>
                    </>
                );
            case 'Vận Chuyển':
                return (
                    <>
                        <Typography variant="body2" color="textSecondary">
                            Địa chỉ bưu cục: {status.postOfficeAddress}
                        </Typography>
                    </>
                );
            case 'Đã Nhận':
                return (
                    <>
                        <Typography variant="body2" color="textSecondary">
                            Địa chỉ bưu cục: {status.postOfficeAddress}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Nhân viên nhận hàng: {status.itemReceiver}
                        </Typography>
                    </>
                );
            case 'Tạo Đơn':
                return (
                    <>
                        <Typography variant="body2" color="textSecondary">
                            Địa chỉ người gửi: {status.recipientAddress}
                        </Typography>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Card sx={{ marginBottom: 2, position: 'relative', paddingLeft:'40px'  }}>
            {/* Hiển thị biểu tượng ở lề trái */}
            <Box
                sx={{
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    zIndex: 1, // Đảm bảo không bị ẩn dưới các phần tử khác
                }}
            >
                {status.id === 1 ? (
                    <ArrowForwardIcon sx={{ color: 'red', fontSize: '24px' }} />
                ) : (
                    <CheckCircleIcon sx={{ color: 'green', fontSize: '24px' }} />
                )}
            </Box>
            <CardContent>
                <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                    Thời gian: {status.timestamp}
                </Typography>
                <Typography variant="h6" sx={{ color: getStatusColor() }} gutterBottom>
                    {status.statusType}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    Mô tả: {status.statusType === 'Tạo Đơn' ? 'Đơn hàng đã được tạo.' : 'Đơn hàng đang trong quá trình xử lý.'}
                </Typography>
                {renderContent()}
            </CardContent>
        </Card>
    );
};

export default OrderStatusCard;
