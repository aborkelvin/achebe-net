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

export default function OpenSource() {
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
                <section className="bg-[#120F11] bg-hero-image bg-no-repeat bg-cover bg-center min-h-[380vh] lg:min-h-screen relative pb-5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>
                    <div className="relative z-10">
                        <Header toggleSidebar={toggleSidebar} />
                        <div className="relative py-2.5 lg:py-[80px] px-4 md:px-7 lg:px-12 xl:px-[100px]">
                            <h1 className='text-3xl xl:text-4xl font-semibold mb-[22px]' >
                                BOOKS
                            </h1>
                            <div className='mb-7 text-brand-white mx-auto relative flex flex-col lg:flex-row justify-between items-center gap-5' >
                                <div className="w-full h-fit p-3.5 lg:p-4 xl:p-7 border-2 lg:border-[4px] border-brand-white rounded-2xl" >
                                    <h1 className='text-transparent bg-clip-text font-bold text-[32px] lg:text-4xl xl:text-[40px] mb-2.5 font-fjalla'
                                        style={{
                                            backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 26.39%)",
                                            backgroundSize: '100%',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text'
                                        }}
                                    >
                                        01.
                                    </h1>
                                    <h2 className='mb-[14px] text-4xl xl:text-[44px] font-bold xl:leading-[46px] tracking-[-1px] font-fjalla ' >
                                        THINGS <br /> FALL APART
                                    </h2>
                                    <p className='mb-8 lg:mb-12 xl:mb-[90px] text-xs lg:text-sm xl:text-base ' >
                                        Indigenous communities can use their <br /> voting rights to decide which stories are <br /> shared publicly and how they are presented.
                                    </p>
                                    <PrimaryButton
                                        name='CONTRIBUTE'
                                        className='px-[53px] py-4 font-bold'
                                    />
                                </div>
                                <div className="w-full h-fit p-3.5 lg:p-4 xl:p-7 border-2 lg:border-[4px] border-brand-white rounded-2xl" >
                                    <h1 className='text-transparent bg-clip-text font-bold text-[32px] lg:text-4xl xl:text-[40px] mb-2.5 font-fjalla'
                                        style={{
                                            backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 26.39%)",
                                            backgroundSize: '100%',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text'
                                        }}
                                    >
                                        02.
                                    </h1>
                                    <h2 className='mb-[14px] text-4xl xl:text-[44px] font-bold xl:leading-[46px] tracking-[-1px] font-fjalla ' >
                                        NO LONGER <br /> AT EASE
                                    </h2>
                                    <p className='mb-8 lg:mb-12 xl:mb-[90px] text-xs lg:text-sm xl:text-base ' >
                                        Indigenous communities can use their <br /> voting rights to decide which stories are <br /> shared publicly and how they are presented.
                                    </p>
                                    <PrimaryButton
                                        name='CONTRIBUTE'
                                        className='px-[53px] py-4 font-bold'
                                    />
                                </div>
                                <div className="w-full h-fit p-3.5 lg:p-4 xl:p-7 border-2 lg:border-[4px] border-brand-white rounded-2xl" >
                                    <h1 className='text-transparent bg-clip-text font-bold text-[32px] lg:text-4xl xl:text-[40px] mb-2.5 font-fjalla'
                                        style={{
                                            backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 26.39%)",
                                            backgroundSize: '100%',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text'
                                        }}
                                    >
                                        03.
                                    </h1>
                                    <h2 className='mb-[14px] text-4xl xl:text-[44px] font-bold xl:leading-[46px] tracking-[-1px] font-fjalla ' >
                                        A MAN OF THE <br /> PEOPLE
                                    </h2>
                                    <p className='mb-8 lg:mb-12 xl:mb-[90px] text-xs lg:text-sm xl:text-base ' >
                                        Indigenous communities can use their <br /> voting rights to decide which stories are <br /> shared publicly and how they are presented.
                                    </p>
                                    <PrimaryButton
                                        name='CONTRIBUTE'
                                        className='px-[53px] py-4 font-bold'
                                    />
                                </div>
                            </div>
                            {/* <svg className='mx-auto mb-6' width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.446857 13.6617L0.446857 10.3383L25.4077 10.3383L17.6413 2.57191L19.9984 0.214887L31.7835 12L19.9984 23.7851L17.6413 21.4281L25.4077 13.6617L0.446857 13.6617Z" fill="white"/>
                            </svg> */}
                            <img
                                src="/images/arrowRight.svg"
                                alt=""
                                className='mx-auto mb-6 w-5 h-5 lg:w-7 lg:h-7'
                            />
                            <h1 className='text-3xl xl:text-4xl font-semibold mb-[22px]' >
                                CONVERSATIONS
                            </h1>
                            <div className='w-full h-[430px] text-brand-white mx-auto relative flex flex-col lg:flex-row gap-10' >
                                <div className='relative overflow-hidden min-h-[460px] md:min-h-[430px] w-full lg:w-[50%] border-2 lg:border-[4px] border-brand-white rounded-2xl py-3.5 lg:py-7 pl-3.5 lg:pl-7 ' >
                                    <h1 className='xl:max-w-[95%] mb-3.5 text-3xl xl:text-4xl font-bold tracking-[-1px] xl:leading-[53px] font-fjalla'>
                                        COLONIALISM AND CENTRALIZATION - THE SIMILARITY
                                    </h1>
                                    <p className='mb-5 z-10 max-w-[80%] relative text-xs md:text-sm lg:text-base '>
                                        Chinua Achebe was known for giving voice to the African experience in the context of colonialism through his literature works. What is the similarity between this and a centralized economy?
                                    </p>
                                    <PrimaryButton
                                        name="CONTRIBUTE"
                                        className='px-11 lg:px-12 py-3 lg:py-4 font-bold z-10'
                                    />
                                    <img
                                        src={'/images/image11.png'}
                                        width={120}
                                        height={100}
                                        /* layout='responsive' */
                                        alt='Chinua Achebe'
                                        className='w-[60%] md:w-[40%] lg:w-[50%] xl:w-[40%] absolute bottom-0 right-0 z-0'
                                    />
                                </div>
                                <div className='relative overflow-hidden min-h-[460px] md:min-h-[430px] w-full lg:w-[50%] border-2 lg:border-[4px] border-brand-white rounded-2xl py-3.5 lg:py-7 pl-3.5 lg:pl-7 ' >
                                    <h1 className='xl:max-w-[95%] mb-3.5 text-3xl xl:text-4xl font-bold tracking-[-1px] xl:leading-[53px] font-fjalla'>
                                        RESISTING CENTRALIZATION AND MANIPULATION
                                    </h1>
                                    <p className='mb-5 z-10 max-w-[80%] relative text-xs md:text-sm lg:text-base '>
                                        We can preserve our cultural stories and histories in a way that resists centralization, manipulation, maintains originality and empower the decentralized world.
                                    </p>
                                    <PrimaryButton
                                        name="CONTRIBUTE"
                                        className='px-11 lg:px-12 py-3 lg:py-4 font-bold'
                                    />
                                    <img
                                        src={'/images/image10.png'}
                                        width={120}
                                        height={100}
                                        /* layout='responsive' */
                                        alt='Chinua Achebe'
                                        className='w-[90%] md:w-[60%] lg:w-[70%] xl:w-[55%] absolute bottom-0 right-0 z-0'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FOOTER SECTION */}
                <Footer />
            </main>
        </div>
    )
}
