import { Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

export const Footer = () =>{
    return(
        <div className="footerContainer">
            <Typography variant="h4" align="center" style={{marginBottom: "30px", color: "#fff"}}>
                L Zay Ya Ko Ko
            </Typography>

            <div className="footerLinkContainer">
                <div>
                        <Link to="/Portfolio">Portfolio</Link>
                        <Link to="/Skills" style={{marginLeft: "30px", marginRight: "30px"}}>Skills</Link>
                        <Link to="/Contact">Contact</Link>
                </div>
            </div>


            <div className="footerLinkContainer">
                <div>
                        <a target="_blank" href="https://www.facebook.com/lzayya">
                            <FacebookIcon/>
                        </a>

                        <a target="_blank" href="https://www.instagram.com/lzayya.koko/?igshid=YmMyMTA2M2Y=" style={{marginLeft: "30px", marginRight: "30px"}}>
                            <InstagramIcon/>                        
                        </a>

                        <Link to="/Contact">
                            <LinkedInIcon/>

                        </Link>

                </div>
            </div>
                
            

            <Typography variant="h6" align="center">
                &copy; lzayyakoko. All rights reserved
            </Typography>
        </div>
    )
}