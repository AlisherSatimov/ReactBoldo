import Header from "./Header";
import { Link } from "react-router-dom";

function Showcase() {
  return (
    <div className="main-showcase">
      <img src="/showcase-ellipse.png" className="showcase-ellipse" alt="" />
      <Header />
      <div className="container ">
        <div className="showcase-wrapper">
          <div className="showcase-text">
            <h1 className="showcase-title">
              Save time by building <br /> fast with Boldo Template{" "}
            </h1>
            <p className="showcase-text">
              Funding handshake buyer business-to-business metrics iPad
              partnership. <br /> First mover advantage innovator success
              deployment non-disclosure.
            </p>
            <div className="showcase-btns">
              <Link to="/" className="primary-btn">
                Buy templetes
              </Link>
              <Link to="/" className="secondary-btn">
                Explore
              </Link>
            </div>
          </div>
          <div className="showcase-info">
            <img src="/showcase-1.png" className="showcase-img1" alt="" />
            <img src="/showcase-2.png" alt="" />
            <img src="/showcase-3.png" alt="" />
          </div>
        </div>

        <div className="partners">
          <img src="/Logo.png" alt="" />
          <img src="/partners-presto.png" alt="" />
          <img src="/Logo.png" alt="" />
          <img src="/partners-presto.png" alt="" />
          <img src="/Logo.png" alt="" />
          <img src="/partners-presto.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
