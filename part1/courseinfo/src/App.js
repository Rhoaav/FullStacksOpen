import React from 'react'

//Header takes care of rendering the name of the course
const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  )
}

//Part components of which each renders the name and number of exercises of one part
const Part =(props) => {
  return (
    <li>
      {props.parts.name} = {props.parts.exercises}
    </li>
  )
}

//Content renders the parts and their number of exercises
const Content = (props) => {
  return (
    <ul>
      <Part parts = {props.parts[0]} />
      <Part parts = {props.parts[1]} />
      <Part parts = {props.parts[2]} />
    </ul>

  )
}

//Total renders the total number of exercises
const Total = (props) => {
  return (
    <p>Number of exercises = {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}


const App = (props) => {

  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

 
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}


export default App
