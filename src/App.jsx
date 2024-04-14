import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { HomePage } from './pages/HomePage';
import { CheckOut } from './pages/CheckOut';
import { Cart } from './pages/Cart';
import { AllProducts } from './pages/AllProducts';
import React from 'react';
import { Trying } from './pages/Trying';

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/allproducts' element={<AllProducts/>}/>
      <Route path='/trying' element={<Trying/>}/>
      </Routes>
     
     
     </BrowserRouter>
    </>
  )
}

export default App
