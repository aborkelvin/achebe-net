"use client";

import { useState } from 'react';

import Image from 'next/image'
import Header from '../_components/header/header'
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton'
import Footer from '../_components/footer'
import Sidebar from '../_components/sidebar';

// TODO: FONT sizes and families are not yet implemented
// TODO: Add the background vectors to the hero section with the appropriate padding
//TODO: Responsive design for the whole page

export default function About() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    
    return (
        <div className="flex">
            <Sidebar 
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            <main
                className={`text-brand-white font-oxanium w-full ${isSidebarOpen ? "blur" : ""}`}
                onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
            >
                {/* HERO SECTION */}
                <section className="bg-[#120F11] bg-hero-image bg-no-repeat bg-cover bg-center min-h-screen relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>
                    <div className="relative z-10 h-full">
                        <Header toggleSidebar={toggleSidebar} />
                       <div className=' flex flex-col gap-1 lg:gap-0 lg:flex-row items-center min-h-[90vh]' >
                            <div className='px-4 md:px-7 lg:pl-12 xl:pl-[100px] pb-5 mt-[10px] lg:mt-[120px] max-w-full inline-block ' >
                                <div className='flex items-center gap-2 mb-1.5' >
                                    <span className='font-medium text-xl' >TO BUILD A</span>
                                    <hr className='border-2 border-brand-white w-[140px] rounded ' />
                                </div>
                                <h1 className='text-[24vw] font-fjalla md:text-[18vw] lg:text-[8vw] flex flex-col gap-0 leading-none tracking-tighter ' >
                                    DIGITAL
                                </h1>
                                <h1 className='text-[22vw] font-fjalla md:text-[18vw] lg:text-[7vw] lg:w-full flex flex-col gap-0 leading-none tracking-tighter' >
                                    TWIN OF
                                </h1>
                                <div className='flex items-center justify-end gap-2 mt-1.5 mb-7' >
                                    <hr className='border-2 border-brand-white w-[140px] rounded ' />
                                    <span className='font-medium text-xl' >A CULTURAL ICON</span>
                                </div>
                                <p className='mb-[62px] xl:text-xl phones:max-w-[340px] xphones:max-w-[389px] md:max-w-[510px] lg:max-w-[318px] xl:max-w-[560px]' >
                                    CHINUA ACHEBE, OFTEN REGARDED AS THE “
                                    <span className='text-transparent bg-clip-text'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }}
                                    >
                                        FATHER OF MODERN {` `}
                                    </span>
                                    LITERATURE”, WAS A STRONG ADVOCATE FOR AFRICAN LITERATURE AND HELPED TO ESTABLISH A PLATFORM FOR AFRICAN WRITERS TO SHARE THEIR STORIES WITH A GLOBAL AUDIENCE.
                                </p>
                                <PrimaryButton
                                    name='ASK ACHEBE.NET'
                                    className='px-6 py-4 font-bold'
                                />
                            </div>
                            {/* TODO: Complete the arrangement of this image and the background vectors here later in the day */}
                            <div className='ml-auto relative lg:absolute right-0 lg:-bottom-10' >
                                <img
                                    src={'/images/image122.png'}
                                    //width={150}
                                    //height={700}
                                    //layout='responsive'
                                    alt='Chinua Achebe'
                                    className='z-50 w-full h-[300px] md:h-[400px] lg:h-[520px] xl:h-[700px]'
                                />
                                <div className ="absolute top-10 md:top-14 -right-20 lg:top-32 lg:-right-4 -z-10 ">
                                    <img
                                        src={'/images/Vector1.png'}
                                        //width={120}
                                        //height={100}
                                        //layout='responsive'
                                        alt='Chinua Achebe'
                                        className="w-[300px] h-[280px] lg:w-[400px] lg:h-[400px] "
                                    />
                                </div>
                                <div className ="absolute bottom-0 -left-0  md:-bottom-40 md:-left-40 lg:-bottom-60 lg:-left-20 -z-10 ">
                                    {/* Background line vector */}
                                    <img
                                        src={'/images/Vector2.png'}
                                        //width={120}
                                        //height={100}
                                        //layout='responsive'
                                        alt='Chinua Achebe'
                                        className="w-[150px] h-[120px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ABOUT CHINUA ACHEBE SECTION */}
                {/* OPEN SOURCE LIBRARY SECTION */}
                <section className='py-12 lg:py-[100px] px-4 md:px-7 lg:px-12 xl:px-[100px] bg-[#120F11] bg-[url(/images/image3.png)] bg-no-repeat bg-cover bg-center min-h-screen relative' >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>
                    <div className="relative">
                        <div className='mb-10 lg:mb-14' >
                            <h1 className="font-fjalla text-5xl lg:text-[75px] tracking-tighter font-bold  text-center lg:leading-[100px]">
                                TEAM SUPER'S <br />
                                <span
                                    className='text-transparent bg-clip-text text-6xl lg:text-[75px]'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
            
                                    }}
                                >
                                    {" "}
                                    SOLUTION
                                </span>
                            </h1>
                        </div>
            
                        <div className='mb-5 lg:mb-10 px-3 py-7 lg:p-10 2xl:p-14 w-full md:w-[80%] lg:w-[75%] max-w-[1050px] border-2 lg:border-[4px] border-brand-white rounded-2xl mx-auto relative' >
                            <p className='text-center font-medium text-2xl lg:text-[40px] lg:leading-[50px] ' >
                                OUR PROJECT IS A WEB APPLICATION WHERE USERS CAN
                                <span
                                    className='text-transparent bg-clip-text font-bold'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
            
                                    }}
                                > ASK QUESTIONS </span>
                                ABOUT CHINUA ACHEBE AND ACHEBE.NET PROVIDES ANSWERS STRICTLY ON CHINUA ACHEBE. IT ALSO ALLOWS USERS CONTRIBUTE TO THE
                                <span
                                    className='text-transparent bg-clip-text font-bold'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
            
                                    }}
                                > SUSTAINABILITY OF THE AFRICAN CULTURE </span>
                                IN THE DIGITAL WORLD AND EVENTUALLY
                                <span
                                    className='text-transparent bg-clip-text font-bold'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
            
                                    }}
                                > GIVE BACK TO </span>
                                THESE INDIGENOUS COMMUNITIES.
                            </p>
                        </div>
                    </div>
                </section>
            
                <Footer />
            </main>
        </div>
    )
}
