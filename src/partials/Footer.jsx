import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook, } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { message, } from 'antd';

function Footer() {
  const form = useRef();
  const [sendstatus, setSendStatus] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Ваш заявка была успешно отправлена',
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
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
              <p className='text-2xl font-bold'>Контакты</p>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <p>Наш адрес</p>
              <p className='text-lg font-bold'>Кыргызстан, г.Бишкек, ул. </p>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <p>Наши телефоны</p>
              <a href="tel:+996552676758" className='text-lg font-bold'>+996(552)67-67-58</a>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <p>WhatsApp</p>
              <a href="tel:+996706888869" className='text-lg font-bold'>+996(0706)88-88-69</a>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <p>Email адрес</p>
              <a href="mailto:kerimbekov1233@gmail.com" className='text-lg font-bold'>email@mail.com</a>
            </div>
          </div>


          {/* 2th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-6">
            <h6 className="text-gray-800 font-bold mb-2 text-2xl">Обратная связь</h6>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <input
                      id="name"
                      name="user_name"
                      type="name"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Как Вас зовут?"
                      required
                    />
                    <input
                      id="tele"
                      name="user_telephone"
                      type="tel"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Ваш номер телефона"
                      required
                    />

                  </div>
                  <div className='flex'>
                    <textarea
                      id="message"
                      name='message'
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm h-20"
                      placeholder="Ваше сообщение"
                      required
                    />
                  </div>
                  {sendstatus ? <p className='text-red-700 text-sm'>Упс! Что-то пошло не так</p> : <></>}
                  <input
                    className='bg-gray-900 text-white w-[150px] py-2 px-10 rounded-md cursor-pointer hover:bg-gray-800 '
                    type="submit"
                    value="Send" />
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

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Copyright &copy; 2023 CompanyName. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
