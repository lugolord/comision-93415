import Item from './Item'

function ItemList ({ products }) {
  return (
    <div className='grid grid-cols-4 gap-3 px-5'>
      {products.map(prod => <Item prod={prod} key={prod.id} />)}
    </div>
  )
}

export default ItemList
