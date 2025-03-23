import React from 'react';
import './About.css';
import img22 from "../../assets/images/12.jpg";
import img1 from "../../assets/images/backmassa.jpg";
import img2 from "../../assets/images/hhotstone.jpg";
import img3 from "../../assets/images/THAI-MASSAGE.jpg";
import img6 from "../../assets/images/hotstone.jpg";
import img4 from "../../assets/images/backdeepp.jpg";
import img5 from "../../assets/images/headmassagee.jpg";
import { Link } from 'react-router-dom';
import Testimonials from './../Testimonials/Testimonials';

const About = () => {
  const staffImages = { img1, img2, img3, img4, img5, img6 };

  return (
    <>
      <div className="c">
        <div className="col-md-9 header-right">
          <div className="logo">
          <h1 className="banner-main">About Us</h1>
           
          </div>
      
          <div className="banner1"></div>
        </div>


        {/* About Section */}
        <section id="about" className="about section light-background">
  {/* Section Title */}
  <div className="container">
    <div className="row gy-3">
      {/* Left Side: Image */}
      <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
        <img
          src={img2}
          alt="About Us"
          className="img-fluid about-image"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
        <div className="about-content ps-0 ps-lg-3">
          <h3>Introduction</h3>
          <p className="fst-italic">
            Welcome to Yawi Spa. We are dedicated to providing exceptional massage therapies to help you achieve ultimate relaxation and well-being. Our experienced therapists are committed to delivering high-quality services tailored to your needs.
          </p>
          <h3>Our Purpose</h3>
          <p className="fst-italic">
            At Yawi Spa, our mission is to offer a peaceful environment where you can rejuvenate your body and mind. Our purpose is to provide a holistic approach to wellness through various massage therapies designed to alleviate stress and promote overall well-being.
          </p>
          <ul>
            <li>
              <div>
                <strong>Deep Tissue Massage</strong> deeper layers of muscle to relieve chronic tension and pain.
              </div>
            </li>
            <li>
              <div>
                <strong>Swedish Massage</strong> A relaxing full-body massage using long strokes and gentle pressure.
              </div>
            </li>
            <li>
              <div>
                <strong>Hot Stone Massage</strong> Heated stones are used to relax and loosen muscles, promoting healing.
              </div>
            </li>
            <li>
              <div>
                <strong>Aromatherapy</strong> Relaxing massage combined with essential oils for a calming experience.
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
  <div className="container" style={{ minHeight: '300px' }}> {/* Set a higher minHeight for more space */}
    <div className="row gy-3">
      {/* Left Side: Text Content (Why Choose Us) */}
      <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
        <div className="about-content ps-0 ps-lg-3">
          <h3>Why Choose Us?</h3>
          <br/>
          <br/>

          <ul>
            <li>
              <div>
                <strong>5 Years of Professional Experience</strong> in massage therapy.
              </div>
            </li>
            <li>
              <div>
                <strong>Convenient Service</strong> – We bring relaxation to your location.
              </div>
            </li>
            <li>
              <div>
                <strong>Specialized Services</strong> – Including pregnancy, baby care, and bridal shower massages.
              </div>
            </li>
            <li>
              <div>
                <strong>Exclusive Discounts</strong> – Senior clients enjoy continuous care packages.
              </div>
            </li>
            <li>
              <div>
                <strong>Wellness Support</strong> – Expert advice on diet, sleep, and relaxation techniques.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side: Text Content (Our Philosophy & Values) */}
      <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
        <div className="about-content ps-0 ps-lg-3">
          <h3>Our Values</h3>
          <br/>
          <br/>
          <ul>
            <li>
              <strong>Relaxation First</strong> – Creating a peaceful atmosphere for you to unwind.
            </li>
            <li>
              <strong>Customer Satisfaction</strong> – Your well-being is our priority.
            </li>
            <li>
              <strong>Personalized Treatments</strong> – Tailored to your specific needs, body type, and health conditions.
            </li>
            <li>
              <strong>Wellness Guidance</strong> – Advice on diet based on age and blood type, and best sleep positions for better rest.
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
  <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
    <div className="row gy-3">
      {/* Centered Text Content */}
      <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="200">
        <div className="about-content">
          <h3>Opening Hours</h3>
          <p className="about-text">
            ⏰ <strong>Opening Hours:</strong>
          </p>
          <ul className="about-list">
            <li><strong>Monday – Friday:</strong> 12:00 PM – 12:00 AM</li>
            <li><strong>Saturday – Sunday:</strong> 12:00 PM – 6:00 PM</li>
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

// import React from 'react';
// import './About.css';
// import img22 from "../../assets/images/12.jpg";
// import img1 from "../../assets/images/backmassa.jpg";
// import img2 from "../../assets/images/hhotstone.jpg";
// import img3 from "../../assets/images/THAI-MASSAGE.jpg";
// import img6 from "../../assets/images/hotstone.jpg";
// import img4 from "../../assets/images/backdeepp.jpg";
// import img5 from "../../assets/images/headmassagee.jpg";

// const About = () => {
//   const staffImages = { img1, img2, img3, img4, img5, img6 };

//   return (
//     <>
//       <div className="c">
//         <div className="col-md-9 header-right">
//           <div className="logo">
//             <a href="index.html"><h1>Yawi Spa</h1></a>
//           </div>
//           <h3 className="banner-main">About Us</h3>
//           <div className="banner1"></div>
//         </div>

//         <br /><br /><br /><br />

//         {/* About Section */}
//         <section id="about" className="about section light-background">
//           {/* Section Title */}
//           <div className="container section-title" data-aos="fade-up">
//             <h2>About</h2>
//             <p><span>Find Out More</span> <span className="description-title">About Us</span></p>
//           </div>{/* End Section Title */}

//           <div className="container">
//             <div className="row gy-3">
//               <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
//                 <img src={img22} alt="About Us" className="img-fluid" />
//               </div>

//               <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
//                 <div className="about-content ps-0 ps-lg-3">
//                   <h3>Introduction</h3>
//                   <p className="fst-italic">
//                     Welcome to Yawi Spa. We are dedicated to providing exceptional massage therapies to help you achieve ultimate relaxation and well-being. Our experienced therapists are committed to delivering high-quality services tailored to your needs.
//                   </p>
//                   <h3>Our Purpose</h3>
//                   <p className="fst-italic">
//                     At Yawi Spa, our mission is to offer a peaceful environment where you can rejuvenate your body and mind. Our purpose is to provide a holistic approach to wellness through various massage therapies designed to alleviate stress and promote overall well-being.
//                   </p>
//                   <ul>
//                     <li>
//                       <i className="bi bi-diagram-3"></i>
//                       <div>
//                         <h4>Deep Tissue Massage</h4>
//                         <p> Targeting deeper layers of muscle to relieve chronic tension and pain. </p>
//                       </div>
//                     </li>
//                     <li>
//                       <i className="bi bi-fullscreen-exit"></i>
//                       <div>
//                         <h4>Swedish Massage</h4>
//                         <p> A relaxing full-body massage using long strokes and gentle pressure. </p>
//                       </div>
//                     </li>
//                     <li>
//                       <i className="bi bi-briefcase"></i>
//                       <div>
//                         <h4>Hot Stone Massage</h4>
//                         <p> Heated stones are used to relax and loosen muscles, promoting healing. </p>
//                       </div>
//                     </li>
//                     <li>
//                       <i className="bi bi-book"></i>
//                       <div>
//                         <h4>Aromatherapy</h4>
//                         <p> Relaxing massage combined with essential oils for a calming experience. </p>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         <div className="about-section container mx-auto py-10">
//           <div className="grid grid-cols-1 md-grid-cols-3 gap-10">
//             {/* About Us Section */}
//             <div className="text-center">
//               <img src={img22} className="w-full rounded-lg mb-4" alt="About Us" />
//               <h4 className="text-lg font-semibold text-gray-700 mb-2">
//                 Experience Ultimate Relaxation at Yawi Spa
//               </h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 At Yawi Spa, we believe in the power of healing through touch. Our experienced therapists provide a range of massages designed to relieve stress, rejuvenate the body, and promote overall well-being. With a tranquil atmosphere and professional service, we ensure a refreshing escape from daily life.
//               </p>
//             </div>

//             {/* What We Do Section */}
//             <div className="text-center">
//               <h3 className="text-2xl font-semibold text-gray-700 mb-4">What We Do</h3>
//               <h4 className="text-lg font-semibold text-gray-700">Holistic Wellness for Mind and Body</h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Our expert team specializes in various massage therapies, including Deep Tissue, Swedish, Hot Stone, Aromatherapy, and more. Each treatment is tailored to your specific needs, ensuring the best care and relaxation.
//               </p>
//               <h4 className="text-lg font-semibold text-gray-700 mt-4">A Soothing and Luxurious Experience</h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Our spa environment is designed to provide peace and comfort, allowing you to unwind and restore balance to your body and mind. Whether you're looking for relaxation or pain relief, we have the perfect solution for you.
//               </p>
//               <h4 className="text-lg font-semibold text-gray-700 mt-4">Personalized Treatments by Skilled Therapists</h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Our professional massage therapists are highly trained and dedicated to ensuring each session is customized to meet your individual needs, leaving you refreshed and revitalized.
//               </p>
//             </div>

//             {/* Our Staff Section */}
//             <div className="grid grid-cols-2 gap-2">
//               {Object.values(staffImages).map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   className="w-full h-32 object-cover rounded-lg"
//                   alt={`Staff ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;



// import React from 'react';
// import './About.css';
// import img22 from "../../assets/images/12.jpg";
// import img1 from "../../assets/images/backmassa.jpg";
// import img2 from "../../assets/images/hhotstone.jpg";
// import img3 from "../../assets/images/THAI-MASSAGE.jpg";
// import img6 from "../../assets/images/hotstone.jpg";
// import img4 from "../../assets/images/backdeepp.jpg";
// import img5 from "../../assets/images/headmassagee.jpg";
//import Testimonials from './../Testimonials/Testimonials';

// const About = () => {
//   const staffImages = { img1, img2, img3, img4, img5, img6 };

//   return (
//     <>
//       <div className="about-container">
//         <div className="header-section">
//           <div className="logo">
//             <a href="index.html"><h1>Yawi Spa</h1></a>
//           </div>
//           <h3 className="about-title">About Us</h3>
//         </div>

//         <div className="about-section container mx-auto py-10">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//             {/* Experience Ultimate Relaxation */}
//             <div className="about-item text-center">
//               <img src={img22} className="w-full rounded-lg mb-4" alt="About Us" />
//               <h4 className="text-lg font-semibold text-gray-700 mb-2">
//                 Experience Ultimate Relaxation at Yawi Spa
//               </h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 At Yawi Spa, we believe in the power of healing through touch. Our experienced therapists provide a range of massages designed to relieve stress, rejuvenate the body, and promote overall well-being. With a tranquil atmosphere and professional service, we ensure a refreshing escape from daily life.
//               </p>
//             </div>

//             {/* What We Do Section */}
//             <div className="about-item text-center">
//               <h3 className="text-2xl font-semibold text-gray-700 mb-4">What We Do</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Our expert team specializes in various massage therapies, including Deep Tissue, Swedish, Hot Stone, Aromatherapy, and more. Each treatment is tailored to your specific needs, ensuring the best care and relaxation.
//               </p>
//               <h3 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Our spa environment is designed to provide peace and comfort, allowing you to unwind and restore balance to your body and mind. Whether you're looking for relaxation or pain relief, we have the perfect solution for you.
//               </p>
//               <h4 className="text-lg font-semibold text-gray-700 mt-4">Personalized Treatments by Skilled Therapists</h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Our professional massage therapists are highly trained and dedicated to ensuring each session is customized to meet your individual needs, leaving you refreshed and revitalized.
//               </p>
//             </div>

//             {/* Our Staff Section */}
//             <div className="about-item">
//               <h4 className="text-lg font-semibold text-gray-700 text-center mb-4">Meet Our Skilled Therapists</h4>
//               <div className="grid grid-cols-2 gap-2">
//                 {Object.values(staffImages).map((image, index) => (
//                   <img
//                     key={index}
//                     src={image}
//                     className="w-full h-32 object-cover rounded-lg"
//                     alt={`Staff ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Philosophy & Values */}
//         <div className="about-section container mx-auto py-10">
//           <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Philosophy & Values</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             At <strong>Yawi Spa</strong>, our mission is to provide high-quality massage therapy that helps rejuvenate your body, mind, and soul—right in the comfort of your home, hotel, or any location you prefer.
//           </p>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             We offer specialized massages for <strong>pregnant women, babies, bridal showers, and elderly clients</strong>. For senior clients, we also provide discounted continuous services to ensure long-term well-being.
//           </p>
//           <br />
//           <h4 className="text-lg font-semibold text-gray-700 mt-4">Our Core Values</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             <strong>Relaxation First</strong> – Creating a peaceful atmosphere for you to unwind.<br />
//             <strong>Customer Satisfaction</strong> – Your well-being is our priority.<br />
//             <strong>Personalized Treatments</strong> – Tailored to your specific needs, body type, and health conditions.<br />
//             <strong>Wellness Guidance</strong> – Advice on diet based on age and blood type, and best sleep positions for better rest.
//           </p>
//         </div>

//         {/* Why Choose Us */}
//         <div className="about-section container mx-auto py-10">
//           <h3 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             <strong>5 Years of Professional Experience</strong> in massage therapy.<br />
//             <strong>Convenient Service</strong> – We bring relaxation to your location.<br />
//             <strong>Specialized Services</strong> – Including pregnancy, baby care, and bridal shower massages.<br />
//             <strong>Exclusive Discounts</strong> – Senior clients enjoy continuous care packages.<br />
//             <strong>Wellness Support</strong> – Expert advice on diet, sleep, and relaxation techniques.
//           </p>

//           {/* Testimonials */}
//           <h4 className="text-lg font-semibold text-gray-700 mt-4">Customer Testimonials</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">💬 "Yawi Spa provides the best home massage service I’ve ever experienced! The therapist was professional, knowledgeable, and made me feel completely relaxed." – Alem, Addis Ababa</p>
//           <p className="text-gray-600 text-sm leading-relaxed">💬 "Their pregnancy massage was a lifesaver! It helped me with back pain and improved my sleep." – Mimi, Ethiopia</p>
//           <p className="text-gray-600 text-sm leading-relaxed">💬 "I booked a bridal shower massage session, and it was amazing! My friends and I felt so relaxed before my big day." – Sara, Addis Ababa</p>
//           <p className="text-gray-600 text-sm leading-relaxed">💬 "As an elderly client, I appreciate the continued care and discounts. Their team is very patient and skilled." – Kassahun, Addis Ababa</p>
//         </div>

//         {/* Contact & Location */}
//         <div className="about-section container mx-auto py-10">
//           <h4 className="text-lg font-semibold text-gray-700 mb-4">Contact & Location</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">📍 <strong>Location:</strong> Addis Ababa, Megenagna Area</p>
//           <p className="text-gray-600 text-sm leading-relaxed">📞 <strong>Phone:</strong> [Insert Your Contact Number]</p>
//           <p className="text-gray-600 text-sm leading-relaxed">📧 <strong>Email:</strong> [Insert Your Email Address]</p>
//           <p className="text-gray-600 text-sm leading-relaxed">📲 <strong>WhatsApp / Telegram:</strong> [Insert Your Messaging Contact]</p>
//           <p className="text-gray-600 text-sm leading-relaxed">⏰ <strong>Opening Hours:</strong></p>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             <strong>Monday – Friday:</strong> 12:00 PM – 12:00 AM<br />
//             <strong>Saturday – Sunday:</strong> 12:00 PM – 6:00 PM
//           </p>
//           <p className="text-gray-600 text-sm leading-relaxed">For bookings and inquiries, call or message us today!</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;