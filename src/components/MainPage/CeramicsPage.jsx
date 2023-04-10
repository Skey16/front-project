import React from "react";
import CeramicsCart from "./CeramicsCart";
import "./style.css";

const CeramicsPage = ({ addToCart, shopItems, search }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Deporte y Aire Libre</h2>
              </div>
            </div>
            <div className="product-content  grid1">
              <CeramicsCart
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

export default CeramicsPage;
