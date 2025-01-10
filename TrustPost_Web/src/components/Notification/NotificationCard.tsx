import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonIcon from '@mui/icons-material/Person';
import { Notification } from '../../data/Notification';

interface NotificationCardProps {
    notification: Notification;
}
  
  const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
    const renderIcon = () => {
      switch (notification.type) {
        case 1:
          return <WarningIcon color="error" />;
        case 2:
          return <CardGiftcardIcon color="primary" />;
        case 3:
          return <PersonIcon color="action" />;
        default:
          return null;
      }
    };
  
    return (
      <Card variant="outlined" sx={{ margin: 2, padding: 2 }}>
        <Box display="flex" alignItems="center" gap={2}>
          {renderIcon()}
          <Box>
            <Typography variant="h6" component="div">
              {notification.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {notification.description}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
            {notification.time}
            </Typography>
          </Box>
        </Box>
      </Card>
    );
  };
  
  export default NotificationCard;