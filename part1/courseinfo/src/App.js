import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
const App = () => {
 
 const course = {
  Name : 'Half Stack application development',
  parts : [
    {
    name: 'Fundamentals fo React',
    exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State component',
      exercises: 17
    }]
  }

 
  return(

    <div>
      console.log('Here')
      <Header course= {course.Name}  />
      <Content parts= {course.parts} />
      <Total parts =  {course.parts} />
    </div>
  )
}

export default App;
