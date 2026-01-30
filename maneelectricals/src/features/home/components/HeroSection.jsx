import React from 'react';
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText, ScrollSmoother, ScrollTrigger } from 'gsap/all';

import Bulb from '../../../components/common/Bulb';

import { Colors } from '../../../config/theme/colors/colors';

const HeroSection = () => {
    const bulbRef = useRef(null);
    const titleRef = useRef(null);
    
    gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

    useGSAP(() => {
        // Smoother -- Smooth Scroller
        const smoother = ScrollSmoother.create({
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: true,
            wrapper: bulbRef.parent,
        });

        const split = SplitText.create(titleRef.current, {
            type: 'chars, lines',
            mask: 'lines',
            autoSplit: true,
        });

        // First - Intro animation
        const timeline = gsap.timeline();   
        timeline
            .from(split.chars, {
                y: 200,
                opacity: 0,
                stagger: 0.1,
                onComplete: () => split.revert()
            })
            .from(bulbRef.current.children, {
                duration: 2.2,
                y: 200,
                opacity: 0,
                ease: "power4.inOut",
                stagger: 0.13
            }, '0')
            
        const parallax = gsap.timeline({
            scrollTrigger: {
                trigger: bulbRef.current,
                start: 'top top',
                end: 'bottom top',
                // scrub: 1,
            }
        });

        parallax
            .to(bulbRef.current.children, {
                rotate: 'random(-180, 180)',
                translateZ: 200,
                duration: 1,
                stagger: 0.02,
                ease: "sine.out"
            });
    }, [])

    return (
        <section className='w-full h-screen relative flex'>

            {/* Bulbs */}
            <div ref={bulbRef} className="w-full h-screen relative overflow-hidden z-10">
                
                {/* Yellow */}
                <div data-speed='0.64' data-lag="0.35" className="absolute -top-20 left-12">
                    <Bulb color={Colors.yellow} width={289} height={289} rotation={113} />
                </div>

                {/* Cyan */}
                <div data-speed='0.78' data-lag="0.35" className="absolute top-20 right-20">
                    <Bulb color={Colors.cyan} width={341} height={341} rotation={17} />
                </div>

                {/* magenta */}
                <div data-speed='0.91' data-lag="0.35" className="absolute bottom-12 right-32">
                    <Bulb color={Colors.magenta} width={400} height={400} rotation={-57} />
                </div>

                {/* green */}
                <div data-speed='0.77' data-lag="0.35" className="absolute bottom-10 left-20">
                    <Bulb color={Colors.green} width={357} height={357} rotation={56} />
                </div>

                {/* blue */}
                <div data-speed='0.86' data-lag="0.35" className="absolute -bottom-10 left-120">
                    <Bulb color={Colors.blue} width={340} height={340} rotation={23} />
                </div>

                {/* red */}
                <div data-speed='0.65' data-lag="0.35" className="absolute -top-50 left-100">
                    <Bulb color={Colors.red} width={365} height={365} rotation={-43} />
                </div>
            </div>

            <div className="w-full h-screen absolute flex flex-col items-center justify-center z-0">
                <h1 data-speed='0.7' ref={titleRef} className='text-7xl text-white font-bold'>We Light Up <br /> Your World!</h1>
            </div>

        </section>
    );
}

export default HeroSection;