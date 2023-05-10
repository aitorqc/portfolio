
import React from 'react';


import { RiUserSearchLine } from 'react-icons/ri';
import { MdDesignServices } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';

import ContainerWho from './ContainerWho';
import ContainerApproach from './ContainerApproach';
import SkillCard from './SkillCard';

import "./AboutSection.scss";

import PHOTO from '../assets/photo.png';
import DOC from '../assets/CV_Aitor_Quiñoa_A.pdf';

import cssIcon from '../assets/skill-icons/css-3.png';
import htmlIcon from '../assets/skill-icons/html-5.png';
import jsIcon from '../assets/skill-icons/js.png';

export default function AboutSection() {

    const cards = [
        {
            skill: "Front-End",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        {
            skill: "Back-End",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        {
            skill: "Control de Versiones",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        {
            skill: "Frameworks",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        {
            skill: "Librerias",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        
        {
            skill: "Herramientas de Desarrollo",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        {
            skill: "Bases de Datos",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        {
            skill: "Seguridad Web",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        {
            skill: "Trabajo en Equipo",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
        {
            skill: "Aprendizaje continuo",
            icons: [cssIcon, htmlIcon, jsIcon]
        },
    ]

    return (
        <section className="about">
            <ContainerWho doc={DOC} photo={PHOTO} />

            <div className="about__container__approach">
                <ContainerApproach
                    icon={<RiUserSearchLine />}
                    title={"Investigación"}
                    text={"Familiarizarse con el proyecto y determinar métodos para abordar las necesidades y requisitos específicos del cliente."} />
                <ContainerApproach
                    icon={<MdDesignServices />}
                    title={"Diseño"}
                    text={"El diseño no solo es la apariencia superficial de un producto. Es un proceso de investigación de mercado, investigación técnica, y visualización de un concepto."} />
                <ContainerApproach
                    icon={<FaCode />}
                    title={"Desarrollo"}
                    text={"Los resultados de las fases de investigación y diseño se utilizan para el desarrollo de productos específicos, incluidos materiales, sistemas y métodos."} />
            </div>

            <div className='about__container__skills'>
                {cards.map((item, index) => {
                    return (
                        <SkillCard key={index} skill={item.skill} icons={item.icons} />
                    )
                })}
            </div>
        </section>
    );
};
