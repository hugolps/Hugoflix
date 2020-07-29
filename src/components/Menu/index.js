import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/index';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Hugoflix Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;