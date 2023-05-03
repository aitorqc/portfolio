
import React from 'react';

import "./AboutSection.scss";

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JAVASCRIPT', level: 80 },
    { name: 'REACT', level: 70 },
    { name: 'PHP', level: 50 },
    { name: 'MySQL', level: 50 },
    { name: 'TYPESCRIPT', level: 50 },
    { name: 'NODE', level: 40 },
    { name: 'EXPRESS', level: 40 },
];

export default function AboutSection() {

    skills.sort((a, b) => b.level - a.level);

    return (
        <section className="about">
            <div className="about__content">
                <div className="about__text">
                    <h2 className="about__title">Sobre Mi</h2>
                    <p className="about__description">Desarrollador de software apasionado y entusiasta de la tecnología. Me encanta aprender y experimentar con nuevas tecnologías, y siempre estoy buscando mejorar mis habilidades de programación.</p>
                </div>
                <div className="about__image-container">
                </div>
            </div>
            <div className="about__skills">
                {skills.map(skill => (
                    <div
                        key={skill.name}
                        className={`about__skill`}
                        style={{ backgroundColor: getSkillColor(skill.name), height: `${skill.level}%` }}
                    >
                        <div className="about__skill-name">{skill.name}</div>
                    </div>
                ))}
            </div>
            <div className='about__skill-info'>
                Experiencia
            </div>
        </section>
    );
};

const getSkillColor = skillName => {
    switch (skillName) {
        case 'HTML':
            return '#ff8c00';
        case 'JAVASCRIPT':
            return '#ffee00';
        case 'REACT':
            return '#61DAFB';
        case 'CSS':
            return '#00487b';
        case 'PHP':
            return '#4455c2';
        case 'MySQL':
            return '#ffc400';
        case 'TYPESCRIPT':
            return '#00487b';
        case 'NODE':
            return '#313131';
        case 'EXPRESS':
            return '#fee844';
        default:
            return '#fff';
    }
};