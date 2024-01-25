import { useState } from 'react'

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sumGood = () => setGood(good + 1);
  const sumNeutral = () => setNeutral(neutral + 1);
  const sumBad = () => setBad(bad + 1);
  const all = () => (good + neutral + bad);
  const average = () => {

    const total = good + neutral + bad;

    if (total === 0){
      return 0;
    } else {
      return ((good * 1) + (neutral * 0) + (bad * -1) / total)
    }
  }
  const positive = () => {

    const total = good + neutral + bad;

    return (good * 100) / total;
  }

  const allCount = all();
  const averageScore = average();
  const positivePercentage = positive();

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
      <Statistics
        good = {good}
        neutral={neutral}
        bad={bad}
        all={allCount}
        average={averageScore}
        positive={positivePercentage}
      />

    </div>
  )
}

export default App