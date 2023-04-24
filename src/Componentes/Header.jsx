import React from 'react';

import './Header.scss';

export const Header = () => {
    return (
        <header>
            <div class="logo">
                <h1>Your Name</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
