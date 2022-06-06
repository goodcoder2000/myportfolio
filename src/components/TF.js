import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const TF = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
          <TextField label="Email" id="outlined-size-normal" placeholder='Enter your Email...' />
      </div>
        
        <div>
        <TextField label="Name" id="outlined-size-normal" placeholder='Enter your Name.' />
      </div>
    </Box>
  )
}
