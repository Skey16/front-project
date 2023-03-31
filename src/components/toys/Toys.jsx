import React from "react"
import ToysProducts from './ToysProducts'
import "../style.css"

const Toys = ({ search }) => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Toys</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <ToysProducts search={search}/>
        </div>
      </section>
    </>
  )
}

export default Toys