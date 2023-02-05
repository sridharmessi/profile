import React from "react";
import "./portfolio.css";
import port from "../../pics/port.png";
const App = () => {
  return (
    <section id="portfolio">
      <h5>My portfolio</h5>
      <h2>Works and certificates</h2>

      <div className="container_portfolio">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={port} alt="port" className="port_img" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/" className="btn">
              github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={port} alt="port" className="port_img" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/" className="btn">
              github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={port} alt="port" className="port_img" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/" className="btn">
              github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default App;
