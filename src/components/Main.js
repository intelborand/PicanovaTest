import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage';
import InstructionsPage from '../pages/InstructionsPage';
import TheGamePage from '../pages/TheGamePage'
import Home from '../pages/Home';

export default function Main() {
  return (
          <Routes>
                <Route exact  path='/' element={<Home/>} />
                <Route  path='/homePage' element={<Home/>} />
                <Route  path='/theGamePage' element={<TheGamePage />} />
                <Route  path='/aboutUsPage' element={<AboutUsPage />} />
                <Route  path='/instructionsPage' element={<InstructionsPage />} />
          </Routes>
  )
}
 