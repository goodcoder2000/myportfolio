import { Typography, Paper, Grid } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SchoolIcon from '@mui/icons-material/School';

export const Portfolio = () =>{
    return(
        <div id="portfolio" className="portfolio">
            <div className="portfolioContainer">
            <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <Paper elevation={3} style={{padding: "12px"}}>
                <div style={{display: "flex", alignItems: "center", flexDirection:  'column'}}>
                    <TipsAndUpdatesIcon color="error"/>
                    <Typography variant="h5">
                    Objective
                    </Typography>
                </div>

            <div className="forTap">
                <ArrowForwardIosIcon/>
                <Typography variant="p">
                    Easy to understand new library or framework.
                </Typography>
            </div>

            <div className="forTap">
                <ArrowForwardIosIcon/>
                <Typography variant="p">
                    Hight problem solving skills or computational thinking.
                </Typography>
            </div>

            <div className="forTap">
                <ArrowForwardIosIcon/>
                <Typography variant="p">
                    Can work with team.
                </Typography>
            </div>

            <div className="forTap">
                <ArrowForwardIosIcon/>
                <Typography variant="p">
                    I can take responsibility for what i do.
                </Typography>
            </div>
            </Paper>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Paper elevation={3} style={{padding: '12px'}}>
                        <div style={{display: "flex", alignItems: "center", flexDirection:  'column'}}>
                        <SchoolIcon color="success"/>
                        <Typography variant="h5">
                            Education
                        </Typography>
                        </div>

                        <Typography variant="p">
                            Computer Science and Software Engineering Undergraduate
                        </Typography>

                        <Typography>
                            University of Computer Studies(Banmaw),Kachin State, Myanmar
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}