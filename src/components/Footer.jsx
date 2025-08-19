import React from 'react';
import { IoMdMailUnread } from "react-icons/io";
import { IoPhonePortraitOutline, IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "purple", minHeight: "350px" }}
      className="text-center d-flex flex-column justify-content-center align-items-center p-4 text-white"
    >
      <h1 className="mb-3">Contact Us</h1>

      <h4 className="mb-2">
        <IoMdMailUnread aria-hidden="true" />{" "}
       
          rbuilder@gmmail.com
      </h4>

  
       
        <h4 className="text-white text-decoration-none">
         <IoPhonePortraitOutline aria-hidden="true" /> +91 84568 72214 4
        </h4>
      

      <h3 className="mb-3">Connect With Us</h3>
      <div className="d-flex gap-3 justify-content-center mb-4" style={{ fontSize: "2rem" }}>
       
          <FaWhatsapp aria-label="WhatsApp" />
        
 
          <RiFacebookCircleLine aria-label="Facebook" />
 
          <IoLogoInstagram aria-label="Instagram" />
       
      </div>

      <h5>Made with ❤️ to get you hired</h5>
    </footer>
  );
}

export default Footer;