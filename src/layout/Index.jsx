import React from 'react'

export default (props) => {
  
  const [timerDefault, setTimer] = useState(30);

  return (
    
    <div className='header'>

      <div className='timer'>
        <h2>{timerDefault}</h2>
        <button>Start</button> {/* switch start to pause*/}

      </div>
      
    </div>

  );
};