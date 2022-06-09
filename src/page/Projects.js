import React from "react";
import Card from '../components/Card';
import nano from '../image/nano.png';
import qgame from '../image/qgame.png';
import crud from '../image/crud.png';
import { Typography } from "@mui/material";

export const Projects = () =>{
    return(
       
            <div id="projects" className="projects">
                <Typography variant="h5" align="center" style={{marginTop:  '15px'}}>
                    My Favorite Projects
                </Typography>
                <div className="projectContainer">
                
                <Card image={nano} link="https://thriving-trifle-9626dd.netlify.app"
                header="Laptop Showroom"
                details="This project is using with React.js for the Front-end and Firebase for the back-end and for my first client project"
                />
                
                <Card image={crud} link="https://quirky-darwin-e79005.netlify.app/"
                header="Blogs Site(CRUD)"
                details="This project is using with React js and Firebase."
                />
            
                <Card image={qgame} link="https://vermillion-dasik-28ab06.netlify.app"
                header="Mini Pizzle Game"
                details="This project is using with Html, Css and Vanilla JavaScript."
                />
    
    
    
                </div>
            </div>
                   

    )
}