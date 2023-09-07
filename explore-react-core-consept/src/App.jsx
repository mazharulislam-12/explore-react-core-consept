import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Todo from './todo';
import Actor from './Actor';
import Singer from './Singer';

function App() {
  const [count, setCount] = useState(0);

  const actors = ['John', 'Michael', 'David', 'James', 'Robert'];

  const singers = [
    { id: 1, name: 'William', age: 50 },
    { id: 2, name: 'Charles', age: 38 },
    { id: 3, name: 'Richard', age: 40 },
    { id: 4, name: 'Jack', age: 32 },
  ];

  return (
    <>
      <h3>Vite + React</h3>

     {
      singers.map(singer => <Singer singer={singer}></Singer>)
     }

      <Actor name={'Shakib Khan'}></Actor>
      {actors.map((acotor) => (
        <Actor name={acotor}></Actor>
      ))}
      {/* <Todo task = "learn react" isDone={true}></Todo>
      <Todo task = "explore core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}

      {/* <Device name= "Laptop" price = "550000"></Device>
      <Person></Person>
      <Student grade={11} score={89}></Student>
      <Student grade={12} score={85}></Student>
      <Student grade = "7" score = "99"></Student>
      <Student></Student>
      <Language></Language>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h2>
      This is device {props.name}, Price {props.price}{' '}
    </h2>
  );
}

function Person() {
  const age = 20;
  const money = 100;
  const a = 250;
  const b = 50;
  const person = { name: 'shakib', age: 19 };
  return (
    <h3>
      I am {person.name}. My age {person.age}. My money {money}. the sum {a + b}
    </h3>
  );
}

const { grade, score } = { grade: '7', score: '99' };
function Student({ grade = 0, score = 0 }) {
  console.log({ grade, score });
  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Class: {grade} </p>
      <p>Score: {score} </p>
    </div>
  );
}

function Language() {
  return (
    <div>
      <h2>My language skill</h2>
      <p>Bangla</p>
      <p>English</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '20px',
  };
  return (
    <div style={developerStyle}>
      <h5>Javascript</h5>
      <p>Vs code</p>
    </div>
  );
}

export default App;
