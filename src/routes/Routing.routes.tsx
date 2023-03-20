import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
