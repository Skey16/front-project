import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora fugit ullam repellendus rerum voluptatem, doloribus voluptate architecto excepturi? Quae."

    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora fugit ullam repellendus rerum voluptatem, doloribus voluptate architecto excepturi? Quae."
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora fugit ullam repellendus rerum voluptatem, doloribus voluptate architecto excepturi? Quae."
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora fugit ullam repellendus rerum voluptatem, doloribus voluptate architecto excepturi? Quae."
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora fugit ullam repellendus rerum voluptatem, doloribus voluptate architecto excepturi? Quae."
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora fugit ullam repellendus rerum voluptatem, doloribus voluptate architecto excepturi? Quae."
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg