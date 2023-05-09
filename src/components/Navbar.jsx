import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import './Navbar.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation().pathname;

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={handleToggle}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/about" className={location === "/about" ? "nav-links selected" : "nav-links"} onClick={handleToggle}>
                        Sobre mi
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/work" className={location === "/work" ? "nav-links selected" : "nav-links"} onClick={handleToggle}>
                        Proyectos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={location === "/contact" ? "nav-links selected" : "nav-links"} onClick={handleToggle}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
