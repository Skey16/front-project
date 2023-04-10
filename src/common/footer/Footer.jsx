import React from "react";
import "./style.css";
import logo from "../../components/assets/images/ambar.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <img className="logo" src={logo} alt="" />
            <p>
              Ambar's es una tienda en línea que ofrece una amplia variedad de
              productos para el hogar, tecnología, moda y belleza. Nos
              esforzamos por ofrecer los precios más competitivos y una
              experiencia de compra en línea conveniente y segura. Nuestra
              misión es satisfacer a nuestros clientes con productos de calidad
              y un servicio al cliente excepcional. ¡Gracias por elegir Ambar's
              para sus compras en línea!
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>{" "}
          <div className="box">
            <h2>Sobre Nosotros</h2>
            <ul>
              <li>Carreras</li>
              <li>Nuestras Tiendas</li>
              <li>Nuestra Causa</li>
              <li>Términos y Condiciones</li>
              <li>Política de Privacidad</li>
            </ul>
          </div>
          <div className="box">
            <h2>Servicio al Cliente</h2>
            <ul>
              <li>Centro de Ayuda</li>
              <li>Cómo Comprar</li>
              <li>Rastrea tu Orden</li>
              <li>Compras Corporativas y a Granel</li>
              <li>Devoluciones y Reembolsos</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contacto</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, Estados Unidos{" "}
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Teléfono: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
