"use client";

import Image from 'next/image'
import { useState } from 'react';

import Header from './_components/header/header'
import PrimaryButton from '../_components/PrimaryButton/PrimaryButton'
import Footer from './_components/footer'
import Sidebar from './_components/sidebar'
import { Oxanium } from 'next/font/google';
import { useRouter } from 'next/navigation';
const oxanium = Oxanium({subsets:["latin-ext"]})


// TODO: FONT sizes and families are not yet implemented
// TODO: Add the background vectors to the hero section with the appropriate padding
//TODO: Responsive design for the whole page

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const router = useRouter();

    return (
        <div className={`flex`}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            <main
                className={`text-brand-white w-full ${isSidebarOpen ? "blur" : ""}`}
                onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
            >
                {/* HERO SECTION */}
                <section className="bg-[#120F11] bg-[url(/images/image2.png)] bg-no-repeat bg-cover bg-center min-h-screen relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>
                    <div className="relative z-10 h-full">
                        <Header toggleSidebar = {toggleSidebar} />
                        <div className=' flex flex-col gap-1 lg:gap-0 lg:flex-row items-center min-h-[90vh]' >
                            <div className='px-4 md:px-7 lg:pl-12 xl:pl-[100px] pb-5 mt-[10px] lg:mt-[120px] max-w-full inline-block ' >
                                <div className='flex items-center gap-2 mb-1.5' >
                                    <span className='font-medium text-xl' >MEET</span>
                                    <hr className='border-2 border-brand-white w-[140px] rounded ' />
                                </div>
                                <h1 className='text-[24vw] font-fjalla md:text-[18vw] lg:text-[8vw] flex flex-col gap-0 leading-none tracking-tighter ' >
                                    CHINUA
                                </h1>
                                <h1 className='text-[24vw] font-fjalla md:text-[18vw] lg:text-[8vw] lg:w-full flex flex-col gap-0 leading-none tracking-tighter' >
                                    ACHEBE
                                </h1>
                                <div className='flex items-center justify-end gap-2 mt-1.5 mb-7' >
                                    <hr className='border-2 border-brand-white w-[140px] rounded ' />
                                    <span className='font-medium text-xl' >THE DIGITAL ICON</span>
                                </div>
                                <p className='mb-[42px] xl:text-xl phones:max-w-[340px] xphones:max-w-[389px] md:max-w-[510px] lg:max-w-[318px] xl:max-w-[400px] lglaptops:max' >
                                    IF CULTURE WERE TO MEET TECHNOLOGY, HOW DO YOU THINK CHINUA ACHEBE’S AFRICAN LITERATURE NARRATIVE WILL BE PRESERVED  IN  A DECENTRALIZED WORLD.
                                </p>
                                <PrimaryButton
                                    name='ASK ACHEBE.NET'
                                    className='px-6 py-4 font-bold'
                                    onClick={()=> router.push('/ask')}
                                />
                            </div>
                            {/* TODO: Complete the arrangement of this image and the background vectors here later in the day */}
                            <div className='ml-auto relative lg:absolute right-0 lg:-bottom-10' >
                                <img
                                    src={'/images/image8.png'}
                                    //width={150}
                                    //height={700}
                                    //layout='responsive'
                                    alt='Chinua Achebe'
                                    className='z-50 w-full h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px]'
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
                <section className='py-12 lg:py-[100px] bg-[#120F11] bg-[url(/images/image3.png)] bg-no-repeat bg-cover bg-center min-h-[100vh] lg:min-h-screen relative' >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>
                    <div className="relative px-4">
                        <div className='mb-8 lg:mb-10 font-fjalla ' >
                            <h1 className="text-brand-white text-[46px] lg:text-[80px] tracking-tighter font-bold  text-center lg:leading-[100px]">
                                ABOUT
                                <span
                                    className='text-transparent bg-clip-text'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #60132C -16.51%, #FFF1FA 93.65%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
            
                                    }}
                                >
                                    {" " }CHINUA
                                </span>
                            </h1>
                            <h1 className="text-brand-white text-[54px] lg:text-[100px] tracking-tighter font-bold  text-center leading-8 lg:leading-[105px]">
                                <span
                                    className='text-transparent bg-clip-text'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #60132C -16.51%, #FFF1FA 93.65%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }} >
                                    ACHEBE.
                                </span>
                                NET
                            </h1>
                        </div>
            
                        <div className='text-[8px] md:text-xs lg:text-base mb-8 lg:mb-10 p-4 lg:p-10 2xl:p-14 w-full md:w-[80%] lg:w-[75%] max-w-[1050px] text-brand-white border-2 lg:border-[4px] border-brand-white rounded-2xl mx-auto relative' >
                            <p className=' ' >
                                Chinua Achebe will most likely be known for <br /> using technology to promote and preserve <br /> cultural narratives and indigenous knowledge
                            </p>
                            <p className='mb-20 lg:mb-[100px] text-right relative md:bottom-2' >
                                With achebe.net you can find the answers to <br /> all your questions about Chinua Achebe
                            </p>
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[900px] ' >
                                <h1 className='font-fjalla tracking-[-3px]
                                    text-[30px] lg:text-[50px] xl:text-[60px] text-center font-bold
                                    leading-[40px] lg:leading-[70px] text-transparent bg-clip-text'
                                    style={{
                                        backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)",
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }}
                                >
                                    THE DIGITAL <br /> TWIN OF <br /> CHINUA ACHEBE
                                </h1>
                            </div>
                            <p className='ml-2.5 xl:ml-8 mb-14 lg:mb-24' >
                                African cultural icon <br className='md:hidden' /> meets<br className='hidden md:block' /> decentralized <br className='md:hidden' /> digital technology
                            </p>
                            <p className='mb-4 lg:mb-9 text-right mr-1.5 lg:mr-3.5'>
                                Learn about the life and <br /> achievements of Chinua Achebe
                            </p>
                            <p className='ml-5 xl:ml-[59px]' >
                                <s>Colonialism</s> Centralization and <br /> its impact on African societies
                            </p>
                            <p className='relative lg:bottom-2 text-right mr-[18px] xl:mr-[36px]'>
                                Ask the digital version of Chinua Achebe how you <br /> can promote the African culture in the digital space
                            </p>
                        </div>
                        <div className='w-full md:w-[80%] lg:w-[75%] max-w-[1050px] min-h-[430px] text-brand-white mx-auto relative flex flex-col lg:flex-row gap-8 lg:gap-10' >
                            <div className='relative overflow-hidden lg:w-[57%] min-h-[280px] border-2 lg:border-[4px] border-brand-white rounded-2xl py-3.5 pb-10  lg:py-7 pl-3.5 lg:pl-7 ' >
                                <h1 className="mb-3 lg:mb-3.5 text-3xl xl:text-[44px] font-bold tracking-[-1px] lg:leading-[53px] text-transparent bg-clip-text font-fjalla
                                            relative z-10"
                                    style={{
                                        backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)",
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }}
                                >
                                    COMMUNITY <br /> GOVERNANCE
                                </h1>
                                <p className='mb-7 lg:mb-5 z-10 text-xs lg:text-base relative'>
                                    Indigenous communities can use their <br />voting rights to decide which stories are <br /> shared publicly and how they are presented.
                                </p>
                                <PrimaryButton
                                    name="COMING SOON"
                                    className='px-9 lg:px-12 py-3 lg:py-4 font-bold z-10 relative'
                                />
                                <img
                                    src={'/images/image13.png'}
                                    width={120}
                                    height={100}
                                    /* layout='responsive' */
                                    alt='Chinua Achebe'
                                    className='w-[50%] lg:w-[280px] lg:h-[355px] absolute bottom-0 right-0 z-0'
                                />
                            </div>
                            <div className='relative overflow-hidden lg:w-[43%] min-h-[350px] border-2 lg:border-[4px] border-brand-white rounded-2xl py-3.5 pb-10  lg:py-7 pl-3.5 lg:pl-7 ' >
                                <h1 className='mb-3 lg:mb-3.5 text-3xl xl:text-[44px] font-bold tracking-[-1px] lg:leading-[53px] text-transparent bg-clip-text font-fjalla z-10 relative'
                                    style={{
                                        backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)",
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }}
                                >
                                    OPEN SOURCE <br /> CONTRIBUTION
                                </h1>
                                <p className='mb-7 lg:mb-5 z-10 text-xs lg:text-base relative'>
                                    Become an advocate to ensure that these <br /> cultural stories are preserved in a way that <br /> resists centralization.
                                </p>
                                <PrimaryButton
                                    name="COMING SOON"
                                    className='px-9 lg:px-12 py-3 lg:py-4 font-bold z-10 relative '
                                />
                                <img
                                    src={'/images/image12.png'}
                                    width={120}
                                    height={100}
                                    /* layout='responsive' */
                                    alt='Chinua Achebe'
                                    className='w-[60%] lg:w-[280px] lg:h-[180px] absolute bottom-0 right-0 z-0'
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* OPEN SOURCE LIBRARY SECTION */}
                <section className='py-12 lg:py-[100px] px-4 md:px-7 lg:px-12 xl:px-[100px] bg-[#120F11] bg-[url(/images/image7.png)] bg-no-repeat bg-cover bg-center min-h-screen relative' >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>
                    <div className="relative">
                        <div className='mb-14' >
                            <h1 className="text-brand-white text-5xl lg:text-[75px] tracking-tighter font-bold  text-center lg:leading-[100px]">
                                OPEN
                                <span
                                    className='text-transparent bg-clip-text'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
            
                                    }}
                                >
                                    {" " }SOURCE
                                </span>
                            </h1>
                            <h1 className="text-brand-white text-7xl text-[80px] lg:text-[120px] tracking-tighter font-bold  text-center lg:leading-[105px]">
                                <span
                                    className='text-transparent bg-clip-text'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #60132C -16.51%, #FFF1FA 93.65%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }} >
                                    LIBRARY
                                </span>
                            </h1>
                        </div>
            
                        <div className=' text-brand-white mx-auto relative flex flex-col lg:flex-row justify-between items-center gap-5' >
                            <div className="w-full h-fit p-3.5 pb-6 lg:p-7 border-2 lg:border-[4px] border-brand-white rounded-lg lg:rounded-2xl" >
                                <h1 className='text-transparent bg-clip-text font-bold text-[32px] lg:text-[40px]'
                                    style={{
                                        backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 26.39%)",
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }}
                                >
                                    01.
                                </h1>
                                <h2 className='mb-[14px] text-4xl lg:text-[44px] font-bold lg:leading-[46px] tracking-[-1px] ' >
                                    THINGS <br /> FALL APART
                                </h2>
                                <p className='text-xs lg:text-base mb-8 lg:mb-[90px]' >
                                    Indigenous communities can use their <br /> voting rights to decide which stories are <br /> shared publicly and how they are presented.
                                </p>
                                <PrimaryButton
                                    name='COMING SOON'
                                    className='px-11 lg:px-[53px] py-3 lg:py-4 font-bold'
                                />
                            </div>
                            <div className="w-full p-3.5 pb-6 lg:p-7 lg:pb-[200px] border-2 lg:border-[4px] border-brand-white rounded-lg lg:rounded-2xl"
                                /* style={{
                                    borderImageSource: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)",
                                    borderImageSlice: 1,
                                    borderRadius: "16px",
                                    WebkitMaskImage: "-webkit-radial-gradient(white, black)"
                                }} */
                            >
                                <h1 className='text-transparent bg-clip-text font-bold text-[32px] lg:text-[40px]'
                                    style={{
                                        backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 26.39%)",
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }}
                                >
                                    02.
                                </h1>
                                <h2 className='mb-[14px] text-4xl lg:text-[44px] font-bold lg:leading-[46px] tracking-[-1px] ' >
                                    NO LONGER <br /> AT EASE
                                </h2>
                                <p className='text-xs lg:text-base mb-8 lg:mb-[90px]' >
                                    Indigenous communities can use their <br /> voting rights to decide which stories are <br /> shared publicly and how they are presented.
                                </p>
                                <PrimaryButton
                                    name='COMING SOON'
                                    className='px-11 lg:px-[53px] py-3 lg:py-4 font-bold'
                                />
                            </div>
                            <div className="w-full h-fit p-3.5 pb-6 lg:p-7 border-2 lg:border-[4px] border-brand-white rounded-lg lg:rounded-2xl" >
                                <h1 className='text-transparent bg-clip-text font-bold text-[32px] lg:text-[40px]'
                                    style={{
                                        backgroundImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 26.39%)",
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }}
                                >
                                    03.
                                </h1>
                                <h2 className='mb-[14px] text-4xl lg:text-[44px] font-bold lg:leading-[46px] tracking-[-1px] ' >
                                    A MAN OF THE <br /> PEOPLE
                                </h2>
                                <p className='text-xs lg:text-base mb-8 lg:mb-[90px]' >
                                    Indigenous communities can use their <br /> voting rights to decide which stories are <br /> shared publicly and how they are presented.
                                </p>
                                <PrimaryButton
                                    name='COMING SOON'
                                    className='px-11 lg:px-[53px] py-3 lg:py-4 font-bold'
                                />
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
