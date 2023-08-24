import React from "react";
import './Sidebar.css'
import { slide as Menu } from "react-burger-menu";

const Sidebar = (props) => {
    return (
        <Menu {...props} >
            <a className="menu-item" href="#aboutus">
                О нас
            </a>

            <a className="menu-item" href="#products">
                Продукция
            </a>
            <a className="menu-item" href="#price">
                Цены
            </a>

            <a className="menu-item" href="#contacts">
                Контакты
            </a>
        </Menu>
    )
}

export default Sidebar