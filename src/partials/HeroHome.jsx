import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillTelephoneFill, BsInstagram , } from 'react-icons/bs'


function HeroHome() {
  const { t } = useTranslation()
  let width = window.innerWidth;
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 -z-1 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width={`${width}`}
          height="578"
          viewBox={`0 0 ${width} 578`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx={`${width}`} cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-screen ">
        {/* Hero content */}
        <div className="pt-36 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className=" pt-28 text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span>БТБ компани</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                {t("herotext")}
              </p>
              <div
                className="max-w-xs gap-10 mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className='mb-6'>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 sm:w-auto sm:ml-4 hover:text-[1.1rem] min-w-[300px] max-h-[3rem] "
                    href="#contacts"
                  >
                    <BsFillTelephoneFill className='mr-2' />
                    {t("callus")}
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-red-600 hover:bg-red-700 w-full mb-4 sm:w-auto sm:mb-0 hover:text-[1.1rem] min-w-[250px] max-h-[3rem]
                    "
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                     <BsInstagram className='text-lg mr-2' />
                     {t("ourinst")}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroHome;
