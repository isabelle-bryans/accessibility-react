import CatCard from './CatCard'
import useCatStore from '../store';
import './Nursery.css'

export default function Nursery() {
  const cats = useCatStore(state => state.cats);

  return (
    <section className='nursery-container'>
    <h2>Cats</h2>
    <ul className="nursery" aria-label="Available cats">
      {cats.map((cat, index) => (
        <li key={index} >
          <CatCard cat={cat} />
        </li>
      ))}
    </ul>
    </section>
  )
}
