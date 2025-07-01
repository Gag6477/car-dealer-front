import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import MainLayout from './layouts/MainLayout/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App