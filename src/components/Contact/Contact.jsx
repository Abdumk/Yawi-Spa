import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Title Section */}
        <br/>
        <br/>

        <div className="contact-title">
        <div className="logo-title">
<h1 className="banner-main">Contact Us</h1>

	</div>
          <p>Need help? Get in touch with us for more information or assistance.</p>
          
          <p className="quote">
  <strong>Need instant support?</strong> Call us now!
</p>

        </div>

        {/* Contact Info Grid */}
        <div className="contact-grid">
          <div className="contact-card">
            <i className="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p>Bole</p>
          </div>

          <div className="contact-card">
            <i className="bi bi-map"></i>
            <h3>Service Area</h3>
            <p>Addis Ababa, Ethiopia</p>
<p>
4 kilo,&nbsp;&nbsp;&nbsp;Megenagna,&nbsp;&nbsp;&nbsp;Gotera  
</p>
          </div>

          <div className="contact-card">
            <i className="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>
              <strong>Phone:</strong> <a href="tel:+251 943-53-44-44">+251 943-53-44-44</a>
            </p>
          </div>

          <div className="contact-card">
            <i className="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>
              <strong>Email:</strong> <a href="mailto:yawispa4353@gmail.com">yawispa4353@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-map">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d585.8183790307232!2d38.764964570403045!3d8.981293856019384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d8.9812383!2d38.7651575!4m3!3m2!1d8.981255899999999!2d38.7651671!5e0!3m2!1sen!2set!4v1742777101137!5m2!1sen!2set" 
    width="600" 
    height="450" 
    style={{border: 0}} 
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
