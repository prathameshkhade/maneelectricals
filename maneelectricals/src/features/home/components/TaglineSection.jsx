import React, { useRef } from 'react'
import Colors from '../../../config/theme/colors/colors';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/all';

gsap.registerPlugin(Flip)

const TaglineSection = () => {
    const taglinesRef = useRef(null);

    useGSAP(() => {
        // Configure the timeline with ScrollTrigger
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: taglinesRef.current,
                start: 'center center',
                end: 'bottom bottom',
                pin: true,
            }}
        );

        // Collect all the h2 of #hero
        var heroTexts = gsap.utils.toArray('#hero h2');

        timeline.set('#hero', { yPercent: 100 })  // Move #hero to -100% on y axis
        heroTexts.forEach((tagline) => {
            timeline.set(tagline, { opacity:1 })
            
            timeline.from(tagline, {
                opacity: 0,
                duration: 0.9,
                yPercent: 125,
                scale: 0.6,
                ease: 'power4.out',
            })
            
            timeline.to('#hero', {
                yPercent: '-=25',
                duration: 0.7,
                ease: 'power1.out',
            }, '<')
        });

        timeline.call(() => {
            const state = Flip.getState('#hero h2');
            const hero = document.querySelector('#hero');
            hero.classList.replace('items-center', 'items-start');
        
            Flip.from(state, {
                duration: 0.8,
                ease: 'power1.out',
            });
        });
    });
    
    return (
        <section ref={taglinesRef} className="py-[10vh] relative w-full flex flex-col justify-center text-[7vw] font-extrabold">
            <div id='hero' className='w-full flex flex-col items-center will-change-transform'>
                <h2>
                    <span>POWERING YOUR </span>
                    <span style={{color : Colors.yellow}}>DREAMS</span>
                </h2>

                <h2>
                    <span>WIRED FOR </span>
                    <span style={{color : Colors.blue}}>EXCELLENCE</span>    
                </h2>

                <h2>
                    <span>SPARKING </span>
                    <span style={{color : Colors.magenta}}>INNOVATION</span>
                </h2>

                <h2>
                    <span>BRIGHTER </span>
                    <span style={{color : Colors.green}}>CONNECTIONS</span>
                </h2>
            </div>
        </section>
    )
}

export default TaglineSection