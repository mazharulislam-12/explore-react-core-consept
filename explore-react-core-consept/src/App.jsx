import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Language></Language>
      <Developer></Developer>
    
    </>
  )
}

function Person() {
  const age = 20;
  const money = 100;
  const a = 250;
  const b = 50;
  const person = {name: 'shakib', age: 19};
  return <h3>I am {person.name}. My age {person.age}. My money {money}. the sum {a + b}</h3>
}
function Student() {
  return (
  <div className='student'>
    <h3>This is a Student</h3>
    <p>Name: </p>
    <p>age: </p>
  </div>
  )
}

function Language() {
  return ( 
  <div>
    <h2>My language skill</h2>
    <p>Bangla</p>
    <p>English</p>
  </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid red'

  }
  return(
    <div style={developerStyle}>
      <h5>Javascript</h5>
      <p>Vs code</p>
    </div>
  )
}

export default App
