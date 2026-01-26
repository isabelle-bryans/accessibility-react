import CatCard from './CatCard'
import useCatStore from '../store';
import './Nursery.css'

export default function Nursery() {
  const cats = useCatStore(state => state.cats);

  return (
    <div className='nursery-container'>
    <div className="nursery-header">Cats</div>
    <div className="nursery">
      {cats.map((cat, index) => (
        <div key={index} >
          <CatCard cat={cat} />
        </div>
      ))}
    </div>
    </div>
  )
}
