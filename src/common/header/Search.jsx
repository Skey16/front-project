import React from "react"
import logo from "../../components/assets/images/ambar.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem, setSearch }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' name="search" onChange={handleChange}/>
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <Link to='/login'>
              <i className='fa fa-user icon-circle'></i>
            </Link>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
