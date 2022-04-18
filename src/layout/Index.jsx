import { React, useState } from 'react'

import BtnStart from '../components/BtnStart'
import BtnPause from '../components/BtnPause'

import './Index.css'

// eslint-disable-next-line
export default (props) => {
  
  const [timerDefault, setTimer] = useState(10);

  function onStart(e) {
    setInterval(() => {
      if (timerDefault > 0) {
        setTimer(e.target.value - 1)
      } else {
        alert("Time's up!");
      };
    }, 1000)
  }

  return (
    
    <div className='container'>

      <div className='timer'>
        <h2> { timerDefault }</h2>
        <BtnStart />
        <BtnPause />
      </div>
      
    </div>

  );
};