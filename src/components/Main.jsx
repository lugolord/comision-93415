import { Routes, Route } from 'react-router'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart'
import Checkout from './Checkout'

function Main () {
  return (
    <div className='bg-[#131313] w-full h-screen overflow-y-auto p-5'>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryName' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default Main
