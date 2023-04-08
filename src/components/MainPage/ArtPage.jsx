import React from "react"
import ArtCart from "./ArtCart"
import "./style.css"

const ArtPage = ({ addToCart, shopItems, search }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Art</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ArtCart addToCart={addToCart} shopItems={shopItems} search={search}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArtPage