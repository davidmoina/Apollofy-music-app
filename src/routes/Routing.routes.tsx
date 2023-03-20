import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes'
import { Home } from '../pages/Home/Home'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>} />
        </Route>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
