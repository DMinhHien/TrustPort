import React, { useState } from 'react';
import { Box, Drawer, Tabs, Tab, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LockResetIcon from '@mui/icons-material/LockReset';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Icon đăng xuất
import UserInformation from '../components/Profile/UserInformation';
import { useNavigate } from 'react-router-dom'; // Dùng để điều hướng

const ProfilePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('personalInfo');
  const navigate = useNavigate(); // Hook điều hướng

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const handleLogout = () => {
    // Thực hiện đăng xuất, ví dụ xóa token hoặc clear session
    // localStorage.removeItem('userToken'); // Ví dụ xóa token
    // Hoặc có thể thực hiện các hành động khác như gọi API đăng xuất

    // Điều hướng về trang đăng nhập
    navigate('/signin');
  };

  return (
    <Box display="flex" minHeight="100vh">
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <TabContext value={selectedTab}>
          <Tabs
            orientation="vertical"
            value={selectedTab}
            onChange={handleTabChange}
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab icon={<PersonIcon />} iconPosition="start" label="Thông tin cá nhân" value="personalInfo" />
            <Tab icon={<SettingsIcon />} iconPosition="start" label="Cài đặt tài khoản" value="settings" />
            <Tab icon={<LockResetIcon />} iconPosition="start" label="Quên mật khẩu" value="resetPassword" />
            <Tab 
              icon={<ExitToAppIcon />} 
              iconPosition="start" 
              label="Đăng xuất" 
              value="logout" 
              onClick={handleLogout} // Khi ấn vào tab này sẽ gọi hàm đăng xuất
            />
          </Tabs>
        </TabContext>
      </Drawer>

      {/* Nội dung chính */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TabContext value={selectedTab}>
          <TabPanel value="personalInfo">
            <Typography variant="h5">Chỉnh sửa thông tin cá nhân</Typography>
            <UserInformation />
          </TabPanel>
          <TabPanel value="settings">
            <Typography variant="h5">Cài đặt tài khoản</Typography>
          </TabPanel>
          <TabPanel value="resetPassword">
            <Typography variant="h5">Quên mật khẩu</Typography>
          </TabPanel>
          {/* Không cần TabPanel cho đăng xuất vì nó chỉ có chức năng điều hướng */}
        </TabContext>
      </Box>
    </Box>
  );
};

export default ProfilePage;
