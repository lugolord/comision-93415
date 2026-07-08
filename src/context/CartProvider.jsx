import { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.id === product.id)

      if (exists) return prevCart

      return [...prevCart, product]
    })
  }

  const getCartQuantity = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  }

  const getCartTotal = () => {
    const total = cart.reduce((total, item) => total + item.price*item.count, 0)

    return Math.round(total * 100) / 100
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartQuantity, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
