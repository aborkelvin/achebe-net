"use client";

import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();
    return (
        <section
  className="py-7 lg:py-10 px-4 md:px-7 lg:px-12 xl:px-[100px] bg-[url(/images/image5.png)] bg-no-repeat bg-cover bg-center relative"
  style={{
    borderTop: "0.5px solid transparent", // Need transparent solid fallback
    borderImage: "linear-gradient(90deg, #FFF1FA -1.54%, #60132C 126.39%) 1",
  }}
>
            <div className="absolute inset-0 bg-gradient-to-b from-[#120F11]/90 to-[#120F11]/90 z-0"></div>  
            <div className="relative">
                <p className='text-brand-white text-base lg:text-2xl mb-10 lg:mb-[62px]' >
                    2024 ACHEBE.NET. ALL RIGHTS RESERVED.
                </p>
                <div className='flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 items-start md:items-center' >
                    <div className="relative">
                        <img
                            src="/images/achebe2.svg"
                            alt=""
                            className="cursor-pointer w-[270px] h-[64px] lg:w-[350px] lg:h-[84px]"
                            onClick={() => router.push("/")}
                        />
                    </div>
                    <p className='text-xl lg:text-3xl text-brand-white' >
                        Team super <br />
                        Hackquest solution
                    </p>
                </div>
            </div>
        </section>
    )
}