import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        {/* Title */}
        <div className="faq-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our massage services.</p>
          <p className="faq-subtext">
            "Need help? Feel free to contact us anytime!"
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list" data-aos="fade-up" data-aos-delay="100">
          <ul>
            {faqData.map((faq, index) => (
              <li key={index} className={openIndex === index ? "open" : ""}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                 
                  {faq.question}
                  <span className="faq-toggle">
                    {openIndex === index ? (
                      <i className="bi bi-chevron-up"></i>
                    ) : (
                      <i className="bi bi-chevron-down"></i>
                    )}
                  </span>
                </button>
                <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// FAQ Data
const faqData = [
  {
    question: "What types of massage services do you offer?",
    answer:
      "We offer Deep Tissue Massage, Swedish Massage, Hot Stone Massage, Aromatherapy, Foot Massage, and Head Massage.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by calling us directly +251 943-53-44-44 or sending a message via WhatsApp or social media.",
  },
  {
    question: "Do you provide home or hotel massage services?",
    answer: "Yes, we provide door-to-door massage services in hotels and homes for your convenience.",
  },
  {
    question: "What are your operating hours?",
    answer: "We are available daily from 9 AM to 10 PM. You can schedule your massage at a time that suits you best.",
  },
  {
    question: "What should I expect during a massage session?",
    answer:
      "Our therapist will ensure you are comfortable and tailor the session to your needs, providing relaxation and relief.",
  },
  {
    question: "Do you accept online payments?",
    answer: "Currently, we accept cash and mobile payment options. Contact us for more details.",
  },
];

export default FAQ;
