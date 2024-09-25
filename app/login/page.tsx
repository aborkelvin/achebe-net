
import { Fjalla_One } from "next/font/google"
import PrimaryButton from "../_components/PrimaryButton/PrimaryButton"

const fjalla_One = Fjalla_One({
    subsets: ['latin'],
    weight: "400"
})

export default function Login() {
    
    return (
        <main className={` text-brand-white`} >
            <section className="bg-[#120F11] bg-hero-image bg-no-repeat bg-cover bg-center min-h-screen relative py-10 lg:py-20 overflow-hidden">          
                <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>  
                <div className="text-center py-16 px-4 lg:px-10 relative w-full md:w-[60%] lg:w-[55%] max-w-[750px] lg:border-[4px] lg:border-brand-white rounded-lg lg:rounded-2xl mx-auto">
                    <h1 className={`text-[28px] leading-[35px] lg:text-4xl lg:leading-[50px] font-fjalla font-bold  tracking-[-2px]`} >
                        WELCOME TO
                    </h1>
                    <h1 className={`text-[47px] lg:text-[58px] font-bold  tracking-[-3px] mb-3 text-transparent bg-clip-text`}
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%)',
                            backgroundSize: '100%',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            
                        }}
                    >
                        achebe.net
                    </h1>
                    <p className=" font-bold font-fjalla text-[24px] lg:text-[40px] mb-10 lg:mb-[62px] tracking-[-1.5px]" >
                        IT’S SO ICONIC TO HAVE YOU HERE
                    </p>
                    <form action="" className="w-full mx-auto">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="EMAIL ADDRESS"
                            className="mb-5 lg:mb-6 border-[1px] border-brand-white w-full outline-none active:outline-none rounded py-3.5 lg:py-4 px-3 bg-inherit"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="PASSWORD"
                            className="mb-5 lg:mb-6 border-[1px] border-brand-white w-full outline-none active:outline-none rounded py-3.5 lg:py-4 px-3 bg-inherit"
                        />
                        <div className="mb-[60px] flex justify-between text-xs lg:text-base " >
                            <div className="flex items-center gap-2" >
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    id="rememberMe"
                                    className="border-[1px] border-brand-white w-4 h-4 outline-none active:outline-none rounded bg-inherit"
                                />
                                <span className="relative top-[1px]">
                                    REMEMBER ME
                                </span>
                            </div>
                            <span>
                                FORGOT PASSWORD?
                            </span>
                        </div>
                        <PrimaryButton
                            name="LOGIN"
                            className="w-full p-[17px] lg:p-5 text-xl lg:text-[28px] mb-5 lg:mb-6"
                        />
                        <p className="font-medium text-xl mb-5 lg:mb-6" >
                            OR
                        </p>
                        <button className="flex gap-2 items-center justify-center p-[17px] lg:p-5 text-xl lg:text-[28px] font-bold w-full border-2 border-brand-white rounded-lg" >
                            <span className="relative top-[1.5px]" >CONTINUE WITH GOOGLE</span>
                            <img src="/images/googleIcon.svg" alt="continue with google" className="w-6 h-6" />
                        </button>
                        
                    </form>
                </div>
            </section>
        </main>
    )
}