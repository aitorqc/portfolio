import React from 'react'

export default function ContainerWho({ doc, photo }) {
    return (
        <div className="about__container__who">
            <div className="about__container__who__info">
                <h2>Quien Soy?</h2>
                <p>Desarrollador de software apasionado y entusiasta de la tecnología. Me encanta aprender y experimentar con nuevas tecnologías, y siempre estoy buscando mejorar mis habilidades de programación.</p>
                <p>Aporto una combinación única de habilidades técnicas y habilidades blandas que me convierten en una excelente opción para un puesto como desarrollador.</p>
                <a href={doc} className="about__container__who__info__cv" target="_blank" rel="noreferrer">Conocer más</a>
            </div>
            <div className="about__container__who__image">
                <div className="image-frame-1"></div>
                <img src={photo} alt="Yo" />
                <div className="image-frame-2"></div>
            </div>
        </div>
    )
}
