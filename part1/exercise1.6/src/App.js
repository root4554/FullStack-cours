import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>good = {good} </p>
      <p>neutral = {neutral} </p>
      <p>bad = {bad} </p>
    </div>
  )
}  
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>Statistics</h1>
    
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App