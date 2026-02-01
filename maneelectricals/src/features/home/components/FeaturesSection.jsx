import React, { useRef } from 'react'
import { Cable, Fan, Lightbulb, ToggleRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Colors from '../../../config/theme/colors/colors';
import Card from './Card';

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

    useGSAP(() => {
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
                    <h1 className="text-[6vw] font-bold">
                        <span  className="">Power Your </span>
                        <span style={{ color: Colors.magenta }}>Imagination</span>
                    </h1>
                    <p className="text-white/90 font-bold text-[3vh] max-w-2xl mx-auto">
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