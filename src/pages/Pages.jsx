import React from "react"
import Home from "../components/MainPage/Home"
import Accessories from "../components/accessories/Accessories"
import Art from "../components/art/Art"
import Ceramics from "../components/ceramics/Ceramics"
import Decorations from "../components/decorations/Decorations"
import Jewelry from "../components/jewelry/Jewelry"
import Textil from "../components/textil//Textil"
import Wrapper from "../components/wrapper/Wrapper"
import Toys from "../components/toys/Toys"


const Pages = ({ addToCart, CartItem, shopItems, search }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Accessories  addToCart={addToCart} search={search} shopItems={shopItems} />
      <Art  addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Ceramics  addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Decorations addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Jewelry addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Textil addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Toys addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Wrapper />
    </>
  )
}

export default Pages