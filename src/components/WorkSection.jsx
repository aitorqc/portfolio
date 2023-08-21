import React from 'react'

import WorkCard from './WorkCard';

import './WorkSection.scss';

let works = [
    {
        title: 'Blog about programming',
        description: 'blog de programación donde los usuarios pueden leer y compartir artículos',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/blog-programacion/main/images/captures/home.png',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        demoUrl: 'https://blogaboutprogramming.online',
        codeUrl: 'https://github.com/aitorqc/blog-programacion',
    },
    {
        title: 'Cosmetic E-commerce',
        description: 'Web de cosmeticos desarrollada con React y CSS ',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/cosmetic-ecommerce/main/public/captura.png',
        tags: ['React', 'HTML', 'CSS', 'frame-motion'],
        demoUrl: 'https://cosmeticommerce.42web.io/',
        codeUrl: 'https://github.com/aitorqc/cosmetic-ecommerce',
    },
    {
        title: 'FitClub',
        description: 'Web de afiliación a un programa de entreno',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/fitclub/main/public/Captura.png',
        tags: ['React', 'HTML', 'CSS'],
        demoUrl: 'https://aitorqc.github.io/fitclub',
        codeUrl: 'https://github.com/aitorqc/fitclub',
    },
    {
        title: 'ReactFlix',
        description: 'Listado de películas populares y extrenos',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/reactflix/master/public/Captura.png',
        tags: ['React', 'CSS', 'Firebase', 'API'],
        demoUrl: 'https://reactflix-60a70.web.app/',
        codeUrl: 'https://github.com/aitorqc/reactflix',
    },
    {
        title: 'Game Store',
        description: 'Listado de videojuegos con filtro por categorias',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/game-store/main/public/Captura.png',
        tags: ['React', 'HTML', 'Tailwind', 'Vite'],
        demoUrl: 'https://aitorqc.github.io/game-store',
        codeUrl: 'https://github.com/aitorqc/game-store',
    },
    {
        title: 'Digital E-commerce',
        description: 'Web de venta para dispositivos de sonido',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/ecommerce/main/public/Captura1.png',
        tags: ['React', 'Next', 'Vercel', 'CSS'],
        demoUrl: 'https://ecommerce-nine-blue.vercel.app/',
        codeUrl: 'https://github.com/aitorqc/ecommerce',
    },
    {
        title: 'Gym App',
        description: 'Guía de ejercicios para los distinto grupos musculares',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/gym-app/main/public/Captura2.png',
        tags: ['React', 'MUI', 'API'],
        demoUrl: 'https://aquicor.epizy.com/',
        codeUrl: 'https://github.com/aitorqc/gym-app',
    },
];

works = works.map((item, index) => ({
    ...item,
    id: index + 1,
}));

export default function WorkSection() {

    return (
        <div className="work" >
            <div className="work__list">
                {works.map((work, index) => (
                    <WorkCard key={index} {...work} />
                ))}
            </div>
        </div >
    )
}
