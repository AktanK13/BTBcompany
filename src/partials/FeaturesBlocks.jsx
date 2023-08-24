import React from 'react';
import {BsAwardFill, BsShieldFillCheck, BsFillPatchCheckFill, BsBookmarkCheckFill, BsFillHouseGearFill, BsHourglassSplit} from 'react-icons/bs'

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 max-w-[18ch]">
              Наши преимущества
            </h2>
            <p className="text-xl text-gray-600">
              Покупайте бетон у производителя,
              без посредников и переплат!
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsAwardFill className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Надёжность
              </h4>
              <p className="text-gray-600 text-center">
              Надёжность производства обеспечивают современное оборудование, отвечающее всем международным стандартам суммарной мощностью выпуска 100 м³ бетона в 1 час.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsShieldFillCheck className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Гарантия
              </h4>
              <p className="text-gray-600 text-center">
              Собственная лаборатория с высококвалифицированным персоналом позволяет следить за высоким качеством продукции на всех этапах.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsBookmarkCheckFill className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Сертификация

              </h4>
              <p className="text-gray-600 text-center">
              Все марки товарного бетона и растворов сертифицированы.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsHourglassSplit className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Точный расчёт
              </h4>
              <p className="text-gray-600 text-center">
              Собственный автопарк оборудован новейшей системой GPS-навигацией, что позволяет точно рассчитывать время и поставлять бетон в сроки.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsFillPatchCheckFill  className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Качество
              </h4>
              <p className="text-gray-600 text-center">
              Качество продукции — все материалы, используемые в производстве, соответствуют ГОСТ и имеют высокие качества.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-[280px]" data-aos="zoom-y-out">
              <BsFillHouseGearFill className='text-white text-[55px] rounded-full  bg-red-600 p-3'/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Технологии
              </h4>
              <p className="text-gray-600 text-center">
              В наличии миксеры от 3 м³ до 11 м³, автопомпы от 45 до 55 м, стационарные помпы мощностью подачи до 100 метров.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
