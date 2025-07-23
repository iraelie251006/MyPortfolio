/* eslint-disable @next/next/no-img-element */
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {" "}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap justify-center items-center p-4 gap-x-16 gap-y-7 mt-10'>
            {projects.map(({id, title, img, des, iconLists, link}) => (
                <div key={id} className='lg:min-h-[32.5rem] h-[32rem] sm:h-[41rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex justify-center items-center sm:w-96 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img src={img} alt="title" className='z-10 absolute bottom-0 '/>
                        </div>
                        <h1 className='font-bold md:text-xl text-base line-clamp-1'>{title}</h1>
                        <p className='lg:text-base font-light text-sm mt-2 line-clamp-2'>{des}</p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center gap-1'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                    <img src={icon} alt="icon" className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <Link href={link} target='_blank' className='flex text-sm text-purple'>Check Live Site</Link>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects