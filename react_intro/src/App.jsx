import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Labels from './components/Labels'
import Joke from './components/Joke'
import Saved from './components/Saved'

function App() {
  const [joke, setJoke] = useState('No joke yet. Please click the button')
  const [saved, setSaved] = useState([])

  function getNextJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => setJoke(data['value']))
  }

  function saveJoke() {
    setSaved([...saved, joke])
  }


  return (
    <>
      <Labels />
      <div>
        <button onClick={getNextJoke}>Get Next Joke</button> 
        <button onClick={saveJoke}>Save current joke</button>
      </div>
      <Joke joke={joke} />
      <Saved saved={saved} />
    </>
  )
}

export default App
