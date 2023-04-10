import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="category">
      <div className="box f_flex">
        <Link to="/accessories-page">
          <img src="./images/category/cat1.png" />
          <span>Ropa y Accesorios</span>
        </Link>
      </div>
      <div className="box f_flex">
        <Link to="/art-page">
          <img src="./images/category/cat2.png" />
          <span>Electrónica</span>
        </Link>
      </div>
      <div className="box f_flex">
        <Link to="/ceramics-page">
          <img src="./images/category/cat3.png" />
          <span>Deporte y Aire Libre</span>
        </Link>
      </div>
      <div className="box f_flex">
        <Link to="/decorations-page">
          <img src="./images/category/cat5.png" />
          <span>Hogar y Jardín</span>
        </Link>
      </div>
      <div className="box f_flex">
        <Link to="/jewelry-page">
          <img src="./images/category/cat4.png" />
          <span>Belleza y Cuidado Personal</span>
        </Link>
      </div>
      <div className="box f_flex">
        <Link to="/textiles-page">
          <img src="./images/category/cat6.png" />
          <span>Peliculas y Series de TV</span>
        </Link>
      </div>
      <div className="box f_flex">
        <Link to="/toys-page">
          <img src="./images/category/cat7.png" />
          <span>Juguetes y Juegos</span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
