import React from "react";
import "./About.css";
import img22 from "../../assets/images/12.jpg";
import img1 from "../../assets/images/backmassa.jpg";
import img2 from "../../assets/images/hhotstone.jpg";
import img3 from "../../assets/images/THAI-MASSAGE.jpg";
import img6 from "../../assets/images/hotstone.jpg";
import img4 from "../../assets/images/backdeepp.jpg";
import img5 from "../../assets/images/headmassagee.jpg";
import { Link } from "react-router-dom";
import Testimonials from "./../Testimonials/Testimonials";

const About = () => {
  const staffImages = { img1, img2, img3, img4, img5, img6 };

  return (
    <>
      <div className="c">
      <br />
      <br />
        <div className="col-md-9 header-right">
          <div className="logo">
            <h1 className="banner-main">About Us</h1>
          </div>
         
          <p className="massage-service-yawi-spa">
          We provide door-to-door massage service in hotels and homes for your
          convenience.
        </p>
          {/* <div className="banner1"></div> */}
        </div>
       
        {/* About Section */}
        <section id="about1" className="about-section light-background">
          {/* Section Title */}
          <div className="container">
            <div className="row gy-3">
              {/* Left Side: Image */}
              <div
                className="col-lg-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={img2}
                  alt="About Us"
                  className="img-fluid about-image"
                />
              </div>

              {/* Right Side: Text Content */}
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="about-content ps-0 ps-lg-3">
                  <h3>Introduction</h3>
                  <p className="fst-italic">
                    Welcome to Yawi Spa. We are dedicated to providing
                    exceptional massage therapies to help you achieve ultimate
                    relaxation and well-being. Our experienced therapists are
                    committed to delivering high-quality services tailored to
                    your needs.
                  </p>
                  <h3>Our Purpose</h3>
                  <p className="fst-italic">
                    At Yawi Spa, our mission is to offer a peaceful environment
                    where you can rejuvenate your body and mind. Our purpose is
                    to provide a holistic approach to wellness through various
                    massage therapies designed to alleviate stress and promote
                    overall well-being.
                  </p>
                  <ul>
                    <li>
                      <div>
                        <strong>Deep Tissue Massage</strong> deeper layers of
                        muscle to relieve chronic tension and pain.
                      </div>
                    </li>
                    <li>
                      <div>
                        <strong>Swedish Massage</strong> A relaxing full-body
                        massage using long strokes and gentle pressure.
                      </div>
                    </li>
                    <li>
                      <div>
                        <strong>Hot Stone Massage</strong> Heated stones are
                        used to relax and loosen muscles, promoting healing.
                      </div>
                    </li>
                    <li>
                      <div>
                        <strong>Aromatherapy</strong> Relaxing massage combined
                        with essential oils for a calming experience.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about1" className="about section light-background">
          {/* Section Title */}
          <div className="container" style={{ minHeight: "300px" }}>
            {" "}
            {/* Set a higher minHeight for more space */}
            <div className="row gy-3">
              {/* Left Side: Text Content (Why Choose Us) */}
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="about-content ps-0 ps-lg-3">
                  <h3>Why Choose Us?</h3>
                  <br />
                  <br />

                  <ul>
                    <li>
                      <div>
                        <strong>5 Years of Professional Experience</strong> in
                        massage therapy.
                      </div>
                    </li>
                    <li>
                      <div>
                        <strong>Convenient Service</strong> – We bring
                        relaxation to your location.
                      </div>
                    </li>
                    <li>
                      <div>
                        <strong>Specialized Services</strong> – Including
                        pregnancy, baby care, and bridal shower massages.
                      </div>
                    </li>
                    <li>
                      <div>
                        <strong>Exclusive Discounts</strong> – Senior clients
                        enjoy continuous care packages.
                      </div>
                    </li>
                    <li>
                      <div>
                        <strong>Wellness Support</strong> – Expert advice on
                        diet, sleep, and relaxation techniques.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Text Content (Our Philosophy & Values) */}
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="about-content ps-0 ps-lg-3">
                  <h3>Our Values</h3>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <strong>Relaxation First</strong> – Creating a peaceful
                      atmosphere for you to unwind.
                    </li>
                    <li>
                      <strong>Customer Satisfaction</strong> – Your well-being
                      is our priority.
                    </li>
                    <li>
                      <strong>Personalized Treatments</strong> – Tailored to
                      your specific needs, body type, and health conditions.
                    </li>
                    <li>
                      <strong>Wellness Guidance</strong> – Advice on diet based
                      on age and blood type, and best sleep positions for better
                      rest.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section id="hours" className="about section light-background">
          {/* Section Title */}
          <div
            className="container d-flex justify-content-center align-items-center"
            style={{ minHeight: "100px" }}
          >
            <div className="row gy-3">
              {/* Centered Text Content */}
              <div
                className="col-12 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="about-content">
                  <h3>Opening Hours</h3>
                  <p className="about-text">
                    ⏰ <strong>Opening Hours:</strong>
                  </p>
                  <ul className="about-list">
                    <li>
                      <strong>Monday – Friday:</strong> 12:00 AM – 2:00 PM
                    </li>
                    <li>
                      <strong>Saturday – Sunday:</strong> 12:00 AM – 2:00 PM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
