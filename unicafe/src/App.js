import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistic = ({ text , value }) => (
  <p>{text} {value}</p>
  
)
const StatsDisplay = ({ good , bad , neutral }) => {
  if (bad + good + neutral === 0){
    return(
      <p>No feedback given</p>
    )
    }
    return(
  <div>
    <Statistic text="good" value ={good} />
    <Statistic text="neutral" value ={neutral} />
    <Statistic text="bad" value ={bad} />
    <Statistic text="all" value ={bad + good + neutral} />
    <Statistic text="average" value ={(good - bad ) / (bad + good + neutral)} />
    <Statistic text="percent positive" value ={good*100 / (bad + good + neutral)+'%'} />
  </div>
    )
  
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1 )} text={'good'} /> <Button handleClick={() => setNeutral(neutral +1 )} text={'neutral'}/> <Button handleClick={() => setBad(bad +1 )} text={'bad'}/>
      <h2>statistics</h2>
      <StatsDisplay good={good} bad={bad} neutral={neutral} />
    
    </div>
  )
}

export default App