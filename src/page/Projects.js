import React,{ useState} from "react";
import Card from '../components/Card';
import nano from '../image/nano.png';
import qgame from '../image/qgame.png';
import crud from '../image/crud.png';
import story100 from '../image/story100.jpg';
import shoesshop from '../image/shoesshop.png';
import aplusfood from '../image/aplusfood.jpg';
import aplusapi from '../image/aplusapi.png';
import shoeshopapi from '../image/shoeshopapi.png';
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


export const Projects = () =>{

    const [alignment, setAlignment] = useState('web');

        const handleChange = (event, newAlignment) => {
            setAlignment(newAlignment);
        };
    return(
       
            <div id="projects" className="projects">
                <Typography variant="h4" align="center" style={{marginTop:  '15px'}}>
                    My Experience Projects
                </Typography>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30}}>
                    <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="web">Web</ToggleButton>
                            <ToggleButton value="android">Mobile</ToggleButton>
                            <ToggleButton value="api">api</ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <div className="projectContainer">
                    

                    {
                        alignment === "web"?
                        <>
                            <Typography variant="h5" align="center" style={{marginTop:  '15px'}}>
                            My React Web Projects
                            </Typography>
                            <div className="projectContainer">
                            
                            <Card image={nano} link="https://thriving-trifle-9626dd.netlify.app"
                            cardText="Open in Browser"
                            header="Laptop Showroom"
                            details="This project is using with React.js for the Front-end and Firebase for the back-end and for my first client project"
                            />

                            <Card image={shoesshop} link="https://shoeshopping9.netlify.app/"
                            cardText="Open in Browser"
                            header="Shoes shopping"
                            details="This project is using with React js for the front end and Node js and mongodb for the back end."
                            />
                            
                            <Card image={crud} link="https://quirky-darwin-e79005.netlify.app/"
                            cardText="Open in Browser"
                            header="Blogs Site(CRUD)"
                            details="This project is using with React js and Firebase."
                            />
                        
                            <Card image={qgame} link="https://vermillion-dasik-28ab06.netlify.app"
                            cardText="Open in Browser"
                            header="Mini Pizzle Game"
                            details="This project is using with Html, Css and Vanilla JavaScript."
                            /> 
                
                            </div>
                        </>:

                        alignment === "android"?
                        <>
                        <Typography variant="h5" align="center" style={{marginTop:  '15px'}}>
                        My Mobile Development Projects (React Native)
                        </Typography>
                        <div className="projectContainer">
                        
                        <Card image={aplusfood} link="https://github.com/goodcoder2000/a-plus-apk"
                        cardText="Git Hub repo"
                        header="APlus Food"
                        details="This project is using with React Native for the front end and Node js and mongodb for the back end. This project is use in real world at Myitkyina City."
                        />
                        
                        <Card image={story100} link="https://github.com/lzayyakoko/story100"
                        cardText="Git Hub repo"
                        header="Story 100"
                        details="This app can read story and Upload new story from the Admin site."
                        />
            
                        </div>
                    </>:

                        <>
                        <Typography variant="h5" align="center" style={{marginTop:  '15px'}}>
                        My Api Development Projects (MongoDb & Express js)
                        </Typography>
                        <div className="projectContainer">

                        <Card image={aplusapi} link="https://api-aplus.onrender.com/api/users"
                        cardText="Open in Browser"
                        header="Aplus Food Api can (CRUD) with JWT TOKEN"
                        details="This project is using with React.js for the Front-end and Firebase for the back-end and for my first client project"
                        />

                        <Card image={shoeshopapi} link="https://api-shoes-testing.onrender.com/users"
                        cardText="Open in Browser"
                        header="Shoes Shopping Api can (CRUD)"
                        details="This project is using with React js and Firebase."
                        />
                        </div>
                        </>
                    }
    
                </div>
            </div>
                   

    )
}