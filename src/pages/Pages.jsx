import React from "react"
import Home from "../components/MainPage/Home"
import Accessories from "../components/accessories/Accessories"
import Art from "../components/art/Art"
import Ceramics from "../components/ceramics/Ceramics"
import Decorations from "../components/decorations/Decorations"
import Jewelry from "../components/jewelry/Jewelry"
import Textil from "../components/textil//Textil"


import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"
import Toys from "../components/toys/Toys"


const Pages = ({ productItems, addToCart, CartItem, shopItems, search }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Accessories productItems={productItems} addToCart={addToCart} search={search} shopItems={shopItems} />
      <Art productItems={productItems} addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Ceramics productItems={productItems} addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Decorations productItems={productItems} addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Jewelry productItems={productItems} addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Textil productItems={productItems} addToCart={addToCart} search={search} shopItems={shopItems}/>
      <Toys productItems={productItems} addToCart={addToCart} search={search} shopItems={shopItems}/>
       <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </>
  )
}

export default Pages