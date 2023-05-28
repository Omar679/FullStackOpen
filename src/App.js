import { useState } from "react";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const goodHandler = () => {
    setAll(all + 1);
    setAverage(average + 1);
    return setGood(good + 1);
  };
  const badHandler = () => {
    setAll(all + 1);
    setAverage(average - 1);
    return setBad(bad + 1);
  };
  const neutralHandler = () => {
    setAll(all + 1);
    setAverage(average);
    return setNeutral(neutral + 1);
  };
  return (
    <>
      <h1>give feedback</h1>
      <p>
        <Button text={"good"} buttonHandler={goodHandler} />
        <Button text={"neutral"} buttonHandler={neutralHandler} />
        <Button text={"bad"} buttonHandler={badHandler} />
      </p>
      <Statistics
        good={good}
        bad={bad}
        average={average}
        all={all}
        neutral={neutral}
      />
    </>
  );
};

const Button = ({ buttonHandler, text }) => {
  return (
    <>
      <button onClick={buttonHandler}>{text}</button>
    </>
  );
};
const Statistics = ({ good, bad, average, all, neutral }) => {
  if (all === 0) {
    return <>No feedback given</>;
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={(average / all).toFixed(1)} />
          <StatisticsLine
            text="positive"
            value={((good / all) * 100).toFixed(1).concat(" %")}
          />
        </tbody>
      </table>
    </>
  );
};
const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text} </td>
        <td>{value}</td>
      </tr>
    </>
  );
};

export default App;
