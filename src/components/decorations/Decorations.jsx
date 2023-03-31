import React from "react"
import DecorationsProducts from './DecorationsProducts'
import "../style.css"

const Decoration = ({ search }) => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Decorations</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <DecorationsProducts search={search}/>
        </div>
      </section>
    </>
  )
}

export default Decoration