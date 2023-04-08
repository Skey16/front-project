import React, { useState } from "react";
import "./style.css";

const TextilCart = ({ shopItems, addToCart, search }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (productId) => {
    const likedCount = likedProducts.filter((id) => id === productId).length;
    if (likedCount < 1) {
      setLikedProducts([...likedProducts, productId]);
    }
    setIsLiked(!isLiked);
  };

  return (
    <>
      {shopItems
        .filter(
          (item) =>
            item.productType === "textil" &&
            item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item, index) => (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <img src={item.cover} alt="" />
                <div className="product-like">
                  <label>{likedProducts.filter((id) => id === item.id).length}</label> <br />
                  <i className={`fa-regular fa-heart ${likedProducts.includes(item.id) ? 'liked' : ''} ${isLiked ? 'clicked' : ''}`} onClick={() => handleLike(item.id)}></i>
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

export default TextilCart;
