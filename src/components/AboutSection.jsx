
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
import tsIcon from '../assets/skill-icons/typescript.png';
import phpIcon from '../assets/skill-icons/php.png';
import nodeIcon from '../assets/skill-icons/nodejs.png';
import expIcons from '../assets/skill-icons/express-js.png';
import gitIcon from '../assets/skill-icons/git.png';
import gitHubIcon from '../assets/skill-icons/github.png';
import gitLabIcon from '../assets/skill-icons/gitlab.png';
import btsIcon from '../assets/skill-icons/bootstrap.png';
import nxtIcon from '../assets/skill-icons/next-js.png'
import reactIcon from '../assets/skill-icons/react.png';
import sassIcon from '../assets/skill-icons/sass.png';
import twIcon from '../assets/skill-icons/tailwindcss.png';
import muiIcon from '../assets/skill-icons/material-ui.png';
import vsIcon from '../assets/skill-icons/visual-basico.png';
import postIcon from '../assets/skill-icons/postman.png';
import figmaIcon from '../assets/skill-icons/figma.png';
import mysqlIcon from '../assets/skill-icons/mysql.png';
import firebaseIcon from '../assets/skill-icons/firebase.png';
import mariaIcon from '../assets/skill-icons/mariadb.png';
import gantIcon from '../assets/skill-icons/gantt-chart.png';
import slackIcon from '../assets/skill-icons/slack.png';
import teamsIcon from '../assets/skill-icons/teams.png';
import trelloIcon from '../assets/skill-icons/trello.png';

export default function AboutSection() {

    const cards = [
        {
            skill: "Front-End",
            icons: [cssIcon, htmlIcon, jsIcon, tsIcon]
        },
        {
            skill: "Back-End",
            icons: [phpIcon, nodeIcon, expIcons]
        },
        {
            skill: "Bases de Datos",
            icons: [mysqlIcon, mariaIcon, firebaseIcon]
        },
        {
            skill: "Control de Versiones",
            icons: [gitIcon, gitHubIcon, gitLabIcon]
        },
        {
            skill: "Frameworks",
            icons: [btsIcon, nxtIcon]
        },
        {
            skill: "Librerias",
            icons: [reactIcon, sassIcon, twIcon, muiIcon]
        },
        
        {
            skill: "Herramientas de Desarrollo",
            icons: [vsIcon, postIcon, figmaIcon]
        },
        {
            skill: "Trabajo en Equipo",
            icons: [teamsIcon, slackIcon, trelloIcon, gantIcon]
        }
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
