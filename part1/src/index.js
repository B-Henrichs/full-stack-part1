import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Display = (props) => {
  return (
    <div>{props.text} {props.counter}</div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [ good, setGood ] = useState(0)
  const increaseGood = () => setGood(good + 1)
  const [neutral, setNeutral] = useState(0)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const [bad, setBad] = useState(0)
  const increaseBad = () => setBad(bad + 1)
  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={increaseGood}
        text='good'
      />
      <Button
        handleClick={increaseNeutral}
        text='neutral'
      />
      <Button
        handleClick={increaseBad}
        text='bad'
      />
      <h1>statistics</h1>
      <Display counter={good} text="good"/>
      <Display counter={neutral} text="neutral"/>
      <Display counter={bad} text="bad"/>

    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)