import React from 'react';
 import './About.css';
// import img1 from "../../assets/images/11.jpg";

// import img2 from "../../assets/images/12.jpg";\
// import img3 from "../../assets/images/10.jpg";
// import img4 from "../../assets/images/13.jpg";
// import img5 from "../../assets/images/14.jpg";

import img1 from "../../assets/images/backmassa.jpg";
import img2 from "../../assets/images/hhotstone.jpg";
import img3 from "../../assets/images/THAI-MASSAGE.jpg";
import img6 from "../../assets/images/hotstone.jpg";
import img4 from "../../assets/images/backdeepp.jpg";
// import img4 from "../../assets/images/PURE-RELAXATION-MASSAGE.jpg";
import img5 from "../../assets/images/headmassagee.jpg";


const  About = () => {
    return (
      <>
      <div className="c">
        {/* // Add the following code snippet here
        //  */}
        <div class="col-md-9 header-right">
<div class="logo">
    <a href="index.html"><h1>Classy</h1></a>
  </div>
  <h3 class="banner-main"> About Us</h3>
    <div class="banner1">	
      
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
              <h2 >Deep tissue massage 1hr 1500 birr</h2>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>

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
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img2} className="img-responsive" alt="" />
              <h4>Aromatherapy 1hr 1500 birr</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
          </div>
          <div className="row services-top">
            <div className="col-md-4 services-left">
              <img src={img3} className="img-responsive" alt="" />
              <h4>Hot stone massage 1hr 1500 birr</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img4} className="img-responsive" alt="" />
              <h4>Foot massage 30 min 800 birr</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img5} className="img-responsive" alt="" />
              <h4>Head massage 30min 800 birr</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default About;