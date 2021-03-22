import React  from "react";
import './App.css'
import Header from './Header';
import Tools from './Tools';
 
import { VFXProvider } from 'react-vfx';
import { BrowserRouter as Router , Switch, Route  } from 'react-router-dom'
import AddTool from "./AddTool";
import Home from './Home'
 
import Docs from "./Docs";


function  App(){
  
     
  return (
    <VFXProvider>
      
      <div className="app">
    
      <Router>
      <Header />
      <div className="app__body">
        <Switch>
          <Route path="/docs">
            <Docs />
          </Route>
          
          <Route path="/addtool">
            <AddTool />
          </Route>
          <Route path="/tools">
            <Tools />  
          </Route>
          
          <Route path="/">
             <Home /> 
          </Route>
           
        </Switch>
    
        
    </div>
    
      </Router>
     
    </div>
    </VFXProvider>
  
  
  )
}

export default App;
