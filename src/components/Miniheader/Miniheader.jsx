import React from 'react';
import './Miniheader.css';
import { Link } from 'react-router-dom';

function Miniheader() {
  return (
    <header id="mini-header" className="mini-header-wrapper">
      <div className="mini-topbar d-flex align-items-center">
      <div className="mini-contact-info d-flex align-items-center">
            <Link to="tel:+251 943-53-44-44" className="ms-3 d-flex align-items-center">
              <i className="bi bi-telephone-fill"></i>
              <span className="d-none d-md-inline ms-2">+251 943-53-44-44</span>
            </Link>
           
          </div>
        <div className="container d-flex justify-content-between">
          {/* Social Media Icons on the Left */}


<div className="mini-social-links d-flex align-items-center">
 
  <Link
    to="https://t.me/+M96RYQtaTOAyYjM0"
    target="_blank"
    rel="noopener noreferrer"
    className="ms-3"
  >
    <i className="bi bi-telegram"></i>
  </Link>
  <Link
    to="https://wa.me/message/ZOEH2DPHOXJNK1"
    target="_blank"
    rel="noopener noreferrer"
    className="ms-3"
  >
    <i className="bi bi-whatsapp"></i>
  </Link>
  <Link
    to="https://www.tiktok.com/@yawi.spa?_r=1&_d=e40cf7jgkimeg8&sec_uid=MS4wLjABAAAANnvMczbm1PJoBkqoTHxi5BkOkD1j723yJOR6XGhJS2eUeCk_Jfx0tMX40rzBwgrU&share_author_id=7478265472095831046&sharer_language=en&source=h5_m&u_code=ej5ej3ii70l642&timestamp=1742494296&user_id=7478265472095831046&sec_user_id=MS4wLjABAAAANnvMczbm1PJoBkqoTHxi5BkOkD1j723yJOR6XGhJS2eUeCk_Jfx0tMX40rzBwgrU&utm_source=telegram&utm_campaign=client_share&utm_medium=android&share_iid=7474768735942756112&share_link_id=7505365f-8e17-40e7-9bca-4e14d01c7546&share_app_id=1233&ugbiz_name=ACCOUNT&social_share_type=5&enable_checksum=1"
    target="_blank"
    rel="noopener noreferrer"
    className="ms-3"
  >
    <i className="bi bi-tiktok"></i>
  </Link>
  <Link
    to="https://web.facebook.com/profile.php?id=61574682343559"
    target="_blank"
    rel="noopener noreferrer"
    className="ms-3"
  >
    <i className="bi bi-facebook"></i>
  </Link>
  <Link
    to="https://www.instagram.com/yawispa4353"
    target="_blank"
    rel="noopener noreferrer"
    className="ms-3"
  >
    <i className="bi bi-instagram"></i>
  </Link>
</div>


          {/* Contact Info (Phone number on the right) */}
         
        </div>

       
      </div>
    </header>
  );
}

export default Miniheader;
