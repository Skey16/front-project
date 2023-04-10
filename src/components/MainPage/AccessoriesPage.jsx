import React from "react";
import AccessoriesCart from "./AccessoriesCart";
import "./style.css";

const AccessoriesPage = ({ addToCart, shopItems, search }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Ropa y Accesorios</h2>
              </div>
            </div>
            <div className="product-content  grid1">
              <AccessoriesCart
                addToCart={addToCart}
                shopItems={shopItems}
                search={search}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessoriesPage;
