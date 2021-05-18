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
        {props.quote}<p>has {props.voteCount} votes</p>
      </div>
    )
    } 
    const QuoteWithVotes = (props) => {
      if (Math.max(...props.items) === 0)
      return(
        <div>
          <h1>Quote With The Most Votes</h1>
          <p>no votes yet</p>
        </div>
      )
      else return (
        <div>
          <h1>Quote With The Most Votes</h1>
          {props.quote}
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
      <QuoteOfTheDay quote={props.anecdotes[selected]} voteCount={items[selected]}/>
      <Button
        text="vote"
        handleClick={vote}/>
      <Button 
        handleClick={randomAnecdote}
        text="next quote" />
      <QuoteWithVotes items={items} quote={props.anecdotes[highestVotes]} /> 
      
      
      
    </div>
  )
}

const anecdotes = [
  '"Complexity reduces if we do difficult tasks often"-B. Henrichs',
  '"Adding manpower to a late software project makes it later!"- Fred Brooks(Brooks Law)',
  '"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time."-Tom Cargill, Bell Labs',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."-Martin Fowler',
  '"Premature optimization is the root of all evil."-Donald Knuth, The Art of Computer Programming',
  '"Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?"-Brian Kernighan, Bell Labs'
]



ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)