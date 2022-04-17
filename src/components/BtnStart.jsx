import { React, useState } from 'react'

import './BtnStyle.css'

// eslint-disable-next-line
export default props => {

  const [time] = useState();

  function onStart() {
    setInterval(() => {
      if (time > 0) {
        console.log(time = time - 1)
      }
    }, 1000)
  }

  return (
    <div className="btn" id='start'>
      <span className='noselect' onClick={onStart()}>Start</span>
    </div>
  )
}