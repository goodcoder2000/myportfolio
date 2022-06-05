import React,{useState} from "react";
import mee from '../image/mee.png';


export const Right = () =>{
    const [display, setDisplay] = useState(0);

    setTimeout(() =>{
        setDisplay(10);
    },1000)

    return(
        <div style={{display: "flex"}}>
            <img style={{opacity: display}} src={mee} className='rightImg' alt='me'/>
        </div>
    )
}