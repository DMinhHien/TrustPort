import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

 interface CustomDialogProps {
    open: boolean;
    type: 'error' | 'success' | 'info';
    title: string;
    description: string;
    onClose: () => void;
  }

  const CustomDialog: React.FC<CustomDialogProps> = ({ open, type, title, description, onClose }) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography color={type === 'error' ? 'error' : 'textPrimary'}>
            {description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default CustomDialog;