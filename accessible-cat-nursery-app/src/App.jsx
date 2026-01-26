import { useState, useRef } from 'react'
import useCatStore from './store'
import ragdoll from './assets/cute-ragdoll.jpg'
import './App.css'
import Nursery from './components/Nursery'
import Dialog from './components/Dialog'
import { Alert } from '@mui/material'

function App() {
  const { points, feedCats, resetNursery } = useCatStore();
  const [showConfirmReset, setShowConfirmReset] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const timerRef = useRef(null);

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
        <h1>Accessible Cat Nursery</h1>
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
          // role="alert"         ARIA attributes are built-in with MUI Alert component
          // aria-atomic="true"
          // aria-live="polite"
        >
          A new cat has been added to your nursery!
        </Alert>
      )}
    </>
  )
}

export default App
