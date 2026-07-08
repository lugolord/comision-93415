import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router'

function Cart () {
  const { cart, getCartTotal } = useContext(CartContext)

  return (
    <div>
      <ul className="list rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Tu carrito</li>
        {cart.map(item => (
          <li className="list-row" key={item.id}>
            <div><img className="size-10 rounded-box" src={item.image}/></div>
            <div>
              <div>{item.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">{item.count} x {item.price}</div>
            </div>
            <button className="btn btn-square btn-error">
              X
            </button>
          </li>
        ))}
      </ul>
      <div className='mt-10'>
        <p className='mb-5'>Total  ${getCartTotal()}</p>
        <Link to='/checkout' className='bg-[#d0bcff] text-purple-900 mt-3 text-center font-bold px-30 py-4 rounded cursor-pointer'>
          ir al checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart
