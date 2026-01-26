import { useState, useRef } from 'react'
import useCatStore from './store'
import ragdoll from './assets/cute-ragdoll.jpg'
import './App.css'
import Nursery from './components/Nursery'
import Dialog from './components/Dialog'
import { Alert } from '@mui/material'
import FocusTrap from '@mui/material/Unstable_TrapFocus'

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
      <header>
        <img src={ragdoll} className="image cat" alt="Cute cat image" />
      </header>
      <main>
        <h1>
          {committedName ? `${committedName}'s Cat Nursery` : 'Accessible React App'}
        </h1>
        {!committedName && (
          <form onSubmit={(e) => { e.preventDefault(); commitName(); }}>
            <label htmlFor="name">Please enter your name </label>
            <input
              id="name"
              required
              type="text"
              value={inputName}
              onChange={onChangeName}
            />
            <button type="submit">Save</button>
          </form>
        )}
        <section className="card">
          <h2>
            Game instructions
          </h2>
          <p>Feed cats to get more points!</p>
          <p>More points unlocks more cats!</p>
          </section>
          <section>
          <h2>Game Actions and Points</h2>
          <div className='nursery-actions-container'>
            <div className='nursery-action-buttons'>
              <button type="button" onClick={onFeedCats}>
                Feed Cats
              </button>
              <button type="button" onClick={onResetClick}>
                Reset Nursery
              </button>
            </div>
            <aside className='points-card'>
              <h3>Points</h3>
              <output aria-live="polite" aria-atomic="true">{points}</output>
            </aside>
            </div>
          </section>
        <Nursery />
      </main>
        <FocusTrap>
      <Dialog
        isOpen={showConfirmReset}
        title="Reset Nursery?"
        description="This will reset your points to 0 and Remove any cats requiring points from your nursery. Are you sure you want to continue?"
        onConfirm={() => { resetNursery(); setShowConfirmReset(false); }}
        onCancel={() => setShowConfirmReset(false)}
      /></FocusTrap>
      {showAlert && (
        <Alert
          severity="success"
          className="alert"
          role="alert"
          aria-atomic="true" // not needed
        >
          A new cat has been added to your nursery!
        </Alert>
      )}
    </>
  )
}

export default App
