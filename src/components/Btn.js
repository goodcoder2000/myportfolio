import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ColorButtons() {
  const navigate = useNavigate();
  return (
      <Button variant="contained" 
      onClick={() =>navigate('/Contact')}
      style={{backgroundColor: '#23e09b', color: '#fff', marginRight: '30px'}}>
        contact us
      </Button>
  );
}
