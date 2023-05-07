
import React from 'react';

import "./AboutSection.scss";

import PHOTO from '../assets/photo.png';

export default function AboutSection() {

    return (
        <section className="about">
            <div class="about__container__who">
                <div class="about__container__who__text">
                    <h2>Quien Soy?</h2>
                    <p>Desarrollador de software apasionado y entusiasta de la tecnología. Me encanta aprender y experimentar con nuevas tecnologías, y siempre estoy buscando mejorar mis habilidades de programación.</p>
                </div>
                <div class="about__container__who__image">
                    <div class="image-frame-1"></div>
                    <img src={PHOTO} alt="Yo" />
                    <div class="image-frame-2"></div>
                </div>
            </div>
        </section>
    );
};
