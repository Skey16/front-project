import React from 'react'
//import Sidenav from './Sidenav'
import{Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import Settings from './pages/Settings'
import Users from './pages/Users'

export default function App() {
  return (
  <>
   <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Home />}></Route>
       <Route path="/products" exact element={<Products />}></Route>
       <Route path="/settings" exact element={<Settings />}></Route>
       <Route path="/users" exact element={<Users />}></Route>
     </Routes>
   </BrowserRouter>
  </>
  )
}

