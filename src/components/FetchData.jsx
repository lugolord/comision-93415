import { useState, useEffect } from 'react'

function FetchData ({ children }) {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [])

  return (
    <>
      {children(items)}
    </>
  )
}

export default FetchData
