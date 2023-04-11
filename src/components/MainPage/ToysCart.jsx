import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./style.css";

const CeramicsCart = ({ shopItems, addToCart, search }) => {
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const [likedProducts, setLikedProducts] = useState([]);

  const [isLiked, setIsLiked] = useState(false);

  const like = async (id) => {
    const response = await fetch(
      `http://3.227.245.21:8001/api/products/${id}/like`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 429) {
      Swal.fire(
        "¡Error!",
        "Se ha alcanzado el límite de solicitudes. Inténtalo más tarde.",
        "error"
      );
      return;
    }

    setListaFiltrada(
      listaFiltrada.map((p = listaFiltrada) => {
        if (p.id === id) {
          p.likes++;
        }

        return p;
      })
    );

    getProducts();
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
        producto.name.toLowerCase().includes(search.toLowerCase()) &&
        producto.product_type === "juguetes"
    );
    setListaFiltrada(filtrado);
  };

  const handleLike = (productId) => {
    const likedCount = likedProducts.filter((id) => id === productId).length;
    if (likedCount < 1) {
      setLikedProducts([...likedProducts, productId]);
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    filtrar(search);
  }, [search]);

  return (
    <>
      {listaFiltrada.map((value, index) => (
        <div className="box" key={index}>
          <div className="product mtop">
            <div className="img">
              <img src={value.image} alt="" />
              <div className="product-like">
                <label>{value.likes}</label>
                <br />
                <i
                  className={`fa-regular fa-heart ${
                    likedProducts.includes(value.id) ? "liked" : ""
                  } ${isLiked ? "clicked" : ""}`}
                  onClick={() => like(value.id)}
                ></i>
              </div>
              <div className="info">
                <p className="description">{value.description}</p>
              </div>
            </div>
            <div className="product-details">
              <br />
              <h3>
                <b>{value.name}</b>
              </h3>
              <div className="price">
                <h4>${value.price}.00 </h4>
                <button onClick={() => addToCart(value)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CeramicsCart;
