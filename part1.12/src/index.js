import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  }

  const QuoteOfTheDay = (props) => {
    return (
      <div>
        <h1>Quote of the day</h1>
      </div>
    )
    } 
    const QuoteWithVotes = (props) => {
      return (
        <div>
          <h1>Quote With The Most Votes</h1>
        </div>
      )
      } 

const App = (props) => {
  const [selected, setSelected] = useState(0)

  //the votes array
  const [items, setItems] = useState(
    Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  
  

// handles picking a random quote
  const randomNumber = [Math.floor(Math.random()*anecdotes.length)]
  const randomAnecdote = () => setSelected(randomNumber)

  
  const vote = () => {
    const copy = [...items]
    console.log(copy)
    
    copy[selected] += 1
    //this changes the votes array
    console.log("copy is",copy)
    setItems(copy)
    
  }
  const highestVotes = items.indexOf(Math.max(...items))
  console.log("highest vote is",highestVotes)

  


  
  console.log("the votes array looks like", items)
  return (
    <div>
      <QuoteOfTheDay/>
      {props.anecdotes[selected]}<br/>
      
      <Button 
        handleClick={randomAnecdote}
        text="next anecdote" />
      <Button
        text="vote"
        handleClick={vote}/>
      <QuoteWithVotes /> 
      {props.anecdotes[highestVotes]}
      
      
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