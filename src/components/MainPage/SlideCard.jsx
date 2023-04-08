import React from "react"
import Sdata from "../shops/Sdata";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom";

const SlideCard = ({index}) => {
  const topProducts = Sdata.shopItems
    .sort((a, b) => b.like - a.like) // ordena los productos por número de likes de mayor a menor
    .slice(0, 4); // toma los cuatro primeros productos de la lista ordenada

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings} >
        {topProducts.map((product) => {
          return (
            <>
              <div className='box d_flex top' key={product.id}>
              <div className="left">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                {product.productType === "textil" ? (
                  <Link to='/textiles-page'>
                    <button className='btn-primary'>{product.productType}</button>
                  </Link>
                ) : product.productType === "toy" ? (
                  <Link to='/toys-page'>
                    <button className='btn-primary'>{product.productType}</button>
                  </Link>
                ) : product.productType === "art" ? (
                  <Link to='/art-page'>
                    <button className='btn-primary'>{product.productType}</button>
                  </Link>
                ): product.productType === "accessory" ? (
                  <Link to='/accessories-page'>
                    <button className='btn-primary'>{product.productType}</button>
                  </Link>
                ) : product.productType === "decoration" ? (
                  <Link to='/decorations-page'>
                    <button className='btn-primary'>{product.productType}</button>
                  </Link>
                ) : product.productType === "jewelry" ? (
                  <Link to='/jewelry-page'>
                    <button className='btn-primary'>{product.productType}</button>
                  </Link>
                ) : (
                  <Link to='/ceramics-page'>
                    <button className='btn-primary'>Ceramics</button>
                  </Link>
                )}
              </div>
                <div className='right'>
                  <img src={product.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard