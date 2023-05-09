import React from 'react';
import { useState, useEffect } from "react";
// import Typical from 'react-typical'

import { TfiMouseAlt } from 'react-icons/tfi';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

import "./HomeSection.scss";

import AVATAR from '../assets/avatar.png';

export default function HomeSection() {
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Web Developer"
    )
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 100)
        }
    }, [index]);

    return (
        <section className="home">
            <div className="home__image-container">
                <img src={AVATAR} alt="avatar" className="home__image" />
            </div>
            <div className="home__title">
                <h1>Aitor Quiñoa</h1>
                {/* <Typical
                    steps={["Web Developer", 2000, "Front-end", 2000, "Back-end", 2000, "Design", 2000, "UI/UX", 2000]}
                    loop={Infinity}
                    wrapper='p'
                /> */}
                <p>{text}</p>
                <div className='home__title-breakPoint'>
                    <div className='breakPoint'></div>
                    <div className="icon"><TfiMouseAlt /></div>
                    <div className='breakPoint'></div>
                </div>
            </div>
            <div className="home__skills">
                <ul>
                    <li>𝗙𝗿𝗼𝗻𝘁-𝗘𝗻𝗱</li>
                    <li className='home__skills-breakPoint'><VscDebugBreakpointLogUnverified /></li>
                    <li>𝗕𝗮𝗰𝗸-𝗘𝗻𝗱</li>
                    <li className='home__skills-breakPoint'><VscDebugBreakpointLogUnverified /></li>
                    <li>𝐖𝐞𝐛 𝗗𝗲𝘀𝗶𝗴𝗻</li>
                    <li className='home__skills-breakPoint'><VscDebugBreakpointLogUnverified /></li>
                    <li>𝗨𝗜/𝗨𝗫</li>
                </ul>
            </div>
        </section>
    );
};