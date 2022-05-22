import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MyHeader from './components/MyHeader'
import Category from './components/Category'
import Country from './components/Country'
import Region from './components/Region'
import City from './components/City'
import Sale from './components/Sale'
import Distance from './components/Distance'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <h1 className="title">Where Do You want to Go? </h1>
        <Category />
        <Routes>
          <Route path="/country" element={<Country />} />
          <Route path="/region" element={<Region />} />
          <Route path="/city" element={<City />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/distance" element={<Distance />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
