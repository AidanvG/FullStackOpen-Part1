import { useState } from 'react'
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      
    </div>
  )
}

export default App