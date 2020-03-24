import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
    <header className="header">
        <img className="header__img" src='src/assets/images/play.png' alt="logo"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src='src/assets/images/play.png' alt="imagen de icono"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="">Cuenta</a></li>
                <li><a href="">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;