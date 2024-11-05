import React from "react";
import logo from "../images/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook ,FaTwitter  } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-black pt-10 ps-10 flex flex-col justify-between">
      <div>
        <hr />
        <div className="flex justify-between pt-10"> 
        <img src={logo} alt="loading" className="h-18 w-32" />
        <div className="flex items-center gap-5 pe-10">
        <FaInstagram className="text-custom-red h-10 w-10" />
        <FaFacebook className="text-custom-red h-10 w-10" />
        <FaTwitter className="text-custom-red h-10 w-10"/>
        
        </div>
        </div>
        <div className="grid grid-cols-3 my-5">
          <div>
            <ul>
              <li className="nav-link">FAQ</li>
              <li className="nav-link">Accounts</li>
              <li className="nav-link">About us</li>
              <li className="nav-link">Contact us</li>
            </ul>
          </div>
          <div>
          <ul>
              <li className="nav-link">Events</li>
              <li className="nav-link">Workshops</li>
              <li className="nav-link">News</li>
              <li className="nav-link">Gallery</li>
            </ul>
          </div>
          <div>
           <ul>
              <li className="nav-link flex items-center gap-2"><CgProfile className="text-white" />DIVAKAR S</li>
              <li className="nav-link flex items-center gap-2"><CgProfile className="text-white" />MADANIKA</li>
              <li className="nav-link flex items-center gap-2"><CgProfile className="text-white" />DHARANISH S L</li>
              <li className="nav-link">KONGU ENGINEERING COLLEGE</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white text-center pb-3">&copy; 2024 Eventix. All rights reserved.</p>
    </div>
  );
};

export default Footer;
