import React from "react"
import TextilProducts from "../textil/TextilProducts"
import "../style.css"

const Textil = ({ search }) => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Textiles</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <TextilProducts search={search}/>
        </div>
      </section>
    </>
  )
}

export default Textil