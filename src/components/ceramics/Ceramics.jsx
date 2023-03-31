import React from "react"
import CeramicsProducts from './CeramicsProducts'
import "../style.css"

const Ceramics = ({ search }) => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Ceramics</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <CeramicsProducts search={search}/>
        </div>
      </section>
    </>
  )
}

export default Ceramics