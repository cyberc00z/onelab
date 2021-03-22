import React from 'react'
import './Home.css';
import Tools from './Tools';
import Typed from "react-typed"; 
import { Button } from '@material-ui/core';
import Footer from './Footer';

function Home() {
    
    return (
        <div className="home">
          
            <div className="main">
                <div className="main__text">
                <h1>Own Your Business With One Lab</h1>
                <br />
                <p>A centered Library of Tools for Your Business and Startups</p>
                </div>
                <Button variant="contained" color="primary" >ONELAB</Button>
                </div>
                <div className="homeScreen__text" >
               
                <Typed   strings={['WELCOME TO ONE LAB 🧪 ', 'CENTERED LIBRARY Of  500+ TOOLS 🧰 ','EVERYTHING YOU NEED !','TO START YOUR BUSINESS 🧑🏼‍💼','GET STARTED NOW  🚀']}  typeSpeed={40} backSpeed={50}  loop />
                </div>
                 
                <Tools />
           <Footer />
        </div>
    )
}

export default Home;
