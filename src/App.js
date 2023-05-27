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
        <button onClick={handleRight}>Right</button>
        <button onClick={handleLeft}>Left</button>
        {left}
        <button onClick={handleReset}>Reset</button>
      </p>
      {allClicks.join("-")}
      <p>{total}</p>
    </>
  );
};

export default App;
