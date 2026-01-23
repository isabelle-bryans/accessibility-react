import React, { useEffect, useRef } from 'react'
import './Dialog.css'

export default function Dialog({ isOpen, title, description, onConfirm, onCancel }) {
  const confirmRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const previouslyFocused = document.activeElement
    confirmRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onCancel()
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      previouslyFocused?.focus()
    }
  }, [isOpen, onCancel])

  if (!isOpen) return null

  return (
    <div
      className="dialog-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-desc"
      onClick={onCancel}
    >
      <div
        className="dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="confirm-dialog-title">{title}</h2>
        <p id="confirm-dialog-desc">{description}</p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 12 }}>
          <button onClick={onCancel} aria-label="Cancel">Cancel</button>
          <button ref={confirmRef} onClick={onConfirm} aria-label="Confirm">Confirm</button>
        </div>
      </div>
    </div>
  )
}
