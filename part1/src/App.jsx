import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sumGood = () => setGood(good + 1);
  const sumNeutral = () => setNeutral(neutral + 1);
  const sumBad = () => setBad(bad + 1);

  return (
    <div>

      <h1>Give feedback</h1>

      <button onClick={sumGood}>
        Good
      </button>
      <button onClick={sumNeutral}>
        Neutral
      </button>
      <button onClick={sumBad}>
        Bad
      </button>
      <h1>Statistics</h1>
      <p>
        {'Good' + good}
      </p>
      <p>
        {'Neutral' + neutral}
      </p>
      <p>
        {'Bad' + bad}
      </p>
    </div>
  )
}

export default App