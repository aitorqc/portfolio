import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import './Header.scss';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        
        <header className={`${scrolled ? 'scrolled' : ""}`}>
            <div className="logo">
                <Link to="/">
                    <h1><span>A</span><span>i</span><span>t</span><span>o</span><span>r</span> <span>Q</span></h1>
                </Link>
            </div>
            <Navbar />
        </header>
    )
}

