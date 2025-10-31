import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout/MainLayout'
import Listing from './pages/Listing/Listing'
import Blog from './pages/Blog/Blog'
import Details from './pages/Details/Details'
import Accessories from './pages/Accessories/Accessories'
import Shop from './pages/Shop/Shop'
import Login from './pages/LogIn/Login'
import LoanCalculator from './pages/LoanCalculator/LoanCalculator'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/listings' element={<Listing/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/loanCalc' element={<LoanCalculator/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App