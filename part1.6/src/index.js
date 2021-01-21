import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const Statistic = (props) =>{
return(
   
     <>
        <tr>
         <td>{props.text}</td>
         <td>{props.value}</td>
        </tr>
     </>
    
)
}
const Statistics = (props) => {
 const total= props.bad + props.good + props.neutral
 
 if (total=== 0){
   return(
     <div> 
       No feedback given
     </div>
   )
 }  
  return(
    <div>
      <table>
        <tbody>
          <Statistic text="good" value ={props.good} />
          <Statistic text="neutral" value ={props.neutral} />
          <Statistic text="bad" value ={props.bad} />
          <Statistic text="total" value ={props.bad + props.good + props.neutral} />
          <Statistic text="average" value ={(props.good-props.bad)/(props.bad+props.good+props.neutral)} />
          <Statistic text="% positive" value ={(props.good/(props.bad + props.good + props.neutral))*100} />
        </tbody>
      </table>  
    </div>
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
     <Statistics good={good}  neutral={neutral} bad={bad}/>
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)