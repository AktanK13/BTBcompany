import { useState } from 'react';
import './sidebar.css'
import { slide as Menu } from "react-burger-menu";
import { useTranslation } from 'react-i18next';

const Sidebar = (props) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    console.log(isOpen, 'isOpen');
    return (
        <Menu {...props} isOpen={isOpen} >
            <a className='menu-items' href="#aboutus" onClick={closeMenu}>
                {t("about")}
            </a>

            <a className='menu-items' href="#products" onClick={closeMenu}>
                {t("products")}
            </a>
            <a className='menu-items' href="#price" onClick={closeMenu}>
                {t("prices")}
            </a>

            <a className='menu-items' href="#contacts" onClick={closeMenu}>
                {t("contacts")}
            </a>
            {
                i18n.language === 'ru' ?
                    <button
                        className=" menu-item btn text-xs p-2 bg-gray-800 w-full sm:w-auto sm:ml-1"
                        onClick={() => changeLanguage("kg")}>KG</button>
                    :
                    <button
                        className=" menu-item btn text-xs p-2 bg-gray-800 w-full sm:w-auto sm:ml-1"
                        onClick={() => changeLanguage("ru")}>RU</button>
            }
        </Menu>
    )
}

export default Sidebar