import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
// import img2  from "../../assets/images/bannerservice.webp";
// import img4 from "../../assets/images/hhotstone.jpg";

import img1 from "../../assets/images/rezzzzzzzzz.jpg";
import img2 from "/assets/image/a1.jpg";
import img3 from "../../assets/images/pregnancemassage.png";
import Carousel from "../carousel/Carousel";
import backgroundImage from "/assets/image/19.jpg";
import "./Home.css";

const images = [img1,img3,img2];

const containerStyle = {
  // backgroundImage: `url(${backgroundImage})`,
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
   backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
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


      {/* <main> */}
      

<div className="our-info-letus">
          <div className="container-letus">
            <div className="our-info-letus">
              {/* <img src={backgroundImage} class="img-responsive" alt="" /> */}
              <h1 className="let">Let Us Take Care of You!</h1>
             
               <p>
                     🌸 Choosing time for a spa visit also means improving your
                      health.
                    </p>

                    <p>
                      🌸 All massages and facials are given by professionally
                      trained staff members.
                    </p>
                 
                    <p>
                      🌸 Our goal is to provide a delightful experience. Visit our
                      services page to learn more.
                    </p>
            </div>
          </div>
        </div>

        <div className="container__content-blurred">
          <div className="subcol1"></div>
          <div className="benefits">
            <h3 id="benefits-title">
              🌿🌺Massage &amp; Facial Benefits🌺🌿
            </h3>
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
      {/* </main> */}
      {/* // Add the following code snippet here */}
      

      <div className="header">
        <div className="header-top">
          <div className="gener">
            {/* <div className="container-services"> */}

              {/* 🍀🌱🌺✨🌿🍃 */}
              <h3 id="benefits-title">🍀🌺Massage Services🌺🍀</h3>
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
                            <h3>Face</h3>
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
                
                </ul>
              </section>
            {/* </div> */}
          </div>
        </div>
      

        <div className="our">
          <div className="container">
            <div className="our-info">
              {/* <img src={img2} class="img-responsive" alt="" /> */}
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


