import React from "react"
import DecorationsCart from "./DecorationsCart"
import "./style.css"

const DecorationsPage = ({ addToCart, shopItems, search }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Decorations</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <DecorationsCart addToCart={addToCart} shopItems={shopItems} search={search}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DecorationsPage