import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart, shopItems, search }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Mobile Phones</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} search={search}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop