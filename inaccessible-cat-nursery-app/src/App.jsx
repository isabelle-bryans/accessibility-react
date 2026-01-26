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
        <img src={ragdoll} className="image cat" alt="Cute cat image" />
        <div className="title" >Inaccessible Cat Nursery</div>
        <div className="card">
          <div className='sub-header'>Game Instructions</div>
          <p>Feed cats to get more points!</p>
          <p>More points unlocks more cats!</p>
          <div className='sub-header'>Game Actions and Points</div>
          <div className='nursery-actions-container'>
            <div>
              <div className='nursery-action-buttons'>
                <button className='no-outline-button' onClick={onFeedCats}>
                  Feed Cats
                </button>
                <button className='no-outline-button' onClick={onResetClick}>
                  Reset Nursery
                </button>
              </div>
            </div>
            <div className='points-card'>
              <p>Points</p>
              <p>{points}</p>
            </div>
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
        >
          A new cat has been added to your nursery!
        </Alert>
      )}
    </>
  )
}

export default App
