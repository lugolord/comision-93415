import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../firebase/db'
import { useParams } from 'react-router'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { categoryName } = useParams() // undefined
    
  useEffect(() => {
    if (categoryName) {
      getProductsByCategory(categoryName)
        .then(prods => setItems(prods))
    } else {
      getProducts()
        .then(prods => setItems(prods))
    }
  }, [categoryName])

  return (
    <ItemList products={items} />
  )
}

export default ItemListContainer
