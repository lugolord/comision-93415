import { useNavigate } from 'react-router'

function Item ({ prod }) {
  const navigate = useNavigate()
  
  return (
    <div 
      className='border border-black rounded cursor-pointer p-2 shadow' 
      onClick={() => navigate(`/item/${prod.id}`)}
    >
      <img src={prod.image} alt={prod.name} className='rounded w-full h-60' />
      <div className='flex justify-between'>
        <p className='text-white'>{prod.name}</p>
        <p className='text-[#d0bcff] font-medium'>${prod.price}</p>
      </div>
      <p className='text-white'>{prod.category}</p>
    </div>
  )
}

export default Item
