import React, { useState } from 'react'

export default function SkillCard({ skill, icons }) {
    const [rotateX, setRotateX] = useState("");
    const [rotateY, setRotateY] = useState("");

    const handleMouseMove = (event) => {
        const card = event.currentTarget.getBoundingClientRect();
        const cardCenterX = card.left + card.width / 2;
        const cardCenterY = card.top + card.height / 2;
        const offsetX = event.clientX - cardCenterX;
        const offsetY = event.clientY - cardCenterY;
        const rotateX = offsetY / cardCenterY * 10;
        const rotateY = offsetX / cardCenterX * -10;

        setRotateX(rotateX*5);
        setRotateY(rotateY*5)

        console.log(rotateX*8, rotateY*8)
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };


    return (
        <div className="skill__card"
            style={{transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className='skill__card__content'>
                <h2>{skill}</h2>
                <div className='skill__card__content__img'>
                    {
                        icons.map((item, index) => <img key={index} src={item} alt={skill} />)
                    }
                </div>
            </div>
        </div>
    )
}
