import React from 'react';
import { useTranslation } from 'react-i18next';
import {BsAwardFill, BsShieldFillCheck, BsFillPatchCheckFill, BsBookmarkCheckFill, BsFillHouseGearFill, BsHourglassSplit} from 'react-icons/bs'

function FeaturesBlocks() {
  const { t } = useTranslation()
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 max-w-[18ch]">
              {t("ourskills")}
            </h2>
            <p className="text-xl text-gray-600">
            {t("ourskillstext")}
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsAwardFill className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              {t("skills1")}
              </h4>
              <p className="text-gray-600 text-center">{t("skill1text")}</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsShieldFillCheck className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              {t("skills2")}
              </h4>
              <p className="text-gray-600 text-center">{t("skills2text")}</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsBookmarkCheckFill className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              {t("skills3")}
              </h4>
              <p className="text-gray-600 text-center">{t("skills3text")}</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsHourglassSplit className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              {t("skills4")}
              </h4>
              <p className="text-gray-600 text-center">{t("skills4text")}</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsFillPatchCheckFill  className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              {t("skills5")}
              </h4>
              <p className="text-gray-600 text-center">{t("skills5text")}</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsFillHouseGearFill className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              {t("skills6")}
              </h4>
              <p className="text-gray-600 text-center">{t("skills6text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
