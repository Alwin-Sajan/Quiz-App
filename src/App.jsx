import React from 'react'
// import lodoimg from 'Quiz-App/src/assets/lofi.jpg'
import { cData } from './/assets/data'
// import {TeamCard} from '@/assets'
import './App.css'
const App = () => {
  // const cData = [
  //   {
  //         question: "How many days do we have in a week?",
  //         answer: "Seven",
  //         question_type: "General Knowledge For Kids"
  //       }
  //     ];
  
  
  let cdv = 0; 
  let datq = cData[cdv];
  // button.addEventListener("click", myFunction);
  const shoot = () => {
     cdv++;
    alert(cdv);
    let datq = cData[cdv];

    render(<App/>);
  }
  // const root = ReactDOM.createRoot(document.getElementById('main'));
  // root.render(<App />);

  return (
    <div>
      <div className="Main">
        <h1>QUIZ APP</h1>
        <div className="qs">

          <h2>
            Question : {datq.question} 
          </h2>

          <div className='ans'>


            <h3>
              {datq.answer}
            </h3>

          </div>
          <p className='qtyp'>
            {datq.question_type}

          </p>

          {/* <img src="lodoimg" id="lofiimg" alt="lofiimages" /> */}
        </div>
        <button onClick={shoot}>Take the Shot!</button>
        
      </div>
    </div>
  )
};

export default App