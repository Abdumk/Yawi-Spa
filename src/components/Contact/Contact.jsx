import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Title Section */}
        <div className="contact-title">
        <div className="logo-title">
<h1 className="banner-main">Contact Us</h1>

	</div>
          <p>Need help? Get in touch with us for more information or assistance.</p>
          <p className="quote">"Need instant support? Use the chat button in the bottom-right corner."</p>
        </div>

        {/* Contact Info Grid */}
        <div className="contact-grid">
          <div className="contact-card">
            <i className="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p>4128 Ashmere Cir, Montclair, VA 22025, USA</p>
          </div>

          <div className="contact-card">
            <i className="bi bi-map"></i>
            <h3>Service Area</h3>
            <p>Alexandria, VA · Fairfax, VA · Washington, DC · Maryland</p>
          </div>

          <div className="contact-card">
            <i className="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>
              <strong>Phone:</strong> <a href="tel:+15713069039">+251 943-53-44-44</a>
            </p>
          </div>

          <div className="contact-card">
            <i className="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>
              <strong>Email:</strong> <a href="mailto:admin@nilefinancialservices.com">admin@nilefinancialservices.com</a>
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24857.07233841807!2d-77.32243756748917!3d38.852288612330796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e96394b91cd%3A0x72326e785448640!2sFairfax%2C%20VA%2C%20USA!5e0!3m2!1sen!2set!4v1738005199393!5m2!1sen!2set"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
     <br/>
     <br/>  
   </> 

  );
};

export default Contact;
