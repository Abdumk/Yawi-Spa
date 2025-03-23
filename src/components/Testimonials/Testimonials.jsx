import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Testimonials.css';
import { Carousel } from 'react-bootstrap';
import heni from '../../assets/images/10.jpg';
import lindu from '../../assets/images/11.jpg';    

const Testimonials = () => {
  return (
  
<section id="testimonials" className="testimonials section">
<div className="testi-container">
  <div className="section-title" data-aos="fade-up">
    <h2>Testimonials</h2>
    <p>What our clients say about us</p>
  </div>
  <div className="testimonials-carousel" data-aos="fade-up" data-aos-delay="100">
  <Carousel>
      <Carousel.Item>
        <div className="testimonial-item">
          <img src={heni } alt="John Doe" className="testimonial-img" />
          {/* <p>"Nile Financial Services helped me save a lot on my taxes!"</p> */}
          <p>"Nile Financial Services made tax filing effortless! Their team was professional, efficient, and helped me maximize my refund. Highly recommended!"</p>


          <h4>Milkyas Taddes</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial-item">
          <img src={lindu}  alt="Jane Smith" className="testimonial-img" />
          <p>"As a business owner, I needed expert financial guidance. Nile Financial Services provided invaluable support, helping me save money and grow my business with confidence!"</p>

          <h4>Lindsey Pazou</h4>
        </div>
      </Carousel.Item>
      
    </Carousel>
  </div>
</div>
</section>
  )
};

export default Testimonials; 
