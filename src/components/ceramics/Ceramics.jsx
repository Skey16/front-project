import React from "react";
import CeramicsProducts from "./CeramicsProducts";
import "../style.css";

const Ceramics = ({ search }) => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Deporte y Aire Libre</h2>
            </div>
          </div>
          <CeramicsProducts search={search} />
        </div>
      </section>
    </>
  );
};

export default Ceramics;
