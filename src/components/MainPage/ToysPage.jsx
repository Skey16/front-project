import React from "react"
import ToysCart from "./ToysCart"
import "./style.css"

const ToysPage = ({ addToCart, shopItems, search }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Toys</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ToysCart addToCart={addToCart} shopItems={shopItems} search={search}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ToysPage