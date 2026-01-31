// src/features/home/pages/Index.jsx
import React, { useRef } from 'react'
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TaglineSection from '../components/TaglineSection';

export const Index = () => {
    return (
        <main className='min-h-screen flex flex-col z-0'>
            <HeroSection />
            <FeaturesSection />
            <TaglineSection />
        </main>
    );
}
