import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";


export const Skills = () =>{
    const[ htmlWidth, setHtml] = useState(0);
    const[ cssWidth, setCss] = useState(0);
    const[ jsWidth, setJs] = useState(0);
    const[ reactWidth, setReact] = useState(0);
    const[ rnativeWidth, setRWidth] = useState(0);
    const[ bootWidth, setBWidth] = useState(0);
    const[ muiWidth, setMui] = useState(0);
    const[ nodeWidth, setNodeWidth] = useState(0);
    const[ mongoWidth, setMonWidth] = useState(0);
    const[ firebaseWidth, setfbWidth] = useState(0);
    setTimeout(() =>{
        setHtml(90);
        setCss(88);
        setJs(80);
        setReact(66);
        setRWidth(50);
        setBWidth(79);
        setMui(60);
        setNodeWidth(60);
        setMonWidth(80);
        setfbWidth(50);
    }, 500)
    return(
        <div id="skills" className="skillContainer">
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="h5" align="center" style={{marginTop: "30px", marginBottom:    '20px'}}>
                        Technical Skills
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="h6" align="center">
                            Html5
                        </Typography>

                        <div className="fullSkill" >
                            <div className="skillforall" style={{width: `${htmlWidth}%` }}>90%</div>
                        </div>
                </Grid>
                        
                <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="h6" align="center">
                            Css3
                        </Typography>

                        <div className="fullSkill">
                            <div className="skillforall" style={{width: `${cssWidth}%` }}>88%</div>
                        </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h6" align="center">
                        Javascript
                    </Typography>

                    <div className="fullSkill">
                        <div className="skillforall" style={{width: `${jsWidth}%` }}>80%</div>
                    </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h6" align="center">
                            React
                        </Typography>

                        <div className="fullSkill">
                            <div className="skillforall" style={{width: `${reactWidth}%` }}>66%</div>
                        </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h6" align="center">
                        React Native
                    </Typography>

                    <div className="fullSkill">
                        <div className="skillforall" style={{width: `${rnativeWidth}%` }}>50%</div>
                    </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h6" align="center">
                        Bootstrap
                    </Typography>

                    <div className="fullSkill">
                        <div className="skillforall" style={{width: `${bootWidth}%` }}>79%</div>
                    </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h6" align="center">
                        Material Ui
                    </Typography>

                    <div className="fullSkill">
                        <div className="skillforall" style={{width: `${muiWidth}%` }}>60%</div>
                    </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h6" align="center">
                        Node js
                    </Typography>

                    <div className="fullSkill">
                        <div className="skillforall" style={{width: `${nodeWidth}%` }}>60%</div>
                    </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h6" align="center">
                        MongoDb
                    </Typography>

                    <div className="fullSkill">
                        <div className="skillforall" style={{width: `${mongoWidth}%` }}>80%</div>
                    </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="h6" align="center">
                        Firebase
                    </Typography>

                    <div className="fullSkill">
                        <div className="skillforall" style={{width: `${firebaseWidth}%` }}>50%</div>
                    </div>
                </Grid>

            </Grid>
            </div>
    )
}