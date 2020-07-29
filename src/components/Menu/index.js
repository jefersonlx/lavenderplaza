import React from 'react';
import Logo from '../../assets/img/logo2.png';
// link do React é responsável pelo comportamento [S]ingle [P]age [A]pplication
import {Link } from 'react-router-dom';

import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink'

function Menu() {

    return (
         <nav className = "Menu" >
        <Link to = "/" >
             <img className="Logo" src ={Logo} alt="Logo da AluraFlix"></img>
              </Link> 
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
            </Button>
            {/* button as="a" faz com que o button tenha o comportamento de um [a]nchor */}
        {/* <ButtonLink className="ButtonLink" href="/">
            este é um children 2
            </ButtonLink> */}
        </nav>
    );
}
export default Menu