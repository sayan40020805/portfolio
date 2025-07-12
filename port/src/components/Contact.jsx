import React from "react";
import "../styles/Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank You");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
        Let’s connect and build something great!
      </p>

      {/* Contact Icons */}
      <div className="contact-icons">
        <a href="tel:+917003099216" target="_blank" rel="noreferrer" title="Call Me">
          <FaPhone className="icon" />
        </a>
        <a href="mailto:ssayanmjhi410@example.com" target="_blank" rel="noreferrer" title="Email Me">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/sayan-majhi-04660228a" target="_blank" rel="noreferrer" title="LinkedIn">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.facebook.com/sayan.majhi.94617" target="_blank" rel="noreferrer" title="Facebook">
          <FaFacebook className="icon" />
        </a>
        <a href="https://wa.me/917003099216" target="_blank" rel="noreferrer" title="WhatsApp">
          <FaWhatsapp className="icon" />
        </a>
        <a href="https://www.instagram.com/sayan_058?igsh=dW4wc2I0ZWRuenM5" target="_blank" rel="noreferrer" title="Instagram">
          <FaInstagram className="icon" />
        </a>
        <a href="https://github.com/Sayan23-sketch" target="_blank" rel="noreferrer" title="GitHub">
          <FaGithub className="icon" />
        </a>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email or Phone" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
