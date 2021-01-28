import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const xsum = course.parts.map(parts =>
    parts.exercises
    )
  const sum = xsum.reduce((accumulator,currentValue) => accumulator + currentValue, 0 )

console.log('xsum is', xsum)
  return(
    <p>Number of exercises {sum}</p>
  ) 
}



const Content = ({ course }) => {
  
    console.log("the course is",course)
    return(
      <ul >
    {course.parts.map(parts => 
      <li key={parts.id}>
        {parts.name} {parts.exercises}
        </li>
        )}
    
    </ul>
    )
}

const Course =({course})=> {
  return(
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

const Courses =(props)=>{
  console.log("courses id are",props)
  return(
    <ul>
     {props.courses.map( course =>
     <li key={course.id}>
       <Course course={course}/>
       </li>
       )}
     </ul>
  )
 
  }

  const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  

  return <Courses courses={courses} />
}


ReactDOM.render(<App />, document.getElementById('root'))