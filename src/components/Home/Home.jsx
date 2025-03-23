import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import img1 from "../../../public/assets/image/rezzzzzzzzz.jpg";
import img2 from "/assets/image/IMG-20250308-WA0005.jpg";
import img3 from "/assets/image/IMG-20250308-WA0006.jpg";
import img4 from "../../assets/images/8.jpg";

import img5 from "../../assets/images/3.jpg";
import Carousel from "../carousel/Carousel";

import backgroundImage from "/assets/image/19.jpg";

const images = [img1, img2, img4];

const containerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function Home() {
  return (
    <div>
      <div className="container__heading">
        <div className="subcol1"></div>
        <div className="subcol2">
          <div className="subcol3"></div>
        </div>
      </div>

      <div className="container__heading">
        <div className="introduction">
          <div className="homecontainer">
            <div className="carousel-container-home">
              <div className="carousel-text-home">
                <h1 id="yourself">Make Time For Yourself.</h1>
                <h1 id="welcome">Welcome to Yawi Massage</h1>
              </div>
              <Carousel images={images} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-md-9 header-right">
      <div className="logo">
        <a href="index.html">
          <h1>Classy</h1>
        </a>
      </div>
      <div className="banner">
        <div className="header-slider">
          <div className="slider">
            <div className="callbacks_container">
              <ul className="rslides" id="slider">
                <li>
                  <img src={img1} className="img-responsive" alt="" />
                  <div className="caption">
                    <h2>Maecenas malesuad elit lectus</h2>
                  </div>
                </li>
                <li>
                  <img src={img2} className="img-responsive" alt="" />
                  <div className="caption">
                    <h2>Curabitur et ligula. Ut molestie</h2>
                  </div>
                </li>
                <li>
                  <img src={img3} className="img-responsive" alt="" />
                  <div className="caption">
                    <h2>Etiam ullamcorper. Suspendisse</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <main>
        <div className="container__content" style={containerStyle}>
          <div className="subcol1"></div>
          <div className="subcol2">
            <div className="subbelow1">
              <div className="inner1">
                <h1 className="let">Let Us Take Care of You!</h1>
                <ul>
                  <li>
                    <p className="visit">
                      Choosing time for a spa visit also means improving your
                      health.
                    </p>
                  </li>
                  <li>
                    <p className="visit">
                      All massages and facials are given by professionally
                      trained staff members.
                    </p>
                  </li>
                  <li>
                    <p className="visit">
                      Our goal is to provide a delightful experience. Visit our
                      services page to learn more.
                    </p>
                  </li>
                </ul>
                <div className="client">{/* Photo inserted here */}</div>
              </div>
              {/* <div className="inner2">
            <div className="inner2-col">
              <div>
                <a className="serviceimage" href="services.html">
                  <h3>View Services</h3>
                </a>
              </div>
            </div>
            <div className="inner2-col">
              <div>
                <a className="staffimage" href="staff.html">
                  <h3>View Staff</h3>
                </a>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>

        <div className="container__content-blurred">
          <div className="subcol1"></div>
          <div className="benefits">
            <h1 id="benefits-title">
              🍀🌿🌺Massage &amp; Facial Benefits🌺🌿🍀
            </h1>
            <div className="benefits__container">
              <div className="flex-item1">
                <h4>Relieves Stress</h4>
              </div>
              <div className="flex-item1">
                <h4>Strengthen Immune System</h4>
              </div>
              <div className="flex-item1">
                <h4>Relaxes Muscles</h4>
              </div>
              <div className="flex-item1">
                <h4>Post Operative Rehab</h4>
              </div>
            </div>
            <div className="benefits__container">
              <div className="flex-item2">
                <h4>Improve Flexibility</h4>
              </div>
              <div className="flex-item2">
                <h4>Manage Chronic Conditions</h4>
              </div>
              <div className="flex-item2">
                <h4>Alleviate Headaches</h4>
              </div>
            </div>
          </div>
          <section className="subcol3"></section>
        </div>
      </main>
      {/* // Add the following code snippet here */}
      <div className="header">
        <div className="header-top">
          <div className="gener">
            <div className="container">
              {/* 🍀🌱🌺✨🌿🍃 */}
              <h3>🍀🌿🌺 Massage Services 🍀🌿🌺</h3>
              <section className="main">
                <ul className="ch-grid">
                  <li>
                    <div className="ch-item ch-img-1">
                      <div className="ch-info-wrap">
                        <div className="ch-info">
                          <div className="ch-info-front ch-img-1"></div>
                          <div className="ch-info-back">
                            <h3>Swedish </h3>
                            <p>Relax and unwind with gentle strokes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ch-item ch-img-2">
                      <div className="ch-info-wrap">
                        <div className="ch-info">
                          <div className="ch-info-front ch-img-2"></div>
                          <div className="ch-info-back">
                            <h3>Head</h3>
                            <p>Relieve tension and clear your mind</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ch-item ch-img-3">
                      <div className="ch-info-wrap">
                        <div className="ch-info">
                          <div className="ch-info-front ch-img-3"></div>
                          <div className="ch-info-back">
                            <h3>Hot stone</h3>
                            <p>Relieve tension and clear your mind</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ch-item ch-img-4">
                      <div className="ch-info-wrap">
                        <div className="ch-info">
                          <div className="ch-info-front ch-img-4"></div>
                          <div className="ch-info-back">
                            <h3>foot</h3>
                            <p>Revitalize your feet with soothing care</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li>
              <div className="ch-item ch-img-4">
                <div className="ch-info-wrap">
                  <div className="ch-info">
                    <div className="ch-info-front ch-img-4"></div>
                    <div className="ch-info-back">
                    <h3>Aromatherapy</h3>
                    <p>Enhance relaxation with soothing essential oils.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="ch-item ch-img-4">
                <div className="ch-info-wrap">
                  <div className="ch-info">
                    <div className="ch-info-front ch-img-4"></div>
                    <div className="ch-info-back">
                    <h3>Deep tissue</h3>
                    <p>Relieve chronic pain with firm</p>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
                </ul>
              </section>
            </div>
          </div>
        </div>
        {/* if i need to add in above  */}
        {/* <h3>Aromatherapy</h3>
<p>Enhance relaxation with soothing essential oils.</p>

<h3>Deep tissue</h3>
<p>Relieve chronic pain with firm, deep pressure.</p> */}
        {/* // Add the following code snippet here */}

        <div className="our">
          <div className="container">
            <div className="our-info">
              <img src={img2} class="img-responsive" alt="" />
              <h4>
                Welcome to Yawi Spa – Your Ultimate Relaxation Destination! 🌿✨{" "}
              </h4>
              <p>
                {" "}
                @ Yawi Spa, we bring the art of relaxation right to your
                doorstep. Whether you're at home or staying in a hotel, our
                expert therapists are just a call away, ready to provide a
                rejuvenating experience tailored to your needs. Because you
                deserve the very best in self-care, we ensure every session
                leaves you feeling refreshed and restored. Relax, unwind, and
                let Yawi Spa transform your space into a sanctuary of peace and
                well-being. Your journey to ultimate relaxation starts here!
                🌸💆‍♂️💆‍♀️
              </p>
            </div>
          </div>
        </div>
        {/* // Add the following code snippet here */}
      </div>
    </div>
  );
}

export default Home;

// Berhan Customer:
// Service:
// Deep tissue massage 1hr 1500
// Swedish massage 1hr 1300
// Hot stone massage 1hr 1500
// Aromatherapy 1hr 1500
// Foot massage 30 min 800
// Head massage 30min 800

// Yawi spa
