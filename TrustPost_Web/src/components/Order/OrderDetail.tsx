import React from 'react';
import { Card, CardContent, Grid, Typography, Divider, Box } from '@mui/material';
import { Order } from '../../data/Order';

interface OrderDetailProps {
    order: Order;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ order }) => {
    return (
        <Card sx={{ width: '100%', margin: 'auto', padding: 2, mt: 3, boxShadow: 3 }}>
            <Typography variant="h5" component="div" sx={{ mb: 2, fontWeight: 'bold' }}>
                Thông Tin Vận Đơn
            </Typography>
            <CardContent>
                {/* Sử dụng Grid với container và item cho 3 cột */}
                <Grid container spacing={2}>
                    {/* Cột 1 */}
                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ mr: 1 }}>Mã Phiếu Gửi:</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.orderId}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ mr: 1 }}>Chi tiết đơn hàng:</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'blue', textDecoration: 'underline' }}>Xem chi tiết</Typography>
                        </Box>
                        <Typography variant="subtitle1">Địa Chỉ Người Gửi:</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.senderAddress}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ mr: 1 }}>Khối Lượng:</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.weight} kg</Typography>
                        </Box>
                    </Grid>

                    {/* Cột 2 */}
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" >Địa Chỉ Người Nhận:</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.recipientAddress}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ mr: 1 }}>Dịch Vụ:</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.service}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ mr: 1 }}>Trạng Thái:</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.status}</Typography>
                        </Box>
                    </Grid>

                    {/* Cột 3 */}
                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ mr: 1 }}>Ngày Tạo:</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.createdDate}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ mr: 1 }}>Ngày Nhận Hàng:</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.receivedDate || 'Chưa nhận'}</Typography>
                        </Box>
                        <Typography variant="subtitle1">Ngày Giao Hàng Dự Kiến:</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{order.estimatedDeliveryDate}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default OrderDetail;
