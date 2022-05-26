import './css/App.css'
import { BrowserRouter, Routes, Route, Redirect, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

import MyHeader from './components/MyHeader'
import Category from './pages/Category'
import Country from './pages/Country'
import Region from './pages/Region'
import City from './pages/City'
import Sale from './pages/Sale'
import Distance from './pages/Distance'

import France from './components/France'
import Us from './components/Us'
import Uk from './components/Uk'
import Indonesia from './components/Indonesia'
import Australia from './components/Australia'
import SouthKorea from './components/SouthKorea'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  const onLogin = () => {
    setIsLogged((prev) => !prev)
    // console.log(isLogged)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home isLogged={isLogged} onLogin={onLogin} />}>
            <Route path="category" element={<Category isLogged={isLogged} onLogin={onLogin} />} />
          </Route>
          <Route
            path="/login"
            element={!isLogged && <Login isLogged={isLogged} onLogin={onLogin} />}
          />
          <Route path="/country" element={<Country />}>
            <Route path="0" element={<France />} />
            <Route path="1" element={<Us />} />
            <Route path="2" element={<Uk />} />
            <Route path="3" element={<Indonesia />} />
            <Route path="4" element={<Australia />} />
            <Route path="5" element={<SouthKorea />} />
          </Route>
          <Route path="/region" element={<Region />} />
          <Route path="/city" element={<City />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/distance" element={<Distance />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
