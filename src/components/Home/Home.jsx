import React, { useState, useEffect, useRef } from "react";
import img1 from "/assets/image/IMG-20250308-WA0003.jpg";
import img2 from "/assets/image/IMG-20250308-WA0005.jpg";
import img3 from "/assets/image/IMG-20250308-WA0006.jpg";
import img4 from "../../assets/images/8.jpg";

import img5 from "../../assets/images/3.jpg";

import backgroundImage from "/assets/image/19.jpg";


const images = [
img1,
img2,
img3
];

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    resetAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideRef.current); // Cleanup
  }, []);

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    startAutoSlide();
  };

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
            <div className="carousel-container">
            <div className="carousel-text">
                    <h1 id="yourself">Make Time For Yourself.</h1>
                    <h1 id="welcome">Welcome to Yawi Massage</h1>
                  </div>

              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div className="carousel-item" key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-button prev" onClick={prevSlide}>←</button>
              <button className="carousel-button next" onClick={nextSlide}>→</button>
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
                  
                  Choosing time for a spa visit also means improving your health.
                </p>
              </li>
              <li>
                <p className="visit">
                  
                  All massages and facials are given by professionally trained staff members.
                </p>
              </li>
              <li>
                <p className="visit">
                  
                  Our goal is to provide a delightful experience. Visit our services page to learn more.
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
            <h1 id="benefits-title">Massage &amp; Facial Benefits</h1>
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
        <h3>Massage Services</h3>
        <section className="main">
          <ul className="ch-grid">
            <li>
              <div className="ch-item ch-img-1">
                <div className="ch-info-wrap">
                  <div className="ch-info">
                    <div className="ch-info-front ch-img-1"></div>
                    <div className="ch-info-back">
                      <h3>Head </h3>
                      <p>by industry's standard</p>
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
                      <h3>Swedish</h3>
                      <p>by text ever since</p>
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
                      <p>by of type scrambled</p>
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
                      <p>by Dustin Leer</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
    </div>
    {/* // Add the following code snippet here */}
    
    <div class="our">
	<div class="container">
		<div class="our-info">
			<img src= {img2} class="img-responsive" alt="" />
			<h4>Finibus Bonorum et Malorum</h4>
			<p>which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generat</p>
		</div>
</div>
</div>
    {/* // Add the following code snippet here */}
    </div>
    </div>
  );
}

export default Home;
