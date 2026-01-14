import { useState, useRef } from 'react'
import useCatStore from './store'
import ragdoll from './assets/cute-ragdoll.jpg'
import './App.css'
import Nursery from './components/Nursery'
import Dialog from './components/Dialog'
import { Alert } from '@mui/material'

function App() {
  const [inputName, setInputName] = useState('')
  const [committedName, setCommittedName] = useState('')
  const { points, feedCats, resetNursery } = useCatStore();
  const [showConfirmReset, setShowConfirmReset] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const timerRef = useRef(null);

  const onChangeName = (event) => {
    setInputName(event.target.value)
  }

  const commitName = () => {
    setCommittedName(inputName.trim())
  }

  const onFeedCats = () => {
    const added = feedCats();
    if (added) {
      setShowAlert(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const onResetClick = () => {
    setShowConfirmReset(true);
    setShowAlert(false);
  }



  return (
    <>
      <div>
        <img src={ragdoll} className="image cat" alt="Cute cat image" />
      </div>
      {!committedName && (
        <form onSubmit={(e) => { e.preventDefault(); commitName(); }}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            required={true}
            type="text"
            value={inputName

            }
            onChange={onChangeName}
          />
          <button type="submit">Save</button>
        </form>
      )}
      <h1>{committedName && `${committedName}'s Cat Nursery` || 'Accessible React App'}</h1>
      <div className="card">
        <p>You have {points} points!</p>
        <p className="read-the-docs">
          Feed cats to get more points!
        </p>
        <p className="read-the-docs">
          More points unlocks more cats!
        </p>
        <div>Nursery Actions:
          <button onClick={onFeedCats}>
            Feed Cats
          </button>
          <button onClick={onResetClick}>
            Reset Nursery
          </button>
        </div>
      </div>
      <Nursery />
      <Dialog
        isOpen={showConfirmReset}
        title="Reset Nursery?"
        description="This will reset your points to 0 and Remove any cats requiring points from your nursery. Are you sure you want to continue?"
        onConfirm={() => { resetNursery(); setShowConfirmReset(false); }}
        onCancel={() => setShowConfirmReset(false)}
      />
      {showAlert && (
        <Alert
          severity="success"
          className="alert"
          role="alert"
          aria-atomic="true"
        >
          A new cat has been added to your nursery!
        </Alert>
      )}
    </>
  )
}

export default App
