import React from 'react'
// import lodoimg from 'Quiz-App/src/assets/lofi.jpg'
// import { cData } from '@/assets/data'
// import {TeamCard} from '@/assets'
import './App.css'
const App = () => {
  const cData = [
    {
          question: "How many days do we have in a week?",
          answer: "Seven",
          question_type: "General Knowledge For Kids"
        }
      ];
    

  return (
    <div>
      <div className="Main">
        <h1>QUIZ APP</h1>
        <div className="qs">
          <h2>Question : {cData[0].question} </h2>
          <div className='ans'>
          
            
          <h3>{ cData[0].answer}</h3>
          
          </div>  
          <p className='qtyp'>
            { cData[0].question_type }

          </p>
              
          {/* <img src="lodoimg" id="lofiimg" alt="lofiimages" /> */}
        </div>
        <button>Next</button>
      </div>
    </div>
  )
};

export default App