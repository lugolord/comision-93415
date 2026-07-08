import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { getCategories } from '../firebase/db'

function Categories () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(cats => setCategories(cats))
  }, [])

  return (
    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      {categories.map(categ => <li key={categ}><Link to={`/category/${categ}`}>{categ}</Link></li>)}
    </ul>
  )
}

export default Categories
