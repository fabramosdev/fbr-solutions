import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.png';
import '../../styles/components/aside.css';

function Aside() {
  return (
    <aside id="menu_aside">

      <header>
        <img src={logoImg} alt="FBR Solutions" width="80" />
        <span>FBR Solutions</span>

        <Link to="/about"><h2>Sobre</h2></Link>
        <Link to="/map"><h2>Localização</h2></Link>
        <Link to="/contact"><h2>Contato</h2></Link>
        <Link to="/linkedin"><h2>Linkedin</h2></Link>
        <Link to="/github"><h2>Gihtub</h2></Link>
      </header>

      <footer>
        <strong>Duque de Caxias</strong>
        <span>Rio de Janeiro</span>
      </footer>

    </aside>
  );
}

export default Aside;
