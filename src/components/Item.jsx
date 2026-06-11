import AddBlackBg from './AddBlackBg'

function Item ({ prod }) {
  return (
    <AddBlackBg>
      <div>
        <img src={prod.thumbnail} alt={prod.title} className='rounded w-full h-60' />
        <div className='flex justify-between'>
          <p className='text-white'>{prod.title}</p>
          <p className='text-[#d0bcff] font-medium'>${prod.price}</p>
        </div>
        <p className='text-white'>{prod.category}</p>
      </div>
    </AddBlackBg>
  )
}

export default Item
