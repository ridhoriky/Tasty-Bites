import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavbarColor = (pathname) => {
    switch (pathname) {
      case '/':
      case '/category':
      case '/about':
        return 'bg-transparent';
      default:
        return 'bg-transparent';
    }
  };

  const navbarColor = getNavbarColor(location.pathname);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex flex-row justify-between items-center fixed top-0 z-[99] text-pink-200/60 px-4 w-full md:px-[15%] ${
        scrolling ? 'bg-slate-950' : navbarColor
      }`}>
      <div className="py-2">
        <h1 className="text-3xl  border-x-8 md:text-4xl py-2 px-2 font-extrabold font-title text-center rounded-full border-purple-700 bg-gradient-to-r from-purple-700 to-cyan-300 bg-clip-text text-transparent duration-300">
          Tasty Bites
        </h1>
      </div>
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        Menu
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-10 right-0 w-40  bg-slate-900 p-4">
          <ul className="flex flex-col items-center gap-4">
            <Link
              to="/"
              className={`text-base  hover:text-pink-500 ${
                location.pathname === '/' && 'text-pink-500  '
              }`}
              onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link
              to="/category"
              className={`text-base  hover:text-pink-500 ${
                location.pathname === '/category' && 'text-pink-500  '
              }`}
              onClick={toggleMobileMenu}>
              Category
            </Link>
            <Link
              to="/about"
              className={`text-base  hover:text-pink-500 ${
                location.pathname === '/about' && 'text-pink-500   '
              }`}
              onClick={toggleMobileMenu}>
              About Us
            </Link>
          </ul>
        </div>
      )}
      {/* Desktop menu */}
      <ul className="hidden md:flex justify-center items-center gap-12 font-bold">
        <Link
          to="/"
          className={`text-base md:text-lg drop-shadow-2xl hover:text-pink-500 duration-300 ease-in-out rounded-sm ${
            location.pathname === '/' && 'text-pink-500  '
          }`}>
          Home
        </Link>
        <Link
          to="/category"
          className={`text-base md:text-lg drop-shadow-2xl hover:text-pink-500 duration-300 ease-in-out rounded-sm ${
            location.pathname === '/category' && 'text-pink-500  '
          }`}>
          Category
        </Link>
        <Link
          to="/about"
          className={`text-base md:text-lg drop-shadow-2xl hover:text-pink-500 duration-300 ease-in-out rounded-sm ${
            location.pathname === '/about' && 'text-pink-500   '
          }`}>
          About Us
        </Link>
      </ul>
    </header>
  );
};

export default Header;
