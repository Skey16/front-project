import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import CheckoutPage from "./common/Cart/CheckoutPage"
import AccessoriesPage from "./components/MainPage/AccessoriesPage"
import ArtPage from "./components/MainPage/ArtPage"
import CeramicsPage from "./components/MainPage/CeramicsPage"
import DecorationsPage from "./components/MainPage/DecorationsPage"
import JewelryPage from "./components/MainPage/JewelryPage"
import TextilesPage from "./components/MainPage/TextilesPage"
import ToysPage from "./components/MainPage/ToysPage"

function App() {
 
  const { shopItems } = Sdata
  
  
  const [CartItem, setCartItem] = useState([])
  const [search, setSearch] = useState('')

  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const deleteAll = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id))
  }

  const clearCart = () => {
    setCartItem();
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} setSearch={setSearch}/>
        <Switch>
          <Route path='/' exact>
            <Pages  addToCart={addToCart} shopItems={shopItems} search={search}/>
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} deleteAll={deleteAll}/>
          </Route>
          <Route path='/checkout-page' exact>
            <CheckoutPage clearCart={clearCart}/>
          </Route>
          <Route path='/accessories-page' exact>
            <AccessoriesPage shopItems={shopItems} addToCart={addToCart} search={search}/>
          </Route>
          <Route path='/art-page' exact>
            <ArtPage shopItems={shopItems} addToCart={addToCart} search={search}/>
          </Route>
          <Route path='/ceramics-page' exact>
            <CeramicsPage shopItems={shopItems} addToCart={addToCart} search={search}/>
          </Route>
          <Route path='/decorations-page' exact>
            <DecorationsPage shopItems={shopItems} addToCart={addToCart} search={search}/>
          </Route>
          <Route path='/jewelry-page' exact>
            <JewelryPage shopItems={shopItems} addToCart={addToCart} search={search}/>
          </Route>
          <Route path='/textiles-page' exact>
            <TextilesPage shopItems={shopItems} addToCart={addToCart} search={search}/>
          </Route>
          <Route path='/toys-page' exact>
            <ToysPage shopItems={shopItems} addToCart={addToCart} search={search}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
