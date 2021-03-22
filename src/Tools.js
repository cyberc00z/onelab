import React, {useEffect, useState} from 'react';
import './Tools.css';
import Tool from './Tool';
import db from './firebase';
 

function Tools (){
    const [tools, setTools] = useState([]);

    useEffect(() => {
        db.collection('tools').orderBy('timestamp',"desc").onSnapshot((snapshot) => (
            setTools(snapshot.docs.map((doc) => ({id:doc.id, data:doc.data()}))
           
            )))
     
    },[])
  

    return (
           <div className="tools">
          
          {tools.map((tool) => (
               <Tool
               key={tool.data.id}
               image={tool.data.image}
               
               tags= {tool.data.tags}
               link={tool.data.link}
               description={tool.data.description}
               name={tool.data.name}
                />
           ))}  
       
          
        </div>
          
    )
}


export default Tools