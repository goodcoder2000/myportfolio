import React from "react";
import { Left } from "./Left";
import { Right } from "./Right";
import Grid from '@mui/material/Grid';
import { Chat } from "./Chat";
import Hidden from "@mui/material/Hidden";
import { Skills } from "../page/Skills";
import { Projects} from "../page/Projects";
import { Contact } from "../page/Contact";
import { Portfolio } from "../page/Portfolio";
import { Mail } from "./Mail";

export const Lower = () =>{
    return(
        <div className="lowerContainer">
            <div className="homeContainer">
                <Grid container spaceing={2}>
                    <Grid item lg={7} md={12}>
                        <Left/>
                    </Grid>
                    <Grid item lg={5} md={12}>
                        <Right/>
                    </Grid>
                </Grid>
            </div>

            <Contact/>
            <Portfolio/>
            <Skills/>
            <Projects/>

            <Mail/>
        
            <Hidden only={["lg","md"]}>
                <Chat/>
            </Hidden>
        </div>
    );
}
