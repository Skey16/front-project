import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cart = ({ CartItem, addToCart, decreaseQty, deleteAll }) => {
  // Paso 7: calcular el total de los artículos
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // total de la cantidad de productos
  return (
    <>
      <sección className="artículos-del-carrito">
        <div className="container d_flex">
          {/* si no hay ningún artículo en nuestro carrito, no lo mostramos */}
          <div className="detalles-del-carrito">
            {CartItem.length === 0 && (
              <h1 className="no-items product">
                No se han agregado artículos al carrito
              </h1>
            )}

            {/* aquí mostramos los elementos del carrito */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="lista-del-carrito product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="detalles-del-carrito">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="funciones-del-carrito">
                    <div className="eliminar-del-carrito">
                      <button
                        className="eliminar-del-carrito"
                        onClick={() => deleteAll(item)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* paso 5 
                aumentar o disminuir la cantidad del producto
                */}
                    <div className="control-del-carrito d_flex">
                      <button
                        className="aumentar-del-carrito"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="disminuir-del-carrito"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="precio-del-artículo"></div>
                </div>
              );
            })}
          </div>

          <div className="total-del-carrito product">
            <h2>Resumen del carrito</h2>
            <div className=" d_flex">
              <h4>Precio total:</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            <div>
              {CartItem.length === 0 ? (
                <button className="btn-secundary" disabled>
                  Comprar ahora
                </button>
              ) : (
                <Link a="/pagina-de-pago">
                  <button className="btn-primary">Comprar ahora</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </sección>
    </>
  );
};

export default Cart;
