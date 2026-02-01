import React, { useRef } from 'react'
import { Cable, Fan, Lightbulb, ToggleRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Colors from '../../../config/theme/colors/colors';
import Card from './Card';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const features = [
    {
        icon: Lightbulb,
        color: Colors.red,
        title: 'Premium Lighting',
        description: 'LED, incandescent, and smart bulbs for every space. Energy-efficient solutions that last.',
    },
    {
        icon: Cable,
        color: Colors.blue,
        title: 'Quality Wiring',
        description: 'Industrial-grade cables and wires. Safe, durable, and built to handle any load.',
    },
    {
        icon: Fan,
        color: Colors.magenta,
        title: 'Ceiling Fans',
        description: 'Designer and energy-star rated fans. Whisper-quiet operation with powerful airflow.',
    },
    {
        icon: ToggleRight,
        color: Colors.green,
        title: 'Smart Switches',
        description: 'Modular switches and boards. From classic to smart home automation ready.',
    },

    // duplicate entires
    {
        icon: Lightbulb,
        color: Colors.yellow,
        title: 'Premium Lighting',
        description: 'LED, incandescent, and smart bulbs for every space. Energy-efficient solutions that last.',
    },
    {
        icon: Cable,
        color: Colors.blue,
        title: 'Quality Wiring',
        description: 'Industrial-grade cables and wires. Safe, durable, and built to handle any load.',
    },
    {
        icon: Fan,
        color: Colors.magenta,
        title: 'Ceiling Fans',
        description: 'Designer and energy-star rated fans. Whisper-quiet operation with powerful airflow.',
    },
    {
        icon: ToggleRight,
        color: Colors.green,
        title: 'Smart Switches',
        description: 'Modular switches and boards. From classic to smart home automation ready.',
    },
];

const FeaturesSection = () => {
    const cardRef = useRef(null);
    const mainRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        // Tagline character animation - "Power Your Imagination"
        if (titleRef.current) {
            const chars = titleRef.current.querySelectorAll('.char');
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 40%',
                    end: 'center 30%',
                    toggleActions: "play none none reverse",
                }
            });

            // Animate each character from different positions with stagger
            chars.forEach((char, i) => {
                tl.from(char, {
                    x: 'random(-60, 60)',
                    y: 'random(-60, 60)',
                    scaleX: 'random(-1, 1)',
                    scaleY: 'random(-1, 2)',
                    xPercent: 'random(-100, 360)',
                    yPercent: 'random(100, 360)',
                    rotation: 'random(-100, 100)',
                    opacity: 0,                    
                    duration: 1.1,
                    ease: 'back.out(2)',
                }, i * 0.03);
            });

            // Continuous floating animation
            // chars.forEach((char, i) => {
            //     gsap.to(char, {
            //         y: 'random(-2, 2)',
            //         rotation: 'random(-1, 1)',
            //         duration: 'random(3, 5)',
            //         repeat: -1,
            //         yoyo: true,
            //         ease: 'sine.inOut',
            //         delay: i * 0.6,
            //     });
            // });

            // split the chars/words in subtitle
            const subtitleSplit = SplitText.create(subtitleRef.current, {
                type: 'chars, words, lines',
                mask: 'words',
                autoSplit: true,
            });

            // subtitle animation
            tl.from(subtitleSplit.chars, {
                x: 'random(-60, 60)',
                y: 'random(-60, 60)',
                scaleX: 'random(-1, 1)',
                scaleY: 'random(-1, 2)',
                xPercent: 'random(-100, 360)',
                yPercent: 'random(-100, 360)',
                rotation: 'random(-100, 100)',
                opacity: 0,                    
                duration: 1.1,
                stagger: {
                    each: 0.02,
                    from: 'random'
                },
                ease: 'back.out(2)',
            }, '-=0.65');
        }

        // horizontal scroll
        gsap.to(cardRef.current, {
            x: () => -cardRef.current.scrollWidth + window.innerWidth / 2,
            duration: 2,
            ease: 'power1.out',
            stagger: 1,
            scrub: 1,
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'top center',
                end: () => "+=" + (cardRef.current.scrollWidth / 3),
                pin: mainRef.current,
                scrub: 0.75,
                invalidateOnRefresh: true
            }
        })

        // Cards comming from left animation
        document.querySelectorAll('#card').forEach((card) => {
            gsap.from(card, {
                x: 300,
                duration: 1,
                ease: 'sine.out',
                opacity: 0,
                scrub: 0.75,
                scrollTrigger: {
                    trigger: card,
                    start: '-=75 center',
                    end: 'top bottom+100',
                    toggleActions: 'play none none reverse',
                    invalidateOnRefresh: true,
                }
            })
        })
    });

    return (
        <section className='w-full pt-[15vh] pb-[12vh]'>
            <div ref={mainRef}>
                <div className=" text-center m-16">
                    <h1 ref={titleRef} className="text-[6vw] font-bold">
                        <span className="">
                            {'Power Your '.split('').map((char, i) => (
                                <span key={i} className="char inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
                                    {char}
                                </span>
                            ))}
                        </span>
                        <span style={{ color: Colors.magenta }}>
                            {'Imagination'.split('').map((char, i) => (
                                <span key={i} className="char inline-block">
                                    {char}
                                </span>
                            ))}
                        </span>
                    </h1>
                    <p ref={subtitleRef} className="text-white/50 font-bold text-[3vh] max-w-2xl mx-auto">
                        From tiny LED bulbs to complete electrical installations — 
                        we've got everything to electrify your vision.
                    </p>
                </div>

                {/* Cards */}
                <div id='horizontal-section' className=" w-full overflow-x-hidden flex items-center py-4">
                    <div ref={cardRef} className="flex gap-16 w-max mx-[26vw]">
                    {
                        features.map(
                            (feature, i) => <Card
                                key={i}
                                feature={feature}
                                index={i}
                            /> 
                        )
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection