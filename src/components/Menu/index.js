import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png';
// link do React é responsável pelo comportamento [S]ingle [P]age [A]pplication

import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo da AluraFlix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>

    </nav>
  );
}
export default Menu;
