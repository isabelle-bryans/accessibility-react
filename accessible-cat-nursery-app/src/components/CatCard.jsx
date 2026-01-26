import './CatCard.css'

export default function CatCard({ cat }) {
  return (
    <article className="cat-card-container">
      <img src={cat.image} className="cat-image" alt="cat image" />
      <h3>{cat.name}</h3>
      <dl className='cat-details'>
      <dt>Breed</dt> <dd>{cat.breed}</dd>
      <dt>Colouring</dt> <dd>{cat.colouring}</dd>
      <dt>Age</dt> <dd>{cat.age} months</dd>
      <dt>Gender</dt> <dd>{cat.gender}</dd>
      </dl>
    </article>
  )
}
