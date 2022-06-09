import * as React from 'react';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
      <Button variant="contained" 
      style={{backgroundColor: '#23e09b', color: '#fff', marginRight: '30px'}}>
        <a href='#contact'>Contact Us</a>
      </Button>
  );
}
