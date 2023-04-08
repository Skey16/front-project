import React, { useState } from "react";
import "./style.css";

const JewelryCart = ({ shopItems, addToCart, search }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems
        .filter(
          (item) =>
            item.productType === "jewelry" &&
            item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item, index) => (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <img src={item.cover} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
                <div className="info">
                  <p className="description">{item.description}</p>
                </div>
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                <div className="rate"></div>
                <div className="price">
                  <h4>${item.price}.00 </h4>
                  <button onClick={() => addToCart(item)}>
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

export default JewelryCart;
