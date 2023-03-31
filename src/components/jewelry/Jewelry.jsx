import React from "react"
import JewelryProducts from "../jewelry/JewelryProducts"
import "../style.css"

const Jewelry = ({ search }) => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Jewelry</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <JewelryProducts search={search}/>
        </div>
      </section>
    </>
  )
}

export default Jewelry