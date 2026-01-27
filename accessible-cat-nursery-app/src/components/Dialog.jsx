import { useEffect, useRef } from 'react'
import './Dialog.css'

export default function Dialog({ isOpen, title, description, onConfirm, onCancel }) {
  // Reference to confirm button
  const confirmRef = useRef(null)

  // Reference to the dialog container
  const dialogRef = useRef(null)

  // useEffect to:
  // 1. Move focus to the dialog when it opens.
  // 2. Trap focus within the dialog when it's open. 
  // 3. Return focus to previously focused element when dialog closes.
  useEffect(() => {
    if (!isOpen) return

    const previouslyFocused = document.activeElement

    // Focus the confirm button when the dialog opens
    confirmRef.current?.focus()

    // Get all focusable elements within the dialog
    const focusableElements = dialogRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onCancel()
        return
      }

      // Make sure focus is kept within the focusable elements in the dialog
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab: if focus is on first element, move to last
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          // Tab: if focus is on last element, move to first
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)

      // Return focus to the element that was focused before the dialog opened
      previouslyFocused?.focus()
    }
  }, [isOpen, onCancel])

  if (!isOpen) return null

  return (
    <div
      className="dialog-overlay"
      role="dialog" // Announces that it is a dialog to assistive technologies
      aria-modal="true" // Informs assistive tech that background content is inert
      aria-labelledby="confirm-dialog-title" // Links title for screen readers
      aria-describedby="confirm-dialog-desc" // Links description for screen readers
    >
      <div className="dialog" ref={dialogRef}>
        <h2 id="confirm-dialog-title">{title}</h2>
        <p id="confirm-dialog-desc">{description}</p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 12 }}>
          <button onClick={onCancel}>Cancel</button>
          <button ref={confirmRef} onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  )
}
