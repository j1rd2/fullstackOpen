import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="All" value={all} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine text="Positive" value={positive + '%'} />
        </tbody>
      </table>
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

    <Button handleClick={sumGood} text={'Good'}/>
    <Button handleClick={sumNeutral} text={'Neutral'}/>
    <Button handleClick={sumNeutral} text={'Bad'}/>



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