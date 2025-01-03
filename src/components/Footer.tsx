import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0a0f2c] text-white p-5">
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
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-1">Number & Email</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <ul className="space-y-4">
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
      </div>
    </footer>
  );
}

export default Footer;
