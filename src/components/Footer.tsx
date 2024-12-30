import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0a0f2c] text-white p-10">
      <div className="container md:w-full lg:w-[85%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <h5 className="font-bold text-lg mb-1 ">Quick Link</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="https://ulka.tv" className="hover:tracking-widest">ULKA TV</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="/smarttv" className="hover:tracking-widest">Smart TV</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-1">Contact</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <ul className="space-y-4">
            <li className=" items-center">
              <strong>TECHSAI DIGITAL SOLUTION LLP.</strong>
              <br />
              107, Hallmark, Vasant Oscar, L.B.S. Road, Mulund (West), Mumbai – 400 080.
            </li>
            <li className="flex items-center">
              <i className="bi bi-telephone mr-2"></i>
              +91 96760 15678
            </li>
            <li className="flex items-center">
              <i className="bi bi-envelope mr-2"></i>
              ashish@techsai.com
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-1">Gallery</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <div className="grid grid-cols-3 gap-2">
            <img src="/ulka.png" alt="Gallery 1" className="w-16 h-16 border-white border-2" />
            <img src="/oioo.png" alt="Gallery 2" className="w-16 h-16 border-white border-2" />
            <img src="/ter.png" alt="Gallery 3" className="w-16 h-16 border-white border-2" />
            <img src="/yte.png" alt="Gallery 4" className="w-16 h-16 border-white border-2" />
            <img src="/rem.png" alt="Gallery 5" className="w-16 h-16 border-white border-2" />
            <img src="/resa.png" alt="Gallery 6" className="w-16 h-16 border-white border-2" />
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-6">
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com" className="text-2xl"><FaLinkedin /></a>
            <a href="https://www.facebook.com" className="text-2xl"><FaFacebook /></a>
            <a href="https://www.instagram.com" className="text-2xl"><FaInstagram /></a>
            <a href="https://www.twitter.com" className="text-2xl"><FaTwitter /></a>
          </div>
          <p className="mt-2">City Online Media Private Limited.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
