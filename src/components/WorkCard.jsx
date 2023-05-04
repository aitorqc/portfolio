import React from 'react'

import './WorkCard.scss';

export default function WorkCard({id, imageUrl, title, description, tags, demoUrl, codeUrl}) {
    return (
        <div key={id} className="work__card">
            <img className="work__image" src={imageUrl} alt={title} />
            <div className="work__info">
                <h3 className="work__title">{title}</h3>
                <p className="work__description">{description}</p>
                <div className="work__tags">
                    {tags.map((tag) => (
                        <span key={tag} className="work__tags__tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="work__links">
                    <a href={demoUrl} className="work__links__link" target="_blank" rel="noopener noreferrer">
                        Link
                    </a>
                    <a href={codeUrl} className="work__links__link" target="_blank" rel="noopener noreferrer">
                        Codigo
                    </a>
                </div>
            </div>
        </div>
    )
}
