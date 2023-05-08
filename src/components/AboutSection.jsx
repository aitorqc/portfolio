
import React from 'react';

import { MdDesignServices } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import { RiUserSearchLine } from 'react-icons/ri';

import "./AboutSection.scss";

import PHOTO from '../assets/photo.png';
import DOC from '../assets/CV_Aitor_Quiñoa_A.pdf';

export default function AboutSection() {

    return (
        <section className="about">
            <div class="about__container__who">
                <div class="about__container__who__info">
                    <h2>Quien Soy?</h2>
                    <p>Desarrollador de software apasionado y entusiasta de la tecnología. Me encanta aprender y experimentar con nuevas tecnologías, y siempre estoy buscando mejorar mis habilidades de programación.</p>
                    <p>Aporto una combinación única de habilidades técnicas y habilidades blandas que me convierten en una excelente opción para un puesto como desarrollador.</p>
                    <a href={DOC} class="about__container__who__info__cv" target="_blank" rel="noreferrer">Conocer más</a>
                </div>
                <div class="about__container__who__image">
                    <div class="image-frame-1"></div>
                    <img src={PHOTO} alt="Yo" />
                    <div class="image-frame-2"></div>
                </div>
            </div>

            <div class="about__container__outlook">
                <div className='about__container__outlook__info'>
                    <div class="about__container__outlook__info__diamond" data-animation="flip-in-x" >
                        <div class="diamond__icon">
                            <RiUserSearchLine />
                        </div>
                    </div>
                    <div class="about__container__outlook__info__data" data-animation="fade-in">
                        <h3 class="info__data__title">Fast</h3>
                        <p>
                            Fast load times and lag free interaction, my highest
                            priority.
                        </p>
                    </div>
                </div>
                <div className='about__container__outlook__info'>
                    <div class="about__container__outlook__info__diamond" data-animation="flip-in-x" >
                        <div class="diamond__icon">
                            <RiUserSearchLine />
                        </div>
                    </div>
                    <div class="about__container__outlook__info__data" data-animation="fade-in">
                        <h3 class="info__data__title">Fast</h3>
                        <p>
                            Fast load times and lag free interaction, my highest
                            priority.
                        </p>
                    </div>
                </div>
                <div className='about__container__outlook__info'>
                    <div class="about__container__outlook__info__diamond" data-animation="flip-in-x" >
                        <div class="diamond__icon">
                            <RiUserSearchLine />
                        </div>
                    </div>
                    <div class="about__container__outlook__info__data" data-animation="fade-in">
                        <h3 class="info__data__title">Fast</h3>
                        <p>
                            Fast load times and lag free interaction, my highest
                            priority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
