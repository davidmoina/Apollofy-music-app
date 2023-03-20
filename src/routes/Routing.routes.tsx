import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes'
import { Home } from '../pages/Home/Home'
import { LoginPage } from '../pages/LoginPage/LoginPage'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>} />
        </Route>
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
