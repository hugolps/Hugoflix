import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/index';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img src={Logo} className="Logo" alt="Hugoflix Logo"/>
            </a>

            <Button as="a" href="/" className="ButtonLink">Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;