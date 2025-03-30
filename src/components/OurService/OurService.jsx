import React from "react";
import "./OurService.css";
import img1 from "../../assets/images/backmassa.jpg";
import img2 from "../../assets/images/backdeepp.jpg";
import img3 from "../../assets/images/hhotstone.jpg";
import img4 from "../../assets/images/Aromateraphplace.png";
import img5 from "../../assets/images/footmass.jpg";
import img6 from "../../assets/images/headmassagee.jpg";
import img7 from "../../assets/images/pregnancemassage.png";
import img8 from "../../assets/images/eldermassage.png";
import img9 from "../../assets/images/bridalmassage.png";

const services = [
  {
    id: 1,
    title: "Deep Tissue Massage",
    duration: "1hr",
    price: "1500 Birr",
    image: img1,
    description:
      "Deep tissue massage targets deeper layers of muscles and connective tissues to relieve chronic pain and muscle stiffness. It uses slow, firm strokes and deep finger pressure to break up knots and tension.",
  },
  {
    id: 2,
    title: "Swedish Massage",
    duration: "1hr",
    price: "1300 Birr",
    image: img2,
    description:
      "Swedish massage focuses on relaxation and muscle tension relief. It involves long, gliding strokes, kneading, and circular movements using light to moderate pressure.",
  },
  {
    id: 3,
    title: "Hot Stone Massage",
    duration: "1hr",
    price: "1500 Birr",
    image: img3,
    description:
      "Hot stone massage uses smooth, heated stones placed on key points of the body to release deep-seated tension and improve circulation.",
  },
  {
    id: 4,
    title: "Aromatherapy",
    duration: "1hr",
    price: "1500 Birr",
    image: img4,
    description:
      "Aromatherapy massage combines gentle massage techniques with essential oils to enhance relaxation and well-being.",
  },

  {
    id: 5,
    title: "Foot Massage",
    duration: "30min",
    price: "800 Birr",
    image: img5,
    description:
      "Foot massage applies pressure to specific points on the feet to relieve stress, improve circulation, and promote relaxation.",
  },
  {
    id: 6,
    title: "Head Massage",
    duration: "30min",
    price: "800 Birr",
    image: img6,
    description:
      "Head massage focuses on the scalp, neck, and shoulders to relieve tension, headaches, and stress.",
  },
  {
    id: 7,
    title: "Pregnancy Massage",
    duration: "1hr",
    price: "1500 Birr",
    image: img7,
    description:
      "Pregnancy massage is a gentle form of massage therapy designed to reduce the stress and discomfort that comes with pregnancy.",
  },
  {
    id: 8,
    title: "Baby & Elderly Person Massage",
    duration: "1hr",
    price: "1500 Birr",
    image: img8,
    description:
      "This specialized massage is tailored to the needs of babies and elderly individuals.",
  },
  {
    id: 9,
    title: "Bridal/Wedding Massage",
    duration: "1hr",
    price: "2000 Birr",
    image: img9,
    description:
      "Bridal massage helps relax and rejuvenate brides-to-be before their big day.",
  },
];

const OurService = () => {
  return (
    <>
      <div className="c">
        {/* // Add the following code snippet here
        //  */}
        <br />
        <br />

        <div class="col-md-9 header-right">
          <div className="logo">
            <h1 className="banner-main">Services</h1>
          </div>
          <p class="massage-service-yawi">
            We provide door-to-door massage service in hotels and homes for your
            convenience.
          </p>

          <div className="banner1"></div>
        </div>
        {/* // Add the following code snippet here
        //  */}

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h2 className="service-title">{service.title}</h2>
                <div className="service-details">
                  {service.duration} -{" "}
                  <span className="service-price">{service.price}</span>
                </div>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurService;
