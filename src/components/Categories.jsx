import { useState, useEffect } from 'react'

function Categories () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      {categories.map(categ => <li key={categ}><a>{categ}</a></li>)}
    </ul>
  )
}

export default Categories
