import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logoImg from '../../../img/logo.png'
const MainLayout = () => {
    return (
<div>
    <nav  className="navbar navbar-expand-lg navbar-light bg-light sticky-top bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="img-fluid img-thumbnail" width="100" height="100" src={logoImg} alt="LogoImg"></img>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink to='/' className="nav-link text-info" aria-current="page">Головна</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/menu' className="nav-link text-info">Меню</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link text-info">Про нас</NavLink>
              </li>
            </ul>
          </div>
            <a className="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
</svg>
            </a>
        </div>
      </nav>
      
      <Outlet/>

      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p>© 2024 Піца Кафе. Усі права захищені.</p>
        </div>
      </footer>

</div>)
}

    export default MainLayout