import Button from './Button'
import { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(0)

  // quiero que count no pueda llegar a numeros negativos
  const handleRestar = () => {

  }

  return (
    <div>
      <p>{count}</p>
      <Button 
        label={'sumar'} 
        styles={'bg-green-400 text-white px-3 py-2 rounded cursor-pointer'}
        onClick={() => setCount(count + 1)}
      />
      <Button 
        label={'restar'} 
        styles={'bg-red-400 text-white px-3 py-2 rounded cursor-pointer'} 
        onClick={handleRestar}
      />
      <Button 
        label={'reiniciar'} 
        styles={'bg-yellow-400 text-white px-3 py-2 rounded cursor-pointer'} 
        onClick={() => setCount(0)}
      />
    </div>
  )
}

export default Counter
