import React from 'react'

export default function ContainerApproach({icon, title, text}) {
  return (
    <div className='about__container__approach__info'>
      <div className="about__container__approach__info__diamond" data-animation="flip-in-x" >
        <div className="diamond__icon">
          {icon}
        </div>
      </div>
      <div className="about__container__approach__info__data" data-animation="fade-in">
        <h3 className="info__data__title">{title}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}
