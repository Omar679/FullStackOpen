import { useState } from "react";

const App = () => {
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleRight = () => {
    setAllClicks(allClicks.concat("R"));
    setTotal(total + 1);
    return setRight(right + 1);
  };
  const handleLeft = () => {
    setAllClicks(allClicks.concat("L"));
    setTotal(total + 1);
    return setLeft(left + 1);
  };
  const handleReset = () => {
    return setLeft(0), setRight(0), setAllClicks([]), setTotal(0);
  };

  return (
    <>
      <p>
        {right}
        <Button handleclick={handleRight} text="Rigth" />
        <Button handleclick={handleLeft} text="Left" />
        {left}
        <Button handleclick={handleReset} text="Reset" />
      </p>
      <p> Total: {total}</p>
      <History allClicks={allClicks} />
    </>
  );
};

const History = ({ allClicks }) => {
  if (allClicks.length == 0) {
    return (
      <>
        <p>The app works by clickinng the buttons</p>
      </>
    );
  }

  return <>Button Press History {allClicks.join(" ")}</>;
};
const Button = ({ handleclick, text }) => {
  return <button onClick={handleclick}>{text}</button>;
};

export default App;
