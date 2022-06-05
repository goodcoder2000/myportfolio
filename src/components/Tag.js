import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

export default function DisabledTabs() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Home" 
      onClick={() =>{
        navigate('/');
      }}
      />
      <Tab label="skills" 
      onClick={() =>{
        navigate('/Skills');
      }}
      />
      <Tab label="projects"
      onClick={() =>{
        navigate('/Projects');
      }}
      />
    </Tabs>
  );
}
