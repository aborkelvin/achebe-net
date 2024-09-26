"use client";
import { useState } from "react";
import PrimaryButton from "@/app/_components/PrimaryButton/PrimaryButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Oxanium } from "next/font/google";
const oxanium = Oxanium({subsets:["latin-ext"]})


export default function Sidebar({ isSidebarOpen, setIsSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean, setIsSidebarOpen: Function, toggleSidebar: Function }) {    
    const pathName = usePathname();
    const router = useRouter();
    return (
        <aside className={`${oxanium.className} fixed top-0 left-0 z-50 h-full 
            bg-brand-dark py-[50px] px-4 text-brand-white
            transition-transform duration-300 ease-in-out lg:hidden 
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} `}
        >
            {/* <h1 className="font-bold text-4xl mb-[50px]" >
                achebe.net
            </h1> */}
            <img
                src="/images/achebe.svg"
                alt=""
                className="cursor-pointer w-[125px] h-[30px] lg:w-[202px] lg:h-[48px] mb-[50px]"
                onClick={() => router.push("/")}
            />
            <nav className="mb-[50px] flex flex-col gap-10" >
                <Link href="/" className={`${pathName == "/" ? "border-b-2 border-b-[#60132C]" : ""}  p-0.5 w-fit font-medium text-lg`} onClick={()=> isSidebarOpen && setIsSidebarOpen(false)} > HOME </Link>
                <Link href="/about" className={`${pathName == "/about" ? "border-b-2 border-b-[#60132C]" : ""}  p-0.5 w-fit font-medium text-lg`} onClick={()=> isSidebarOpen && setIsSidebarOpen(false)} >ABOUT THE PROJECT</Link>
                <Link href="/open-source" className={`${pathName == "/open-source" ? "border-b-2 border-b-[#60132C]" : ""}  p-0.5 w-fit font-medium text-lg`} onClick={()=> isSidebarOpen && setIsSidebarOpen(false)} >OPEN SOURCE</Link>                
            </nav>
            <PrimaryButton
                onClick={() => router.push("/ask")}
                className="px-[43.5px] py-4 block mb-[60px]"
                name="ASK ACHEBE.NET"
            />
        </aside>
    )
}