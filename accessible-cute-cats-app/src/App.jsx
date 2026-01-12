import { use, useState } from 'react'
import ragdoll from './assets/cute-ragdoll.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const labelText = 'Name'
  const [showDetails, setShowDetails] = useState(false)

  const onChangeHandler = (event) => {
    setInputValue(event.target.value)
  }


  const displayForm1 = () => {
    setShowDetails((prev) => !prev)
  }



  return (
    <>
      <div>
        <img src={ragdoll} className="image cat" alt="Cute cat image" />
      </div>
      <h1>Accessible React App</h1>
      <div className="card">
        <button onClick={displayForm1}>
          {showDetails ? 'Hide cat details' : 'Reveal cat details'}
        </button>

        {showDetails && (
          <section
            id="cat-details"
            role="region"
            aria-label="Cat details"
            className="cat-details"
          >
            <h2 className="visually-hidden">Cat details</h2>
            <ul>
              <li><strong>Name:</strong> Mochi</li>
              <li><strong>Breed:</strong> Ragdoll</li>
              <li><strong>Age:</strong> 2 years</li>
              <li><strong>Personality:</strong> Affectionate, laid-back, loves naps</li>
            </ul>
          </section>
        )}

        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="input-box"
          required="true"
          type="text"
          // aria-label={labelText}
          // aria-required="true"
          onChange={onChangeHandler}
          value={inputValue}
          name="name"
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
