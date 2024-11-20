import React from 'react'
import HomePage from './pages/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import FoodPage from './pages/Food/FoodPage'
import CartPage from './pages/Cart/CartPage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import AuthRoute from './Components/AuthRoute/AuthRoute'
import CheckoutPages from './pages/Checkout/CheckoutPages'
import PaymentPage from './pages/Payment/PaymentPage'

export default function AppRoutes() {
  return  (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search/:searchTerm" element={<HomePage/>}/>
        <Route path="/tag/:tag" element={<HomePage/>}/>
        <Route path="/food/:id" element={<FoodPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/checkout" element={<AuthRoute><CheckoutPages/></AuthRoute>}/>
        <Route path="/payment" element={<AuthRoute><PaymentPage/></AuthRoute>}/>

    </Routes>
  )
}
