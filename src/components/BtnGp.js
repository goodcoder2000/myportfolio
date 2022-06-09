import React from "react";
import { ButtonGroup,Button } from "@mui/material";


export const BtnGp = () =>{


    return(
        <ButtonGroup variant="text" aria-label="text button group">
            <Button style={{color: "#23e09b"}}>
                <a href="#home">Home</a>
            </Button>
            <Button style={{color: "#23e09b"}}>
                <a href="#skills">Skills</a>
            </Button>
            <Button style={{color: "#23e09b"}}>
                <a href="#projects">Projects</a>
            </Button>
        </ButtonGroup>
    )
}