import React from 'react';
 import './OurService.css';
import img1 from "../../assets/images/11.jpg";
import img2 from "../../assets/images/12.jpg";
import img3 from "../../assets/images/10.jpg";
import img4 from "../../assets/images/13.jpg";
import img5 from "../../assets/images/14.jpg";

const OurService = () => {
    return (
      <div className="services">
        <div className="container">
          <div className="row services-top">
            <div className="col-md-4 services-left">
              <img src={img3} className="img-responsive" alt="" />
              <h2 id="title">Benefits of Foot Massage</h2>
              <ul>
                <li id="benefit1">✔ Improves blood circulation</li>
                <li id="benefit2">✔ Reduces muscle stiffness</li>
                <li id="benefit3">✔ Relieves pain</li>
                <li id="benefit4">✔ Reduces mental stress</li>
                <li id="benefit5">✔ Enhances relaxation</li>
                <li id="benefit6">✔ Boosts overall body function</li>
              </ul>
            </div>
            <div className="col-md-4 services-left">
              <img src={img5} className="img-responsive" alt="" />
              <h4>Lorem Ipsum come</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img2} className="img-responsive" alt="" />
              <h4>Finibus Bonorum</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
          </div>
          <div className="row services-top">
            <div className="col-md-4 services-left">
              <img src={img4} className="img-responsive" alt="" />
              <h4>Rginia, looked</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img4} className="img-responsive" alt="" />
              <h4>Contrary to popul</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
            <div className="col-md-4 services-left">
              <img src={img5} className="img-responsive" alt="" />
              <h4>Internet tend to</h4>
              <p>Contrary to popul years rginia, looked. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurService;