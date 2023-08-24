import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill, BsInstagram, BsFacebook, BsFillEnvelopeFill, BsFillGeoAltFill } from 'react-icons/bs'
function TopHeader() {

    return (
        <div className={`invisible md:visible fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out border-b-2`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-12 md:h-12">
                    {/* Site branding */}
                    <div className="flex-shrink-0 mr-4">
                        <div className="md:flex md:items-center md:justify-between">
                            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                                <a href="tel:+996706888869">
                                    <li className="flex items-center text-sm text-gray-600 mr-4 gap-1 cursor-pointer hover:text-black">
                                        <BsFillTelephoneFill />
                                        <p>+996(706)88-88-69 </p>
                                    </li>
                                </a>
                                <a href="mailto:kerimbekov1233@gmail.com">
                                    <li className="ml-4 flex items-center text-sm text-gray-600 mr-4 gap-2 cursor-pointer hover:text-black">
                                        <BsFillEnvelopeFill />
                                        <p>email@mail.com</p>
                                    </li>
                                </a>
                                <li className="ml-4 flex items-center text-sm text-gray-600 mr-4 gap-1 cursor-pointer hover:text-black">
                                    <BsFillGeoAltFill/>
                                    <p>Кыргызстан, г.Бишкек, ул.  </p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Social links */}
                    <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
                        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li className="ml-4">
                                <Link
                                    to="#"
                                    className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                    aria-label="Instagram"
                                >
                                    <BsInstagram className='text-lg' />
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link
                                    to="#"
                                    className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                    aria-label="Facebook"
                                >
                                    <BsFacebook className='text-xl' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TopHeader;
