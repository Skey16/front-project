import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, setSearch }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} setSearch={setSearch} />
      <Navbar />
    </>
  )
}

export default Header
