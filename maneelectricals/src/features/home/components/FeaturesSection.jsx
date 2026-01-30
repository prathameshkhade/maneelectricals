import React from 'react'

import { Cable, Fan, Lightbulb, ToggleRight } from 'lucide-react';

import { Colors } from '../../../config/theme/colors/colors';
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
    return (
        <section className='w-full h-screen flex flex-col items-center justify-around'>
            <section className="flex-1 text-center m-16">
                <h2 className="text-[10vh] font-bold">
                    <span className="">Power Your </span>
                    <span style={{ color: Colors.magenta }}>Imagination</span>
                </h2>
                <p className="text-white/90 font-bold text-[3vh] max-w-2xl mx-auto">
                    From tiny LED bulbs to complete electrical installations — 
                    we've got everything to electrify your vision.
                </p>
            </section>

                        {/* Cards */}
            <section className="flex-3 w-full overflow-x-auto flex items-center">
                <div className="flex gap-16 w-max mx-[12vw]">
                {
                    features.map((feature, i) => {
                        const Icon = feature.icon;

                        return (
                            <div 
                                key={i}
                                style={{outlineColor:feature.color}} 
                                className="bg-white/25 shrink-0 w-[30vw] rounded-[3vw] py-10 px-8 flex flex-col gap-6 outline-2"
                            >
                                <div className="w-16 h-16 bg-white/50 flex items-center p-3 rounded-[2vw]">
                                    <Icon width={60} height={60} />
                                </div>
                                <p className="text-[2.5vw] font-bold">{feature.title}</p>
                                <p className="text-[1.3vw]">{feature.description}</p>
                            </div>
                        );
                    })
                }
                </div>
            </section>

        </section>
    )
}

export default FeaturesSection