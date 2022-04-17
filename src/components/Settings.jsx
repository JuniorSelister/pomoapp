import React from 'react'

export default props => {

  const [timerDefault, setTimer] = useState(30);

  function setNewTimer (e) {
    setTimer(e.target.timerDefault)
  }

  function saveSettings (e) {

  }

  function abortSettings (e) {
    const temp = timerDefault
  }

  return (
    <div>
      <input value={timerDefault} onChange={setNewTimer} />
      <button>Save</button>
      <button>Abort</button>
    </div>
  )
}