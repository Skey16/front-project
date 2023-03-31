import React from "react"
import { Link } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Accessories",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Art",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Ceramics",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Decorations",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Jewelry",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Textiles",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Toys",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
              <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
