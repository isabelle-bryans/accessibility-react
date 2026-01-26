import './CatCard.css'

export default function CatCard({ cat }) {
  return (
    <div className="cat-card-container">
      <img src={cat.image} className="cat-image" />
      <div className="cat-name">{cat.name}</div>
      <div className='cat-details'>
      <p><span className="cat-detail-label">Breed:</span> {cat.breed}</p>
      <p><span className="cat-detail-label">Cat Colouring:</span> {cat.colouring}</p>
      <p><span className="cat-detail-label">Age (months):</span> {cat.age}</p>
      <p><span className="cat-detail-label">Gender:</span> {cat.gender}</p>
      </div>
    </div>
  )
}
