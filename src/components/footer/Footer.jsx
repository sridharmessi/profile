import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const App = () => {
  return (
    <footer>
      D SRIDHAR
      <ul className="permalinks">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact"> contact</a>
        </li>
      </ul>
      <div className="footer_social">
        <a href="https://www.linkedin.com/in/sridhar-d-69ba63203/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/sridharmessi">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com">
          <BsInstagram />
        </a>
      </div>
      <div className="copyright">
        <small>&copy; sridhar. All rights reserved</small>
      </div>
    </footer>
  );
};
export default App;
