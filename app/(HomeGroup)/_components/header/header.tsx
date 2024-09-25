'use client';

import PrimaryButton from "@/app/_components/PrimaryButton/PrimaryButton"
import Link from "next/link"
import { Oxanium } from "next/font/google"
import { usePathname, useRouter } from "next/navigation";
const oxanium = Oxanium({subsets:["latin-ext"]})

export default function Header({toggleSidebar}:{toggleSidebar:()=>void}) {
    const router = useRouter();
    const pathName = usePathname();
    return (
        <div className={`font-medium flex justify-between items-center py-8 lg:py-5 px-4 md:px-7 lg:px-12 xl:px-[100px] text-brand-white bg-[#120F1133] `} >
            <h1
                className={`text-2xl lg:text-[38px] font-bold cursor-pointer`}
                onClick={() => router.push("/")}
            >
                achebe.net
            </h1>
            <nav className="hidden lg:flex lg:items-center gap-10" >
                <Link href="/" className={`${pathName == "/" ? "border-b-2 border-b-[#60132C]" : ""}  p-0.5`} > HOME </Link>
                <Link href="/about" className={`${pathName == "/about" ? "border-b-2 border-b-[#60132C]" : ""}  p-0.5`} >ABOUT THE PROJECT</Link>
                <Link href="/open-source" className={`${pathName == "/open-source" ? "border-b-2 border-b-[#60132C]" : ""}  p-0.5`} >OPEN SOURCE</Link>                
            </nav>
            <PrimaryButton 
                name="ASK ACHEBE.NET"
                className="px-6 py-4 hidden lg:block "
                onClick={() => router.push("/ask")}
            />
            <img
                src="/images/menu.svg"
                alt="menu"
                className="w-6 h-6 lg:hidden"
                onClick={toggleSidebar}
            />
        </div>
    )
}