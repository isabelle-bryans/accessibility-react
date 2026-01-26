import './Dialog.css'

export default function Dialog({ isOpen, title, description, onConfirm, onCancel }) {
  if (!isOpen) return null

  return (
    <div
      className="dialog-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-desc"
    >
      <div className="dialog">
        <h2 id="confirm-dialog-title">{title}</h2>
        <p id="confirm-dialog-desc">{description}</p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 12 }}>
          <button onClick={onCancel} aria-label="Cancel">Cancel</button>
          <button onClick={onConfirm} aria-label="Confirm">Confirm</button>
        </div>
      </div>
    </div>
  )
}
