import React from "react";
import { Lower } from "./components/Lower";
import { Nav } from "./components/Nav";
import { Skills } from "./page/Skills";
import './Gstyle/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./page/Projects";
import { Contact } from "./page/Contact";
import { Portfolio } from "./page/Portfolio";
import { Footer } from "./components/Footer";


const App = () =>{
  return(
      <BrowserRouter>
              <Nav/>
          <div id="home" className="container">
                <Routes>
                  <Route path="/" element={<Lower/>}/>
                </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
  )
}
export default App;