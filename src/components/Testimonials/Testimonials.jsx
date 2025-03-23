import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Testimonials.css';
import { Carousel } from 'react-bootstrap';
import heni from '../../assets/images/10.jpg';
import lindu from '../../assets/images/11.jpg';    
// import Mimi from '../../assets/images/11.jpg';    
// import Sosi from '../../assets/images/11.jpg';    
// import Yared from '../../assets/images/11.jpg';    
// import Sara from '../../assets/images/11.jpg';    



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
          <p>"💬 "Their pregnancy massage was a lifesaver! It helped me with back pain and improved my sleep."</p>


          <h4> Mimi</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial-item">
          <img src={lindu}  alt="Jane Smith" className="testimonial-img" />
          <p>💬 "The best home massage service I’ve ever experienced! The therapist was professional, knowledgeable, and made me feel completely relaxed." </p>

          <h4>Sosi </h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial-item">
          <img src={heni } alt="John Doe" className="testimonial-img" />
          {/* <p>"Nile Financial Services helped me save a lot on my taxes!"</p> */}
          <p>💬 "As an elderly client, I appreciate the continued care and discounts. Their team is very patient and skilled."</p>

          <h4>Yared</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial-item">
          <img src={heni } alt="John Doe" className="testimonial-img" />
          {/* <p>"Nile Financial Services helped me save a lot on my taxes!"</p> */}
          <p>💬 "I booked a bridal shower massage session, and it was amazing! My friends and I felt so relaxed before my big day."</p>


          <h4>Sara </h4>
        </div>
      </Carousel.Item>
      
    </Carousel>
  </div>
</div>
</section>
  )
};

export default Testimonials; 



{/* <div className="about-section py-10">
  <h3 className="about-title text-center text-3xl font-semibold text-gray-700 mb-6">Customer Testimonials</h3>
  
  <div className="testimonial-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
      <p className="testimonial-text text-gray-600 text-lg mb-4">💬 "Yawi Spa provides the best home massage service I’ve ever experienced! The therapist was professional, knowledgeable, and made me feel completely relaxed." – Alem, Addis Ababa</p>
    </div>
    

    <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
      <p className="testimonial-text text-gray-600 text-lg mb-4">💬 "Their pregnancy massage was a lifesaver! It helped me with back pain and improved my sleep." – Mimi, Ethiopia</p>
    </div> <br/>


    <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
      <p className="testimonial-text text-gray-600 text-lg mb-4">💬 "I booked a bridal shower massage session, and it was amazing! My friends and I felt so relaxed before my big day." – Sara, Addis Ababa</p>
    </div>


    <div className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
      <p className="testimonial-text text-gray-600 text-lg mb-4">💬 "As an elderly client, I appreciate the continued care and discounts. Their team is very patient and skilled." – Kassahun, Addis Ababa</p>
    </div>
  </div>
</div> */}