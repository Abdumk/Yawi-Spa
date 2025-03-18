import React from 'react';
 import './OurService.css';
// import img1 from "../../assets/images/11.jpg";

// import img2 from "../../assets/images/12.jpg";\
// import img3 from "../../assets/images/10.jpg";
// import img4 from "../../assets/images/13.jpg";
// import img5 from "../../assets/images/14.jpg";

import img1 from "../../assets/images/backmassa.jpg";
import img2 from "../../assets/images/hhotstone.jpg";
import img3 from "../../assets/images/footmassage.png";
import img6 from "../../assets/images/hotstone.jpg";
import img4 from "../../assets/images/backdeepp.jpg";
// import img4 from "../../assets/images/PURE-RELAXATION-MASSAGE.jpg";
import img5 from "../../assets/images/headmassagee.jpg";


const OurService = () => {
    return (
      <>
      <div className="c">
        {/* // Add the following code snippet here
        //  */}
        <div class="col-md-9 header-right">
<div className="logo">
		<a href="index.html"><h1>Yawi</h1></a>
	</div>
	<h3 className="banner-main">Services</h3>
		<div className="banner1">	
			
		</div>
	</div>
     {/* // Add the following code snippet here
        //  */}
        <br/>
        <br/>
        <br/>
        <br/>
      




        <div className="container">
          <div className="row services-top">
            <div className="col-md-4 services-left">
              <img src={img6} className="img-responsive" alt="" />
              <h2 >Deep tissue massage  1hr 1500 birr</h2>
              <p>Deep tissue massage targets deeper layers of muscles and connective tissues to relieve chronic pain and muscle stiffness. It uses slow, firm strokes and deep finger pressure to break up knots and tension. This massage helps improve mobility, reduce stress, and promote relaxation.</p>

              {/* <h2 id="title">Deep tissue massage 1hr 1500</h2>

              <ul>
                <li id="benefit1"> Improves blood circulation</li>
                <li id="benefit2"> Reduces muscle stiffness</li>
                <li id="benefit3"> Relieves pain</li>
                <li id="benefit4"> Reduces mental stress</li>
                <li id="benefit5"> Enhances relaxation</li>
                <li id="benefit6"> Boosts overall body function</li>
              </ul> */}
            </div>
            <div className="col-md-4 services-left">
              <img src={img1} className="img-responsive" alt="" />
              <h4>Swedish massage 1hr 1300 birr</h4>
              <p>Swedish massage focuses on relaxation and muscle tension relief. It involves long, gliding strokes, kneading, and circular movements using light to moderate pressure. This massage improves blood circulation, reduces stress, and promotes overall well-being.</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img2} className="img-responsive" alt="" />
              <h4>Aromatherapy 1hr 1500 birr</h4>
              <p>Aromatherapy massage combines gentle massage techniques with essential oils to enhance relaxation and well-being. The oils are absorbed through the skin and inhaled, offering benefits like stress relief, improved mood, and better sleep. This massage provides a soothing, sensory experience.</p>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="row services-top">
            <div className="col-md-4 services-left">
              <img src={img3} className="img-responsive" alt="" />
              <h4>Hot stone massage  1hr 1500 birr</h4>
              <p>Hot stone massage uses smooth, heated stones placed on key points of the body to release deep-seated tension and improve circulation. The warmth helps relax muscles, allowing for deeper pressure without discomfort. This massage promotes relaxation, reduces stress, and relieves pain.</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img4} className="img-responsive" alt="" />
              <h4>Foot massage  30 min 800 birr</h4>
              <p>Foot massage applies pressure to specific points on the feet to relieve stress, improve circulation, and promote relaxation. Techniques like kneading, stroking, and acupressure help ease fatigue and tension. It is known for enhancing overall well-being and restoring energy levels.</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img5} className="img-responsive" alt="" />
              <h4>Head massage  30min 800 birr</h4>
              <p>Head massage focuses on the scalp, neck, and shoulders to relieve tension, headaches, and stress. Using gentle kneading and circular motions, it enhances blood circulation and relaxation. This massage can also promote hair growth and provide a calming, rejuvenating experience.</p>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
      </>
    );
};

export default OurService;