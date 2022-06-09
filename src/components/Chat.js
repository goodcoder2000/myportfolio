import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const actions = [
  { icon: <a href='#contact'>
    <ContactPhoneIcon />
  </a>, name: 'Contact' },
  { icon: <a target="_blank" href='https://m.me/lzayya'>
    <FacebookIcon/>
  </a>, name: 'Messenger' }
];

export const Chat = () => {
  return (
      <div className='chat'>
        <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<PermPhoneMsgIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
          
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
      </div>
  
  );
}
