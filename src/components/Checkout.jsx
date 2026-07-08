import { createOrder } from '../firebase/db'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { serverTimestamp } from 'firebase/firestore'

function Checkout () {
  const { cart } = useContext(CartContext)

  const handleCreateOrder = (e) => {
    e.preventDefault()

    const form = e.target
    const fullname = form.fullname.value
    const email = form.email.value
    const phoneNumber = form.phoneNumber.value
    const address = form.address.value

    createOrder({
      user: { fullname, email, phoneNumber, address },
      items: cart,
      time: serverTimestamp() 
    })
  }

  return (
    <div className='px-20'>
      <h2 className='mb-3 text-2xl font-medium'>Antes de finalizar tu compra, necesitamos los siguientes datos:</h2>
      <form className='flex flex-col gap-3' onSubmit={handleCreateOrder}>
        <input id='fullname' type="text" placeholder="Pepito Perez" className="input w-full" />
        <input id='email' type="email" placeholder="pepito@gmail.com" className="input w-full" />
        <input id='phoneNumber' type="text" placeholder="+5491123434554" className="input w-full" />
        <input id='address' type="text" placeholder="CABA, Cordoba 123" className="input w-full" />
        <button className='btn'>finalizar compra 🎉</button>
      </form>
    </div>
  )
}

export default Checkout
