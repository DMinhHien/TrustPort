import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import about1 from "../../assets/about1.png"
import about2 from "../../assets/about2.png"
import about3 from "../../assets/about3.png"
const About = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Khách hàng nói về TrustPort
            </Typography>
            <Grid container spacing={4}>
                {/* Image Section */}
                <Grid item xs={12} md={6} lg={7}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                                <CardMedia
                                    component="img"
                                    alt="Delivery worker 1"
                                    image= {about1} // Replace with your image URL
                                    sx={{ borderRadius: 2 }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                                <CardMedia
                                    component="img"
                                    alt="Delivery worker 2"
                                    image={about2} // Replace with your image URL
                                    sx={{ borderRadius: 2 }}
                                />
                            </Card>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                                <CardMedia
                                    component="img"
                                    alt="Delivery worker 3"
                                    image={about3} // Replace with your image URL
                                    sx={{ borderRadius: 2 }}
                                />
                            </Card>
                        </Grid> */}
                    </Grid>
                </Grid>

                {/* Testimonial Section */}
                <Grid item xs={12} md={6} lg={5}>
                    <Box
                        sx={{
                            backgroundColor: '#f9f9f9',
                            borderRadius: 2,
                            boxShadow: 2,
                            p: 3,
                        }}
                    >
                        <FormatQuoteIcon color="primary" fontSize="large" />
                        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                            "Chị kinh doanh và hay mua bán online lắm. Từ ngày dịch đến lại càng phải dùng tới dịch vụ của TrustPort nhiều hơn. Cảm ơn các đồng chí TrustPort rất nhiều, chị thấy hài lòng về dịch vụ bên mình."
                        </Typography>
                        <Typography variant="subtitle1" align="right" sx={{ fontStyle: 'italic' }}>
                            - Khách hàng hồ Chí Minh
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 0.5 }}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <StarIcon key={index} color="warning" />
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;