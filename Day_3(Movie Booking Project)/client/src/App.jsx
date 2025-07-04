import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./app.css"

const App = () => {
  return (
    <>
    <BrowserRouter>

      <Routes>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
   
    </>

  )
}

export default App