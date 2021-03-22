import React from 'react'
import Questions from './Questions'
import './docs.css'

const questionsAnswers = [
  {
    question: "What is OneLab ?",
    answer:
      "OneLab is a centered library of 500 + tools for your startup and business."
  },
  {
    question: "How does it work ? ",
    answer: "Basically if you want to search something on GOOGLE and find a ton of results of solutions , but here you will find certified tools for use.",
  },
  {
    question:"Is it Free ? ",
    answer: "Yes! It's free and no Login Needed!"
  },
  {
    question: "Future Update", 
    answer: "v2.0.0 coming in 3rd of April. You can contact us via mail : workwithonelab1@gmail.com." 
   } 
]


const Docs = ( )  => {
  return (
    <div className="docs">
     <div className="component">
        <Questions questionsAnswers={questionsAnswers} />  
      </div> 
    
    </div>
  )
}

export default Docs;
