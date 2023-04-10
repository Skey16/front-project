import React from "react";
import JewelryProducts from "../jewelry/JewelryProducts";
import "../style.css";

const Jewelry = ({ search }) => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Belleza y Cuidado Personal</h2>
            </div>
          </div>
          <JewelryProducts search={search} />
        </div>
      </section>
    </>
  );
};

export default Jewelry;
