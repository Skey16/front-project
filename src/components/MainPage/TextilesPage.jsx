import React from "react"
import TextilCart from "./TextilCart"
import "./style.css"

const TextilesPage = ({ addToCart, shopItems, search }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Textiles</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <TextilCart addToCart={addToCart} shopItems={shopItems} search={search}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TextilesPage