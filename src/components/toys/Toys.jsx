import React from "react";
import ToysProducts from "./ToysProducts";
import "../style.css";

const Toys = ({ search }) => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Juguetes y Juegos</h2>
            </div>
          </div>
          <ToysProducts search={search} />
        </div>
      </section>
    </>
  );
};

export default Toys;
