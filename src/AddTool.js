import React, {useState} from 'react'
import './AddTool.css'
import {Button, makeStyles, Modal  } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import ParticlesBg from 'particles-bg' ;
import Footer from './Footer';
 

function getModalStyle (){
  
  
  return {
    
    margin:'10% 40%'
  
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center',
  },
  paper: {
    position: 'absolute',
    width:400,
    maxWidth: 'md',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding:theme.spacing(2,4,5)
  }
}))


function AddTool() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle)  
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState(''); 
  const [image, setImage] = useState(''); 
  const [open, setOpen] = useState(false); 
  const [tags, setTags] = useState('')
 
 

  const addTool = (e) => {
        e.preventDefault();
        
        db.collection('tools').add({
            name: name,
            description: description,
            image: image,
            link: link,
            tags:tags,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setDescription('');
        setImage('');
        setLink('');
        setName('');
        setTags('');         
        setOpen(true);
    }

    
 

    return (
      <>
        <div className="addTool">
        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={modalStyle} className={classes.paper}>
            <h3>Thank you for your tool 😍 </h3>
            <Button color="primary" variant="contained"  onClick={() => setOpen(false)}>Close</Button>
          </div>
        </Modal>
       
          <h1 className="addTool__h1" >Add Your Tool</h1>
          <form className="addTool__form">
          <input name="name"   placeholder="Name of Tool" type="text" value={name} onChange={(e) => setName(e.target.value)} />
         
           <br />
          <input name="description"   placeholder="About the Tool (less than 100 word)" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
         
          <br />
          <input name="websitelink"   placeholder="Website Link (ex: www.example.com) " type="text" value={link} onChange={(e) => setLink(e.target.value)}    />
          
          <br />
          <input name="logo"   placeholder="URL for logo of Tool" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
         
          <br />
          <input name="HashTag" placeholder="HashTags" type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
          <br />
         <Button color="secondary" onClick={addTool} variant="contained">Add My Tool 🚀 </Button>
          </form>
        
        <ParticlesBg type="lines" bg={true} /> 

           
        </div>
          <Footer /> 

         </>  
    )
}

export default AddTool;