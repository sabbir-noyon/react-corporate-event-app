import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#222222] py-6 md:py-12 md:px-12 lg:px-14">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div data-aos="zoom-out-up" className="flex items-center mb-6 md:mb-0">
            <img src="/logo_2.png" alt="Devents Logo" className="w-48 h-12" />
            
          </div>

          <ul data-aos="zoom-out-up" className="flex flex-wrap justify-center md:flex-row mt-6 md:mt-0">
            <li className="mr-6 mb-2">
              <a href="#" className="text-white hover:text-red-600">Our Story</a>
            </li>
            
            
            <li className="mr-6 mb-2">
              <a href="#" className="text-white hover:text-red-600">Careers</a>
            </li>
            <li className="mr-6 mb-2">
              <a href="#" className="text-white hover:text-red-600">Support</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-red-600">My Account</a>
            </li>
          </ul>
        </div>

        <div  data-aos="zoom-out-up" className="flex justify-center mt-6">
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#" className="text-white hover:text-red-600">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-600">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-600">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-600">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>

        <ul data-aos="zoom-out-up" className="flex flex-wrap justify-center mt-6">
          <li className="mr-6 mb-2">
            <a href="#" className="text-white hover:text-red-600">Terms and Conditions</a>
          </li>
          <li className="mr-6 mb-2">
            <a href="#" className="text-white hover:text-red-600">Privacy Policy</a>
          </li>
          <li className="mr-6 mb-2">
            <a href="#" className="text-white hover:text-red-600">Cookie Policy</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-red-600">FAQs</a>
          </li>
        </ul>

        <p data-aos="zoom-out-up" className="text-center mt-6 text-white text-opacity-60">
          All Copyrights&copy; Reserved @Devents 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
