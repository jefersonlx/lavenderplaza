import React from 'react';
import Logo from '../../assets/img/logo2.png';
import './Menu.css'
import Button from '../Button';
// import ButtonLink from './components/ButtonLink'

function Menu() {

    return (
         <nav className = "Menu" >
        <a href = "/" >
             <img className="Logo" src ={Logo} alt="Logo da AluraFlix"></img>
              </a> 
        <Button as="a" className="ButtonLink" href="/">
            Novo Vídeo
            </Button>
            {/* button as="a" faz com que o button tenha o comportamento de um [a]nchor */}
        {/* <ButtonLink className="ButtonLink" href="/">
            este é um children 2
            </ButtonLink> */}
        </nav>
    )
}
export default Menu