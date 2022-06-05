import React from "react";
import { ButtonGroup,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const BtnGp = () =>{

    const navigate = useNavigate();

    return(
        <ButtonGroup variant="text" aria-label="text button group">
            <Button style={{color: "#23e09b"}}
            onClick={() =>navigate('/')}
            >home</Button>
            <Button style={{color: "#23e09b"}}
            onClick={ () => navigate('/Skills')}
            >skills</Button>
            <Button style={{color: "#23e09b"}}
            onClick ={() =>navigate('/Projects')}
            >projects</Button>
        </ButtonGroup>
    )
}