import React, { useState } from 'react'
import './Questions.css'
import Questionitems from './Questionitems'

const Questions = ({ questionsAnswers }) =>  {
    const [activeIndex, setActiveIndex] = useState([]);

    const renderQuestionAnswers = questionsAnswers.map((item, index) => {
       const showDescription = index === activeIndex ? "show-description" : " ";
       const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
       const ariaExpanded = index === activeIndex ? "true"  : " false" ;
       return (
           <Questionitems
           showDescription={showDescription}
           fontWeightBold={fontWeightBold}
           ariaExpanded={ariaExpanded}
           item={item}
           index={index}
           onClick={() => {
               setActiveIndex(index);
           }}

           />
       )

    })
    return (
        <div className="question">
            <h1 className="question__title">FAQ</h1>
            <dl className="question__list">{renderQuestionAnswers}</dl>
        </div>
    )
}

export default Questions;
