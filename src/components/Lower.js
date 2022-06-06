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
import { Footer } from "./Footer";

export const Lower = () =>{
    return(
        <div>
            <div className="lowerContainer">
            <Grid container spaceing={2}>
                <Grid item lg={7} md={12}>
                    <Left/>
                </Grid>
                <Grid item lg={5} mg={12}>
                    <Right/>
                </Grid>
            </Grid>

            <Contact/>
            <Portfolio/>
            <Skills/>
            <Projects/>
        
            <Hidden only={["lg","md"]}>
                <Chat/>
            </Hidden>
        </div>
        <Footer/>
        </div>
    );
}
