import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/system";
import delivery from "../../assets/delivery.png"
const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "auto",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const Illustration = styled("img")({
  width: "150px",
  marginTop: "20px",
});

const TabContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginBottom: "16px",
  backgroundColor: "#ffffff",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
});

const Service = () => {
  const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  return (
    <Container>
      <TabContainer>
        <Tabs value={value} indicatorColor="primary" textColor="primary">
          <Tab label="Tra cứu vận đơn" />
          <Tab label="Ước tính cước phí" />
          <Tab label="Tìm kiếm bưu cục" />
          <Tab label="Câu hỏi FAQ" />
          <Tab label="Đăng ký đại lý" />
        </Tabs>
      </TabContainer>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Mã phiếu gửi
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        (Tra nhiều bill bằng cách thêm dấu phẩy giữa các bill)
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="VD : 12354,45677"
        sx={{ marginBottom: "16px" }}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Tôi không phải là người máy"
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: "16px" }}
      >
        TRA CỨU
      </Button>
      <Illustration
        src={delivery} // Thay thế bằng đường dẫn ảnh của bạn
        alt="Illustration"
      />
    </Container>
  );
};

export default Service;
