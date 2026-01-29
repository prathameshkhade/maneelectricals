import React from 'react';

import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

import Bulb from '../../../components/common/Bulb';

const HeroSection = () => {
    const bulbRef = useRef(null);
    const titleRef = useRef(null);
    
    gsap.registerPlugin(SplitText);
    useGSAP(() => {
        var timeline = gsap.timeline();
        const split = SplitText.create(titleRef.current, {
            type: 'chars, lines',
            mask: 'lines',
            autoSplit: true,
        });

        timeline
            .from(split.chars, {
                y: 200,
                opacity: 0,
                stagger: 0.1,
                onComplete: () => split.revert()
            })
            .from(bulbRef.current.children, {
                duration: 2.5,
                x: 'random(-500, 500)',
                y: 'random(-460, 460)',
                opacity: 0,
                ease: "power3.out",
                stagger: 0.13
            }, '0')            
    }, [])

    return (
        <section className='w-full h-screen relative flex'>

            {/* Bulbs */}
            <div ref={bulbRef} className="w-full h-screen relative overflow-hidden z-10">
                
                {/* Yellow */}
                <div className="absolute top-7 left-12">
                    <Bulb color="#FFEB01" width={289} height={289} rotation={113} />
                </div>

                {/* Cyan */}
                <div className="absolute top-20 right-20">
                    <Bulb color="#00FFFF" width={341} height={341} rotation={17} />
                </div>

                {/* magenta */}
                <div className="absolute bottom-12 right-32">
                    <Bulb color="#FF10F0" width={280} height={280} rotation={-57} />
                </div>

                {/* green */}
                <div className="absolute bottom-20 left-20">
                    <Bulb color="#00FF00" width={397} height={397} rotation={56} />
                </div>

                {/* blue */}
                <div className="absolute -bottom-20 left-120">
                    <Bulb color="#0d00ff" width={397} height={397} rotation={23} />
                </div>

                {/* indigo */}
                <div className="absolute top-5 left-100">
                    <Bulb color="#ff0000" width={365} height={365} rotation={-43} />
                </div>
            </div>

            <div className="w-full h-screen absolute flex flex-col items-center justify-center z-0">
                <h1 ref={titleRef} className='text-7xl text-white font-bold'>We Light Up <br /> Your World!</h1>
            </div>

        </section>
    );
}

export default HeroSection