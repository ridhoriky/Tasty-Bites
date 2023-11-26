import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-pink-200/70 py-8 z-[99]">
      <div className="px-4 md:px-[15%]">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex flex-col items-center  md:items-start">
            <p className="mb-4">Get connected with us on social networks:</p>
            <div className="flex  items-center gap-4">
              <a
                href="#!"
                className="text-pink-200 hover:text-pink-500 duration-300 border-2 rounded-md p-1 hover:border-pink-500">
                <FaInstagram size={24} />
              </a>
              <a
                href="#!"
                className="text-pink-200 hover:text-pink-500 duration-300 border-2 rounded-md p-1 hover:border-pink-500">
                <FaFacebook size={24} />
              </a>
              <a
                href="#!"
                className="text-pink-200 hover:text-pink-500 duration-300 border-2 rounded-md p-1 hover:border-pink-500">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center  md:items-start">
            <p className="mb-4">Subscribe to Newsletter</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 mr-2 bg-slate-500/60 border-pink-500"
              />
              <button className="bg-gradient-to-br from-purple-700 to-pink-700 hover:scale-110 text-white p-2 rounded-md hover:opacity-80 duration-300 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
