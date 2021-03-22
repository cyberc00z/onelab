import React from 'react'
import './Questionitems.css'

const  Questionitems = ({ showDescription, ariaExpanded, fontWeightBold, item , index, onClick  }) => (

        <div className="questionItems" key={item.question}>
          <dt>
           <button
           aria-expanded={ariaExpanded}
           aria-controls={`ques${index+1}_desc`}
           data-qa="questionItems-button"
           className={`Questionitems-button ${fontWeightBold}`}
           onClick={onClick}
            >
           {item.question}
       </button>
          </dt>  
          <dd>
              <p id={`ques${index+1}_desc`}
               data-qa="ques__desc"
               className={`ques__desc ${showDescription}`}
              >
     {item.answer}
              </p>
          </dd>
        </div>

)


export default Questionitems;
