import React, { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
    console.log(votes)

    const vote = () => {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
    }

   
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  return (
    
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<p>has {votes[selected]} votes</p>
      <Button text={'next anecdote'} handleClick={ ()  => setSelected(getRandomInt(5))}/>
      <Button text={'vote'} handleClick={vote}/>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <p>with {votes[votes.indexOf(Math.max(...votes))]} votes</p>
    </div>

  )
}


export default App
