
import { AppBar, Toolbar, Typography, Box, InputBase, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Biểu tượng thông báo
import PeopleIcon from '@mui/icons-material/People'; // Biểu tượng người dùng
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#007bff', padding: '8px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo hoặc các menu chính */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Typography variant="h6" sx={{ fontSize: '16px', cursor: 'pointer' }}
           onClick={() => navigate('/')}>
            Trang chủ
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '16px', cursor: 'pointer' }}>
            Dịch vụ
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '16px', cursor: 'pointer' }}>
            Tin tức
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '16px', cursor: 'pointer' }}>
            Hỗ trợ khách hàng
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '16px', cursor: 'pointer' }}>
            Tuyển dụng
          </Typography>
        </Box>

        {/* Thanh tìm kiếm và các nút */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Thanh tìm kiếm */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '0 10px',
              height: '36px',
            }}
          >
            <SearchIcon sx={{ color: '#aaa' }} />
            <InputBase
              placeholder="Tìm kiếm"
              sx={{ ml: 1, flex: 1, fontSize: '14px', color: '#000' }}
            />
          </Box>

         {/* Biểu tượng thông báo */}
         <IconButton sx={{ color: 'white' }} onClick={() => navigate('/notification')}>
            <NotificationsIcon />
          </IconButton>

          {/* Biểu tượng người dùng */}
          <IconButton sx={{ color: 'white' }} onClick={() => navigate('/profile')}>
            <PeopleIcon />
          </IconButton>
          

          {/* Icon ngôn ngữ */}
          <IconButton>
            <LanguageIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;