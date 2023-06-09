import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import ENVELOPE from '../assets/envelope.png';

import './ContactSection.scss';

export default function ContactSection() {
    return (
        <section className="contact">
            <h3>Quieres Contactar?</h3>
            <div className='contact__container'>
                <div className='contact__info'>
                    <h2 className="contact__heading">Ponerse En Contacto</h2>
                    <p>Si está interesado en obtener más información sobre mi experiencia, no dudes en ponerte en contacto conmigo. Estoy abierto a discutir oportunidades que se alineen con mis habilidades e intereses.</p>
                    <a href="mailto:aquinoacordero@gmail.com">
                        <img src={ENVELOPE} alt="mail" />
                    </a>
                </div>
                <div className="contact__links">
                    <a href="https://www.linkedin.com/in/aitor-quinoa-web-developer/" className="contact__links__item" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/aitorqc" className="contact__links__item" rel="noopener noreferrer" target="_blank">
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                </div>
                <a class="contact__link__project" href="https://github.com/aitorqc/portfolio" rel="noopener noreferrer" target="_blank">
                    <div>Diseñado &amp; Desarrollado por Aitor Quiñoa</div>
                </a>
            </div>
        </section>
    )
}
