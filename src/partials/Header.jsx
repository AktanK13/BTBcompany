import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/logo.png'

function Header() {
  const [top, setTop] = useState(true);
  let width = window.innerWidth;
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full py-3 mt-0 sm:mt-16 z-30 md:bg-opacity-90 transition duration-300 ease-in-out 
      ${!top && 'bg-white backdrop-blur-sm shadow-lg shadow-red-300/10 sm:mt-0'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="BTB company">
              <img
                className="h-24"
                src={logo}
                alt="Kontenbase Logo"
              />
            </Link>
          </div>

          {/* Site navigation */}


          {
            width >= 768 ?
              <nav className="flex flex-grow">
                <ul className="flex flex-grow justify-end flex-wrap items-center">
                  <li>
                    <a
                      href="#aboutus"
                      className="font-bold text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      О нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="font-bold text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Продукция
                    </a>
                  </li>
                  <li>
                    <a
                      href="#price"
                      className="font-bold text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Цены
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contacts"
                      className="font-bold text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Контакты
                    </a>
                  </li>

                </ul>
              </nav>
              :
              <></>
          }

        </div>
      </div>
    </header>
  );
}

export default Header;
