import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import './Navbar.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={handleToggle}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={handleToggle}>
                        Sobre mi
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/work" className="nav-links" onClick={handleToggle}>
                        Proyectos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={handleToggle}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
