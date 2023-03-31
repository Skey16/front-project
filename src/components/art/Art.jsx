import React from "react"
import ArtProducts from './ArtProducts'
import "../style.css"

const Art = ({ search }) => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Art</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <ArtProducts search={search}/>
        </div>
      </section>
    </>
  )
}

export default Art