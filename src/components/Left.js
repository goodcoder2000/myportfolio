import React, { useState } from "react";
import { Typography, Button, Grid } from "@mui/material";
import {TypedText} from './TypedText';
import { useNavigate,Link } from "react-router-dom";
import cvv from '../files/cvv.pdf';


export const Left = () =>{
    const navigate = useNavigate();
    const [ display, setDisplay] = useState(0);

    setTimeout(() =>{
        setDisplay(10)
    }, 1000)
    return(
        <div className="leftContainer">

            <Typography variant="h4">
                Hello!
            </Typography>

            
            <TypedText/>

            <Typography variant="h5">
                a <span className="webColor">web developer</span>
            </Typography>

            <Typography style={{opacity:    display}} className="details">
                Trying the best for tomorrow. Keep going, Keep learning and Keep applying...
            </Typography>


            <div>
            <Grid container spacing={2}>
                <Grid item lg={4} md={3} sm={6} xs={12}>
                <Link to={cvv} target="_blank" download style={{textDecoration:  'none'}}>
                <Button variant="contained" 
                    style={{backgroundColor: '#23e09b', color: '#fff', marginTop:   '25px'}}>download cv</Button>
                </Link>
                    
                </Grid>

              

                <Grid item lg={6} md={4} sm={6} xs={12}>
                    <Button variant="outlined" 
                    onClick={() =>navigate('/Portfolio')}
                    style={{color: '#23e09b', marginTop: '25px'}}>portfolio</Button>
                </Grid>
            </Grid>
            </div>
        
        </div>
    )
}