import React, { useMemo } from 'react';
import { useState, useEffect } from "react";
// import Typical from 'react-typical'

import { TfiMouseAlt } from 'react-icons/tfi';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

import "./HomeSection.scss";

import AVATAR from '../assets/avatar.png';

export default function HomeSection() {
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const texts = useMemo(() => ["Web Developer",
        "Front-End",
        "Back-End",
        "Web Designer",
        "UI / UX"], []);

    useEffect(() => {
        const currentText = texts[index]
        if (text === currentText) {
            // If the current text has already been fully displayed,
            // wait for a few seconds and then move on to the next text
            setTimeout(() => {
                setIndex((index + 1) % texts.length);
                setText("");
            }, 3000)
        } else if (index < texts.length) {
            // If the current text hasn't been fully displayed yet,
            // display the next character after a short delay
            setTimeout(() => {
                setText(text + currentText[text.length]);
            }, 100)
        }
    }, [text, index, texts]);

    return (
        <section className="home">
            <div className="home__image-container">
                <img src={AVATAR} alt="avatar" className="home__image" />
            </div>
            <div className="home__title">
                <h1>Aitor Quiñoa</h1>
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