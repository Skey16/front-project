import React from "react";
import AccessoriesProducts from "./AccessoriesProducts";
import "../style.css";

const Accessories = ({ search }) => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Ropa y Accesorios</h2>
            </div>
          </div>
          <AccessoriesProducts search={search} />
        </div>
      </section>
    </>
  );
};

export default Accessories;
