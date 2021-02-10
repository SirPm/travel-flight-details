import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {

    const [ open, setOpen ] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <header className='header'>
            <div className="header_inner_div">
                <Link className='logo_link' to='/'>LOGO</Link>
                <div className="menu-btn" onClick={toggleMenu}>
                    <span className={` ${ open ? 'open' : '' }  menu-btn__burger`}></span>
                </div>
                <nav className={` ${ open ? 'open' : '' } nav`}>                
                    <ul className={` ${ open ? 'open' : '' } menu-nav`}>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><Link to="/" className="menu-nav__link" onClick={toggleMenu}>Home</Link></li>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><Link to="/tvshows" className="menu-nav__link" onClick={toggleMenu}>TV Shows</Link></li>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><Link to="/actors" className="menu-nav__link" onClick={toggleMenu}>Actors</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;