import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from "@mui/material/Grid";

export const TF = () => {
  return (
    <div className='TFContainer'>
      <div className='innerForm'>
    <TextField style={{width: "100%"}} size="small" label="Email" id="outlined-size-normal" placeholder='Enter your Email...' />
        <TextField style={{width: "100%", marginTop:  "12px"}} size="small" label="Name" id="outlined-size-normal" placeholder='Enter your Name.' />
        <TextField
          style={{width: "100%", marginTop: "12px"}}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
        />
        <Button  
        style={{marginTop: "12px"}}
        variant="outlined">Send Mail</Button>
      </div>
          
      
    
    </div>
  )
}
