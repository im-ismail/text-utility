import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/'>TextUtils</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='features'>Features</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='about'>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='contact'>Contact Us</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar