import Button from './Button'
import { useState, useEffect } from 'react'

function Counter () {
  const [count, setCount] = useState(0)

  const handleRestar = () => {
    if (count === 0) return
    setCount(count - 1)
  }

  useEffect(() => {
    console.log('el counter se actualizo')

    return () => { // funcion de limpieza o cleanup function
      console.log('el componente se desmonto')
    } 
  }, [count]) // array de dependencias

  // [] -> el efecto se va a ejecutar SOLO en el montaje
  // [a, b] -> el efecto se va a ejecutar en el montaje 
  // y cuando cambie el valor de "a" o "b"
  // desmontaje -> funcion de limpieza

  return (
    <div>
      <p>{count}</p>
      <Button 
        styles={'bg-green-400 text-white px-3 py-2 rounded cursor-pointer'}
        onClick={() => setCount(count + 1)}
      >
        sumar
      </Button>
      <Button 
        styles={'bg-red-400 text-white px-3 py-2 rounded cursor-pointer'} 
        onClick={handleRestar}
      >
        restar
      </Button>
      <Button 
        styles={'bg-yellow-400 text-white px-3 py-2 rounded cursor-pointer'} 
        onClick={() => setCount(0)}
      >
        reiniciar
      </Button>
    </div>
  )
}

export default Counter
