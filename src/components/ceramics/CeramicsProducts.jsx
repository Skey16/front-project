import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sdata from "../shops/Sdata"
import "../style.css"

const CeramicsProducts = ({search}) => {
  const [listaFiltada, setListaFiltrada] = useState([])

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  }

  const filtrar = (search) => {
    const filtrado = Sdata.shopItems.filter(producto =>
      producto.name.toLowerCase().includes(search.toLowerCase()) &&
      producto.productType === "ceramic"
    );
    setListaFiltrada(filtrado);
  };

  useEffect(() => {
    filtrar(search)
    console.log(listaFiltada)
  }, [search])
  
  return (
    <>
      <Slider {...settings}>
        {listaFiltada.map((value, index) => (
          <div key={index}>
          <div className='box product' >
            <div className='img'>
              <img src={value.cover} alt='' width='100%' />
            </div>
            <h4>{value.name}</h4>
            <span>{value.price}</span>
          </div>
        </div>
        ))}
      </Slider>
    </>
  )
}
export default CeramicsProducts