"use client";

import { use, useState,useEffect } from "react";
import Footer from "../(HomeGroup)/_components/footer";
import PrimaryButton from "../_components/PrimaryButton/PrimaryButton";
import { Oxanium } from "next/font/google";
const oxanium = Oxanium({ subsets: ['latin'],weight: "400" });
import { TextEffect } from "../_components/motions";
import Loadingspinner from "../_components/loadingSpinner";
import { useRouter } from "next/navigation";

export default function Ask() {


    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const [userMessage, setUserMessage] = useState("");
    const [userQuestion, setUserQuestion] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const sendMessageToGaianet = async (userMessage: string) => {
        setLoading(true);
        const url = "https://gemma.us.gaianet.network/v1/chat/completions";
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        const data = {
            "messages": [
                {
                    "role": "assistant",
                    "content": `You are a virtual twin of Chinua Achebe and you respond to questions relating to him. 
                Also, you speak for him in all cases, using references from his books and history to give the likeliest 
                answer that he might have given. You are brief, avoiding long responses in most cases. 
                You are very intelligent and humble. You always acknowledge the love from your wife and children. 
                You are Chinua Achebe's virtual twin.`
                },
                { "role": "user", "content": userMessage }
            ]
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setResponse("");   
                setUserQuestion(userMessage);

                const responseData = await response.json();
                //console.log(responseData)
                console.log(responseData.choices[0].message.content)
                setResponse(responseData.choices[0].message.content);
            } else {
                throw new Error(`Error: ${response.status}`);
            }
        } catch (error: any) {
            console.error(error.message);
            return "An error occurred while processing your request.";
        } finally {
            setLoading(false);
        }
    };        

    useEffect(() => {
        const sendMessageToGaianet = async (userMessage: string) => {
            const url = "https://gemma.us.gaianet.network/v1/chat/completions";
            const headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };

            const data = {
                "messages": [
                    {
                        "role": "assistant",
                        "content": `You are a virtual twin of Chinua Achebe and you respond to questions relating to him. 
                    Also, you speak for him in all cases, using references from his books and history to give the likeliest 
                    answer that he might have given. You are brief, avoiding long responses in most cases. 
                    You are very intelligent and humble. You always acknowledge the love from your wife and children. 
                    You are Chinua Achebe's virtual twin.`
                    },
                    { "role": "user", "content": userMessage }
                ]
            };

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    const responseData = await response.json();
                    console.log(responseData)
                    //console.log(responseData.choices[0].message.content)
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            } catch (error: any) {
                console.error(error.message);
                return "An error occurred while processing your request.";
            }
        };

        // Usage:
        const userMessage = "I want to know why your book, waters are purple, is such a trash";
        /* sendMessageToGaianet(userMessage).then((response) => {
            console.log(response); // This will log the API response
        }); */
        //sendMessageToGaianet(userMessage);
    }, []);


    return (
        <main className={`h-screen flex relative`} >        
            <aside className={`fixed lg:relative top-0 left-0 z-50 lg:min-w-[270px] xl:min-w-[300px] h-full 
                bg-ask-sidebar-gradient pt-[50px] pb-[30px] lg:pb-[49px] px-4 lg:px-6 border-brand-white 
                transition-transform duration-300 ease-in-out 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} `}
                style={{ borderWidth: "0.5px" }}
            >
                <PrimaryButton
                    className="px-[43.5px] py-4 hidden lg:block mb-[60px]"
                    name="ASK ANYTHING"     
                    onClick={() => router.push("/ask")}
                />
                <img
                    src="/images/achebe3.svg"
                    alt="logo"
                    className="cursor-pointer w-[200] h-12 mb-[60px] lg:hidden"
                    onClick={() => router.push("/")}
                />
                <h1 className="mb-[42px] text-brand-dark text-2xl xl:text-[28px] font-medium" >
                    SEARCH HISTORY
                </h1>
                <p className="text-lg xl:text-2xl" >
                    No recents
                </p>
                <PrimaryButton
                    className="px-[43.5px] py-4 block lg:hidden mt-[60px]"
                    name="ASK ANYTHING"     
                    onClick={() => router.push("/ask")}
                />

                {/* <button className="flex gap-2 items-center absolute bottom-[50px] outline-none" >
                    <span className="text-brand-dark text-xl xl:text-[28px] font-medium" >LOGOUT</span>
                    <img src="/images/logout.svg" alt="logout" className="w-6 h-6" />
                </button> */}
            </aside>
            
            <section
                className={`bg-[url(/images/image5.png)] bg-no-repeat bg-cover bg-center relative w-full ${isSidebarOpen ? "blur" : ""}`}
                onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>
                <div className="relative h-full w-full ">                        
                    <header className='p-4 py-6 lg:p-5 xl:p-6 flex gap-10 items-center justify-between' >
                        {/* <h1
                            className='text-2xl lg:text-5xl xl:text-[52px] text-transparent bg-clip-text'
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                                backgroundSize: '100%',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text'
                            }}
                            onClick={() => router.push('/')}
                        >
                            achebe.net
                        </h1>  */}         
                        <img
                            src="/images/achebe2.svg"
                            alt=""
                            className="cursor-pointer w-[125px] h-[30px] lg:w-[275px] lg:h-[65px]"
                            onClick={() => router.push("/")}
                        />
                        <div className="flex gap-4 items-center ">
                            <img
                                src="/images/menu.svg"
                                alt=""
                                className="w-[18px] h-3 block lg:hidden"
                                onClick={toggleSidebar}
                            />
                            <img src="/images/Frame31.svg" alt="" className="w-9 h-9 lg:w-12 xl:w-[60px] lg:h-12 xl:h-[60px]" />
                        </div>                        
                    </header>
                    
                    <div className="px-2 py-3 xl:p-3.5 bg-ask-gradient " >
                        <p className="text-center text-base lg:text-xl xl:text-2xl text-brand-dark" >
                            HEY, YOU ARE WELCOME TO ASK ACHEBE.NET
                        </p>
                    </div>
                    <div className="py-6 p-4 lg:p-6 relative w-full" >
                        {
                            response === "" ?
                            <h3 className="leading-[70px] 2xl:leading-[120px] text-brand-white font-medium text-5xl 2xl:text-8xl lg:max-w-[80%]" >
                                HOW CAN <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                                        backgroundSize: '100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text'
                                    }}
                                >
                                    {' '} ACHEBE.NET {' '}
                                </span>
                                BE <br className="hidden xl:block" /> OF HELP TODAY?
                            </h3>
                            :   
                            <div className="text-brand-white text-sm lg:text-base" >
                                <p className="text-right bg-black w-fit ml-auto lg:mr-10 mb-4 p-2 lg:p-3 rounded " >
                                    {userQuestion}?
                                </p>                                
                                <TextEffect className="font-medium px-3" per='word' as='h3' preset='slide'>
                                    {response}
                                </TextEffect>
                            </div>
                        }                      
                    </div>                    
                    <div className="absolute bottom-[40px] left-4 lg:left-6 right-4 lg:right-6" >
                        <div className="relative h-fit">
                            <input
                                type="text"
                                name="question"
                                id="question"
                                placeholder="ASK ACHEBE.NET ANYTHING"
                                className="border-[1px] border-[#FFF1FA99] text-brand-white w-full outline-none active:outline-none rounded 
                                py-4 xl:py-6 px-3 pr-20 lg:pr-36 bg-inherit text-base lg:text-lg"
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                // Send the user's message to the Gaianet API when the user presses the Enter key
                                onKeyPress={(e) => e.key === "Enter" && sendMessageToGaianet(userMessage)}
                                autoComplete="off"
                                
                            />
                            
                           {/*  <img
                                src="/images/image.svg"
                                alt=""
                                className="absolute top-1/2 right-16 lg:right-28  transform -translate-y-1/2 w-4 lg:w-6 h-4 lg:h-6 cursor-pointer"
                            />
                            <img
                                src="/images/mic.svg"
                                alt=""
                                className="absolute top-1/2 right-10 lg:right-[70px] transform -translate-y-1/2 w-4 lg:w-6 h-4 lg:h-6 cursor-pointer "
                            />      */}  
                            <img
                                src="/images/upload.png"
                                alt=""
                                className={` ${loading ? "hidden" : ""} absolute top-1/2 right-4  lg:right-8 transform -translate-y-1/2 w-5 lg:w-8 h-5 lg:h-8 cursor-pointer `}
                                onClick={() => sendMessageToGaianet(userMessage)}
                            />
                            {
                                loading &&
                                <div
                                    className="absolute top-1/2 right-4  lg:right-8 transform -translate-y-1/2 w-5 lg:w-8 h-5 lg:h-8 cursor-pointer "
                                >
                                    <Loadingspinner />
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
                
            </section>
        </main>
    )
}
