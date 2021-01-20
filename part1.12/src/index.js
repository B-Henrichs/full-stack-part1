import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  console.log(props.voteArray)
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
  }
  
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [items, setItems] = useState([0,0,0])
  const randomNumber = [Math.floor(Math.random()*anecdotes.length)]
  
  const randomAnecdote = () => setSelected(randomNumber)
  const copy = [...items]
  const vote = () => {
    setItems(copy[selected]+1)
  }
  return (
    <div>
      <ul>
        {items.map(item=>(
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      {props.anecdotes[selected]}<br/>
      <Button 
        handleClick={randomAnecdote}
        text="next anecdote" />
      <Button
        text="vote"
        handleClick={vote}/>
    </div>
  )
}

const anecdotes = [
  'Complexity reduces if we do difficult tasks often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)