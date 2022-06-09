import React from "react";
import { Typography } from "@mui/material";
import {PaperContainer} from '../components/PaperContainer';

export const Contact= () =>{
    return(
        <div id="contact" className="contact" >
            <Typography variant="h5" align="center">
                Contact Me
            </Typography>
            <PaperContainer/>

        </div>
    )
}