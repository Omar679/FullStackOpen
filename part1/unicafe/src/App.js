import React from "react";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Stats from "./Components/Stats";
import {useState} from 'react'

function App() {

  const [clicks, setClicks] = useState({
    good:0,
    neutral:0,
    bad:0,
    all:0,
    average: 0,
    positive:0
  })
  const averageCalc = (clicks.good - clicks.bad) / (clicks.good + clicks.neutral + clicks.bad) 
  const positiveCalc = ((clicks.good/100) * clicks.all )
  const goodClick = () => setClicks ({...clicks, good: clicks.good + 1, all: clicks.all + 1, average :averageCalc, positive: positiveCalc})
  const neutralClick = () => setClicks ({...clicks, neutral: clicks.neutral + 1, all: clicks.all + 1, average :averageCalc, positive: positiveCalc })
  const badClick = () => setClicks({...clicks, bad: clicks.bad + 1, all: clicks.all + 1, average :averageCalc, positive: positiveCalc})
  
 
  return (
    <div >
      <Header head = 'give feedback' />
      <button onClick={goodClick} >good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      <h1>statistics</h1>
      good {clicks.good} <br /> 
      neutral {clicks.neutral} <br /> 
      bad {clicks.bad} <br />
      all {clicks.all} <br />
      average {clicks.average} <br />
      positive {clicks.positive}
    </div>
  );
}

export default App;
