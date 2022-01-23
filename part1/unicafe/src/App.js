import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
  </tr>  
  )
}

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad

  if(total === 0) {
    return (
      <div>No Feedback Given</div>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text='Good Reviews: ' value={good} />
        <StatisticLine text='Neutral Reviews: ' value={neutral} />
        <StatisticLine text='Bad Reviews: ' value={bad} />
        <StatisticLine text='All: ' value={bad + good + neutral}  />
        <StatisticLine text='Average: ' value={(good - bad) / total} />
        <StatisticLine text='Positive: ' value={(good * 100) / total} />
      </tbody>
    </table>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + neutral + bad

  const handleGood = () => {
    console.log('Good Review')
    setGood(good + 1)
  }

  const handleNeutral = () => { 
    console.log('Neutral Review')
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    console.log('Bad Review')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={handleGood} text='GOOD' />
      <Button onClick={handleNeutral} text='NEUTRAL' />
      <Button onClick={handleBad} text='BAD' />

      <h2>Statistics</h2>

      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App
