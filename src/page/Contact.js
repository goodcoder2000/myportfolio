import React from "react";
import { Typography } from "@mui/material";
import {PaperContainer} from '../components/PaperContainer';

export const Contact= () =>{
    return(
        <div style={{marginTop: "30px"}}>
            <Typography variant="h5" align="center">
                Contact Me
            </Typography>
            <PaperContainer/>

        </div>
    )
}