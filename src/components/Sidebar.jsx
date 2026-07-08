import Categories from './Categories'
import { Link } from 'react-router'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Sidebar () {
  const { getCartQuantity } = useContext(CartContext)

  return (
    <aside className='py-5 px-3 flex flex-col justify-between bg-[#201f1f] w-2/12 h-screen'>
      <header>
        <Link to='/' className='text-2xl text-[#d0bcff]'>Luxe Boutique</Link>
        <p className='text-gray-400 mb-5'>Premium Tech Store</p>
        <ul>
          <li className='text-white mb-4'>Home</li>
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className='text-white mb-4 cursor-pointer'>Categories</div>
            <Categories />
          </div>
          <li className='text-white mb-4'>New Arrivals</li>
          <li className='text-white mb-4'>My Orders</li>
          <li className='text-white mb-4'>Profile</li>
        </ul>
      </header>
      <Link to='/cart' className='bg-[#d0bcff] text-purple-900 text-center font-bold w-full px-3 py-2 rounded cursor-pointer'>
        Cart {getCartQuantity()}
      </Link>
    </aside>
  )
}

export default Sidebar
