"use client"

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
const MagicButton = dynamic(() => import('./ui/MagicButton'), { ssr: false });

import { FaLocationArrow } from 'react-icons/fa6'
import dynamic from 'next/dynamic';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
            <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic with Next.js</h2>

                <TextGenerateEffect 
                 words='Transforming Concepts into Seamless User Experiences'
                 className='text-center text-[40px] md:text-5xl lg:text-6xl'
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Hi 👋, I&apos;m Elie, a Software Engineer based in Rwanda 🇷🇼
                </p>
                <a href="#about">
                    <MagicButton
                     title='Show My Work'
                     icon={<FaLocationArrow />}
                     position='right'
                     handleClick={() => {}}
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero