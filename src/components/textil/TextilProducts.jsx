import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";

const TextilProducts = ({ search }) => {
  const [listaFiltada, setListaFiltrada] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  const getProducts = async () => {
    const response = await fetch("http://3.227.245.21:8001/api/products");
    const data = await response.json();
    return data;
  };

  const filtrar = async (search) => {
    const data = await getProducts();
    const filtrado = data.filter(
      (producto) =>
        (producto.name.toLowerCase().includes(search.toLowerCase()) &&
          producto.product_type === "peliculas") ||
        (producto.name.toLowerCase().includes(search.toLowerCase()) &&
          producto.product_type === "musica")
    );
    setListaFiltrada(filtrado);
  };

  useEffect(() => {
    filtrar(search);
    console.log(listaFiltada);
  }, [search]);

  return (
    <>
      <Slider {...settings}>
        {listaFiltada.map((value, index) => (
          <div key={index}>
            <div className="box product">
              <div className="img">
                <img src={value.image} alt="" width="100%" />
              </div>
              <h4>{value.name}</h4>
              <span>{value.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default TextilProducts;
