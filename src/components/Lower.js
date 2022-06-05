import React from "react";
import { Left } from "./Left";
import { Right } from "./Right";
import Grid from '@mui/material/Grid';
import { Chat } from "./Chat";
import Hidden from "@mui/material/Hidden";

export const Lower = () =>{
    return(
        <div className="lowerContainer">
            <Grid container spaceing={2}>
                <Grid item lg={7} md={12}>
                    <Left/>
                </Grid>
                <Grid item lg={5} mg={12}>
                    <Right/>
                </Grid>
            </Grid>
        
            <Hidden only={["lg","md"]}>
                <Chat/>
            </Hidden>
        </div>
    );
}
