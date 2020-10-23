import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.png';
import '../../styles/pages/home.css';

function Home() {
  return (
    <div id="page_home">
      <div className="content_wrapper">
        <img src={logoImg} alt="FBR Solutions" width="80" />

        <main>
          <h1>FBR Solutions</h1>
          <p>Desenvolvimento Web e Mobile</p>
        </main>

        <div className="location">
          <strong>Duque de Caxias</strong>
          <span>Rio de Janeiro</span>
        </div>

        <Link to="/app" className="enter_app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
