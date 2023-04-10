import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +88888 8888 8888</label>
            <i className="fa fa-envelope"></i>
            <label>soporte@ambar.com</label>
          </div>
          <div className="right row RText">
            <label>ambar</label>
            <label>¿Necesitas ayuda?</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
