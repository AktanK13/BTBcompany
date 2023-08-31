import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillSendFill, BsInstagram, BsTelegram, BsWhatsapp , BsFillPatchCheckFill} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { notification, } from 'antd';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation()
  const form = useRef();
  const [sendstatus, setSendStatus] = useState(false);
  const [messageApi, contextHolder] = notification.useNotification();

  const success = () => {
    messageApi.success({
      message: 'Ваш заявка была успешно отправлена',
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zwhbsjz', 'template_3ar6o1p', form.current, 'H4zDm6D6dW5tkxgxX')
      .then((result) => {
        console.log(result.text);
        result.text === "OK" ? setSendStatus(false) : setSendStatus(true)
        success()
        document.getElementById('name').value = ''
        document.getElementById('tele').value = ''
        document.getElementById('message').value = ''
      }, (error) => {
        console.log(error.text);
        error ? setSendStatus(true) : setSendStatus(false)
        document.getElementById('name').value = ''
        document.getElementById('tele').value = ''
        document.getElementById('message').value = ''
      });
  };

  return (
    <footer id='contacts'>
      {contextHolder}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className=" sm:col-span-12 lg:col-span-6">
            <div className="mb-2">
              <p className='text-2xl font-bold'>{t("contacts")}</p>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <p>{t("ouradress")}</p>
              <p className='text-lg font-bold'>Кыргызстан, г.Бишкек, ул. </p>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <p>{t("ourtel")}</p>
              <a href="tel:+996505281361" className='text-lg font-bold'>+996(505) 28-13-61</a>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <p>WhatsApp</p>
              <a href="https://wa.me/996226906966" target="_blank" className='text-lg font-bold'>+996(226) 90-69-66</a>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <p>{t("ouremail")}</p>
              <a href="mailto:kerimbekov1233@gmail.com" className='text-lg font-bold'>email@mail.com</a>
            </div>
          </div>


          {/* 2th block */}
          <div className="sm:col-span-12 md:col-span-6 lg:col-span-6">
            <h6 className="text-gray-800 font-bold mb-2 text-2xl">{t("callback")}</h6>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <input
                      id="name"
                      name="user_name"
                      type="name"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder={t("name")}
                      required
                    />
                    <input
                      id="tele"
                      name="user_telephone"
                      type="tel"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder={t("telephone")}
                      maxLength="10"
                      required
                    />

                  </div>
                  <div className='flex'>
                    <textarea
                      id="message"
                      name='message'
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm h-20"
                      placeholder={t("massage")}
                      required
                    />
                  </div>
                  {sendstatus ? <p className='text-red-700 text-sm'>Упс! Что-то пошло не так</p> : <></>}
                  <button
                    className=' flex items-center justify-center gap-3 bg-gray-900 text-white max-w-[250px] max-h-10 py-2 px-10 rounded-md cursor-pointer hover:bg-gray-800  hover:text-[1.1rem]'
                    type="submit"
                  >
                    <BsFillSendFill />
                    {t("send")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a
                href="https://www.instagram.com/"
                className="flex justify-center items-center text-gray-600 hover:text-[#c32aa3] bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Instagram"
              >
                <BsInstagram className='text-xl hover:text-[1.35rem]' />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://t.me/usercoder"
                className="flex justify-center items-center text-gray-600 hover:text-[#0088cc] bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Telegram"
              >
                <BsTelegram className='text-xl hover:text-[1.35rem]' />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://wa.me/996226906966" target="_blank"
                className="flex justify-center items-center text-gray-600 hover:text-[#25d366] bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="WhatsApp"
              >
                <BsWhatsapp className='text-xl hover:text-[1.35rem]' />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            2023 &copy;  <span className='font-bold'>BTB company</span>. {t("rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
