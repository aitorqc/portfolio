import React from 'react'

import './WorkSection.scss';

const works = [
    {
        id: 1,
        title: 'Cosmetic E-commerce',
        description: 'Web de cosmeticos desarrollada con React y CSS ',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/cosmetic-ecommerce/main/public/captura.png',
        tags: ['React', 'HTML', 'CSS', 'frame-motion'],
        demoUrl: 'https://cosmeticommerce.42web.io/',
        codeUrl: 'https://github.com/aitorqc/cosmetic-ecommerce',
    },
    {
        id: 2,
        title: 'FitClub',
        description: 'Web de afiliación a un programa de entreno',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/fitclub/main/public/Captura.png',
        tags: ['React', 'HTML', 'CSS'],
        demoUrl: 'https://aitorqc.github.io/fitclub',
        codeUrl: 'https://github.com/aitorqc/fitclub',
    },
    {
        id: 3,
        title: 'ReactFlix',
        description: 'Listado de películas populares y extrenos',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/reactflix/master/public/Captura.png',
        tags: ['React', 'CSS', 'Firebase', 'API'],
        demoUrl: 'https://reactflix-60a70.web.app/',
        codeUrl: 'https://github.com/aitorqc/reactflix',
    },
    {
        id: 4,
        title: 'Game Store',
        description: 'Listado de videojuegos con filtro por categorias',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/game-store/main/public/Captura.png',
        tags: ['React', 'HTML', 'Tailwind', 'Vite'],
        demoUrl: 'https://aitorqc.github.io/game-store',
        codeUrl: 'https://github.com/aitorqc/game-store',
    },
    {
        id: 5,
        title: 'Digital E-commerce',
        description: 'Web de venta para dispositivos de sonido',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/ecommerce/main/public/Captura1.png',
        tags: ['React', 'Next', 'Vercel', 'CSS'],
        demoUrl: 'https://ecommerce-nine-blue.vercel.app/',
        codeUrl: 'https://github.com/aitorqc/ecommerce',
    },
    {
        id: 6,
        title: 'Gym App',
        description: 'Created my personal portfolio website using Gatsby',
        imageUrl: 'https://raw.githubusercontent.com/aitorqc/gym-app/main/public/Captura2.png',
        tags: ['React', 'MUI', 'API'],
        demoUrl: 'https://aquicor.epizy.com/',
        codeUrl: 'https://github.com/aitorqc/gym-app',
    },
];

export default function WorkSection() {
    return (
        <div className="work">
            <div className="work__list">
                {works.map((work) => (
                    <div key={work.id} className="work__card">
                        <img className="work__image" src={work.imageUrl} alt={work.title} />
                        <div className="work__info">
                            <h3 className="work__title">{work.title}</h3>
                            <p className="work__description">{work.description}</p>
                            <div className="work__tags">
                                {work.tags.map((tag) => (
                                    <span key={tag} className="work__tags__tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="work__links">
                                <a href={work.demoUrl} className="work__links__link" target="_blank" rel="noopener noreferrer">
                                    Link
                                </a>
                                <a href={work.codeUrl} className="work__links__link" target="_blank" rel="noopener noreferrer">
                                    Codigo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
