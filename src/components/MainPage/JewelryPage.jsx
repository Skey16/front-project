import React from "react";
import JewelryCart from "./JewelryCart";
import "./style.css";

const JewelryPage = ({ addToCart, shopItems, search }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Belleza y Cuidado Personal</h2>
              </div>
            </div>
            <div className="product-content  grid1">
              <JewelryCart
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

export default JewelryPage;
