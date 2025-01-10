import React, { useState } from "react";
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
import delivery from "../../assets/delivery.png";

// Components cho từng tab
import Tracuu from '../Service/TraCuu';  // Giao diện tra cứu vận đơn

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  width: "100%", // Adjusted to take full width of screen
  maxWidth: "100%", // Make sure it doesn't have a maximum width limit
  margin: "auto", // Keep auto margins to center content horizontally
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Hàm render nội dung tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <Tracuu />;
      case 1:
        return <Tracuu />;
      case 2:
        return <Tracuu />;
      case 3:
        return <Tracuu />;
      case 4:
        return <Tracuu />;
      default:
        return <Tracuu />;
    }
  };

  return (
    <Container>
      <TabContainer>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange} 
          indicatorColor="primary" 
          textColor="primary"
          variant="scrollable"
        >
          <Tab label="Tra cứu vận đơn" />
          <Tab label="Ước tính cước phí" />
          <Tab label="Tìm kiếm bưu cục" />
          <Tab label="Câu hỏi FAQ" />
          <Tab label="Đăng ký đại lý" />
        </Tabs>
      </TabContainer>

      {/* Hiển thị nội dung tab được chọn */}
      {renderTabContent()}
    </Container>
  );
};

export default Service;
