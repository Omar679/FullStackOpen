import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Hello name="Umar" age={26} />
      {counter}
      <button onClick={handleClick}> Plus</button>
      <button onClick={() => setCounter(0)}>Zero</button>
    </div>
  );
};
const Hello = ({ name, age }) => {
  const bornyear = () => {
    const yearnow = new Date().getFullYear();
    return yearnow - age;
  };

  return (
    <>
      <h1>
        Hello {name} you are {age} years old
      </h1>
      <p>You are probably born in {bornyear()}</p>
    </>
  );
};
const Header = ({ name }) => {
  return <h1>{name}</h1>;
};
const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default App;
