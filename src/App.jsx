import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [likes, setLikes] = useState (initialState, 5)
  function increment () {
    setLikes (value, likes + 1)
  }
  function decrement () {
    setLikes (value, likes + 1)
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App
