import React from "react";
import DecorationsProducts from "./DecorationsProducts";
import "../style.css";

const Decoration = ({ search }) => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Hogar y Jardín</h2>
            </div>
          </div>
          <DecorationsProducts search={search} />
        </div>
      </section>
    </>
  );
};

export default Decoration;
