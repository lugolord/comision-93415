import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { BrowserRouter } from 'react-router'

function App () {
  return (
    <div className='flex h-screen overflow-hidden'>
      <BrowserRouter>
        <Sidebar />
        <Main />
      </BrowserRouter>
    </div>
  )
}

export default App
