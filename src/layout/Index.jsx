import { React, useState } from 'react'

import BtnStart from '../components/BtnStart'
import BtnPause from '../components/BtnPause'

import './Index.css'

export default (props) => {
  
  const [timerDefault, setTimer] = useState(30);

  return (
    
    <div className='container'>

      <div className='timer'>
        <h2>{timerDefault}</h2>
        <BtnStart /> {/* switch start to BtnPause*/}
        <BtnPause />
      </div>
      
    </div>

  );
};