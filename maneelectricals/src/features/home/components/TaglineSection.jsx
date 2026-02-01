import React, { useRef } from 'react'
import Colors from '../../../config/theme/colors/colors';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TaglineSection = () => {
    const taglinesRef = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: taglinesRef.current,
                start: 'center center',
                end: 'bottom bottom',
                pin: true,
                markers: true,
                toggleActions: 'play none none reverse'
            }}
        );

        timeline.set('#hero', { yPercent: 100 })
        gsap.utils.toArray('#hero h2').forEach((tagline, idx) => {
            timeline.set(tagline, { opacity:1 })
            
            timeline.from(tagline, {
                opacity: 0,
                duration: 0.7,
                yPercent: 120,
                scale: 0.6,
                ease: 'power4.out',
            })
            
            timeline.to('#hero', {
                yPercent: '-=25',
                duration: 0.7,
                ease: 'power1.out',
            }, '-=0.5')
        });
    });
    
    return (
        <section ref={taglinesRef} className="py-[10vh] relative w-full flex flex-col items-center justify-center text-[7vw] font-extrabold">
            <div id='hero' className='w-full flex flex-col items-center'>
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