export default function CatCard({ cat }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, width: 200 }}>
      <img src={cat.image} alt={cat.name} style={{ width: '100%', borderRadius: 8 }} />
      <h3>{cat.name}</h3>
      <p>Breed: {cat.breed}</p>
      <p>Cat Colouring: {cat.colouring}</p>
      <p>{'Age (months): ' + cat.age}</p>
    </div>
  )
}
