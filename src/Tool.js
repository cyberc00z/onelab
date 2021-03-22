import React from 'react'
import './Tool.css';
import {ExternalLink} from 'react-external-link'

function Tool( {image, name,tags, description, link, key } ) {
   
    
    return (
        <div className="tool" id={key}>
            <div className="tool__image">
                
               <img src={image}  alt="logo__tool" />
            </div>
            
            <div className="tool__text">
                <h2 className="tool__textName">{name}</h2>
                <p className="tool__textDescription">{description?.substring(0,200) }</p>              
                <div className="tool__textHashtag">
                <p>#{tags}</p>
                </div>
            </div>
            <div className="tool__link">
             <ExternalLink href={link}>View Website</ExternalLink>
            </div>
           
        </div>
    )
}

export default Tool;  