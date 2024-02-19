import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'

import HomePage from './view/HomePage'
import Contact from './view/Contact'
import NotFound from './view/NotFound'

import './App.css'

function App() {
  

  return (
      <>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </>
  )
}

export default App
