import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { LoginPage } from '../pages/LoginPage/LoginPage'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
