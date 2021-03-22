import React from 'react';
import './Header.css';
import logo from './one-one-logo.png';
 
import { Link } from 'react-router-dom';

function Header (){
	return(
        <div className="header">
           <div className="header__logo">
               <img src={logo} alt="onelab__logo" />
            </div>
            
           
            <div className="header__links">
                  
                  
                  <h5> <Link to="/docs" className="header__linkDocs">Docs 📖</Link></h5>
                   <h5><Link to="/addtool" className="header__linkDocs" >Add Tool</Link> </h5>

            </div> 
             
               
                  
              
        </div>
	)
}

export default Header;