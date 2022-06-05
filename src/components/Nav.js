import React from "react";
import Btn from './Btn';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { BtnGp } from "./BtnGp";
import Hidden from '@mui/material/Hidden';


export const Nav = () =>{
    return(
        <Grid container spacing={2} className="nav">
            <Grid item lg={3} md={4} sm={12} xs={12}>

                <h1 className="header">
                    web developer
                </h1>
            </Grid>

            <Grid item lg={6} md={5} sm={12} xs={12} textAlign="center">
                <BtnGp/>
            </Grid>

            <Hidden only={["sm","xs"]}>
            <Grid item lg={3} md={3}  textAlign="right">
                <Btn/>
            </Grid>
            </Hidden>
        </Grid>
        
    )
}