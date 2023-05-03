import React from 'react';

import { GiMouse } from 'react-icons/gi';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

import "./HomeSection.scss";

import AVATAR from '../assets/avatar.png';

export default function HomeSection() {

    return (
        <section className="home">
            <div className="home__image-container">
                <img src={AVATAR} alt="avatar" className="home__image" />
            </div>
            <div className="home__title">
                <h1>Aitor Quiñoa</h1>
                <h3>Web Developer</h3>
                <div className='home__title-breakPoint'>
                    <div className='breakPoint'></div>
                    <div className="icon"><GiMouse /></div>
                    <div className='breakPoint'></div>
                </div>
            </div>
            <div className="home__skills">
                <ul>
                    <li>𝗙𝗿𝗼𝗻𝘁-𝗘𝗻𝗱</li>
                    <li className='home__skills-breakPoint'><VscDebugBreakpointLogUnverified/></li>
                    <li>𝗕𝗮𝗰𝗸-𝗘𝗻𝗱</li>
                    <li className='home__skills-breakPoint'><VscDebugBreakpointLogUnverified/></li>
                    <li>𝐖𝐞𝐛 𝗗𝗲𝘀𝗶𝗴𝗻</li>
                    <li className='home__skills-breakPoint'><VscDebugBreakpointLogUnverified/></li>
                    <li>𝗨𝗜/𝗨𝗫</li>
                </ul>
            </div>
        </section>
    );
};