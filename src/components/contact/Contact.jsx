import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRef } from "react";

import emailjs from "emailjs-com";

const App = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ug4ouap",
        "template_gk0eox4",
        form.current,
        "Sdf_f1KpSdEOT533-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2> Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <h5> Talk to Me</h5>
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-ic" />
            <h4> E-mail</h4>
            <h5>sridhar.d2040@gmail.com</h5>
            <a href="mailto:sridhar.d2040@gmail.com" target="_blank">
              Write me <AiOutlineArrowRight className="arrow" />
            </a>
          </article>
          <article className="contact_option">
            <ImWhatsapp className="contact_option-ic" />
            <h4> WhatsApp</h4>
            <h5>6379426473</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6379426473"
              target="_blank"
            >
              Write me <AiOutlineArrowRight className="arrow" />
            </a>
          </article>
          <article className="contact_option">
            <GrInstagram className="contact_option-ic" />
            <h4>linkedin </h4>
            <h5> sridhar.d</h5>
            <a
              href="https://www.linkedin.com/in/sridhar-d-69ba63203/"
              target="_blank"
            >
              Write Me <AiOutlineArrowRight className="arrow" />
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default App;
