import React from 'react';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
import image3 from '../public/Picture1.png'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";


function Features() {
  const { t } = useTranslation()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsFillArrowRightSquareFill fill='#000' />,
    prevArrow: <BsFillArrowLeftSquareFill fill='#000' />
  };

  return (
    <section className="relative bg-gray-100 pb-12" id='aboutus'>
      <div
        className="absolute inset-0 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="zoom-out-right">
              <div className="pr-4 mb-8">
                <h1 className="h3 mb-3">{t("aboutcompany")}</h1>
                <h1 className="text-xl text-gray-600">
                  <span className='font-bold text-gray-800'>{t("company")} </span> {t("aboutcompanytext")}</h1>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 px-6 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
            >
              <Slider {...settings}>
                <div>
                  <img src={image3}  alt='ОсОО «БТБ компани» – производит готовый товарный бетон, с доставкой на строительные площадки. Продажа и доставка бетона любой марки.' />
                </div>
                <div>
                  <img src={image3} alt='ОсОО «БТБ компани» – производит готовый товарный бетон, с доставкой на строительные площадки. Продажа и доставка бетона любой марки.' />

                </div>
                <div>
                  <img src={image3} alt='ОсОО «БТБ компани» – производит готовый товарный бетон, с доставкой на строительные площадки. Продажа и доставка бетона любой марки.' />
                </div>
                <div>
                  <img src={image3} alt='ОсОО «БТБ компани» – производит готовый товарный бетон, с доставкой на строительные площадки. Продажа и доставка бетона любой марки.' />

                </div>
                <div>
                  <img src={image3} alt='ОсОО «БТБ компани» – производит готовый товарный бетон, с доставкой на строительные площадки. Продажа и доставка бетона любой марки.' />

                </div>
                <div>
                  <img src={image3} alt='ОсОО «БТБ компани» – производит готовый товарный бетон, с доставкой на строительные площадки. Продажа и доставка бетона любой марки.' />

                </div>
              </Slider>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
