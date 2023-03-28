import React from 'react'
//import Sidenav from './Sidenav'
import{Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import Settings from './pages/Settings'

export default function App() {
  return (
  <>
   <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Home />}></Route>
       <Route path="/products" exact element={<Products />}></Route>
       <Route path="/settings" exact element={<Settings />}></Route>
     </Routes>
   </BrowserRouter>
  </>
  )
}

