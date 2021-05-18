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
         <td>{props.character}</td>
        </tr>
     </>
    
)
}
const Statistics = ({good, neutral, bad}) => {
 const total= bad + good + neutral
 
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
          <Statistic text="good" value ={good} />
          <Statistic text="neutral" value ={neutral} />
          <Statistic text="bad" value ={bad} />
          <Statistic text="total" value ={bad + good + neutral} />
          <Statistic text="average" value ={(good-bad)/(bad+good+neutral)} />
          <Statistic text="positive" value ={(good/(bad + good + neutral))*100} character= '%' />
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