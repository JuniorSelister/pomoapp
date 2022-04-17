import { React, useState } from 'react'

import BtnStart from '../components/BtnStart'
import BtnPause from '../components/BtnPause'

import './Index.css'

// eslint-disable-next-line
export default (props) => {
  
  const [timerDefault, setTimer] = useState(30);

  return (
    
    <div className='container'>

      <div className='timer'>
        <h2>{timerDefault}</h2>
        <BtnStart />
        <BtnPause />
      </div>
      
    </div>

  );
};