import Button from './Button'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Counter ({ item }) {
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleRestar = () => {
    if (count === 1) return
    setCount(count - 1)
  }

  return (
    <div>
      <div className='flex gap-3'>
        <Button 
          styles={'bg-black btn btn-square text-white px-3 py-2 rounded cursor-pointer'}
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
        <p>{count}</p>
        <Button 
          styles={'btn btn-square bg-black text-white px-3 py-2 rounded cursor-pointer'} 
          onClick={handleRestar}
        >
          -
        </Button>
      </div>
      <Button 
        styles={'bg-[#d0bcff] text-purple-900 font-medium px-3 py-2 rounded cursor-pointer w-full mt-3'} 
        onClick={() => addToCart({...item, count: count})}
      >
        add to cart
      </Button>
    </div>
  )
}

export default Counter
