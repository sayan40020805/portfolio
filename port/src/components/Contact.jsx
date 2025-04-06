import React from "react";
import "../styles/Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
        Let’s connect and build something great!
      </p>

      <div className="contact-icons">
        <a
          href="tel:+917003099216"
          target="_blank"
          rel="noreferrer"
          title="Call Me"
        >
          <FaPhone className="icon" />
        </a>
        <a
          href="mailto:ssayanmjhi410@example.com"
          target="_blank"
          rel="noreferrer"
          title="Email Me"
        >
          <FaEnvelope className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sayan-majhi-04660228a"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.facebook.com/sayan.majhi.94617"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://wa.me/917003099216"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp"
        >
          <FaWhatsapp className="icon" />
        </a>
        <a
          href="https://www.instagram.com/sayan_058?igsh=dW4wc2I0ZWRuenM5"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
