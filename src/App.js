import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Features from './components/Features';
import NavBar from './components/NavBar'
import TextUtils from './components/TextUtils'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<TextUtils />} />
          <Route path='*' element={<Error />} />
          <Route path='/features' element={<Features />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App