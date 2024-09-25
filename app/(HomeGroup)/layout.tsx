import React from "react"
import Header from "./_components/header/header"

export default function HomeGroupLayout({children}:{children: React.ReactNode}) {
    
    return (
        <div className="">
            {/* <Header /> */}
            {children}
        </div>
    )
}