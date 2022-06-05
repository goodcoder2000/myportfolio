import * as React from 'react';
import Paper from '@mui/material/Paper';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';

export const PaperContainer = ()=> {
  return (

     <div className='paperContainer'>
          <Paper elevation={3} style={{width:   '250px', marginBottom:  '30px', backgroundColor: "#23e09b"}}>
          <div className='contactSmall'>
                <MailOutlineIcon color='primary'/>
                <p>Email</p>
                <p>lzayyakoko2000@gmail.com</p>
          </div>
      </Paper>

      <Paper elevation={3} style={{width:   '250px', marginBottom:  '30px',backgroundColor: "#23e09b"}}>
            <div className='contactSmall'>
                <LocalPhoneIcon color='secondary'/>
                <p>Phone Call</p>
                <p>09 7533 24112</p>
          </div>
      </Paper>
      <Paper elevation={3} style={{width:   '250px', marginBottom:  '30px',backgroundColor: "#23e09b"}}>
        <div className='contactSmall'>
                <FacebookIcon color='primary'/>
                <a target="_blank" href='https://www.facebook.com/lzayya'>
                      To Profile</a>
          </div>
      </Paper>
     </div>
  );
}
