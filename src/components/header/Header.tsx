"use client"

import Image from "next/image"
import Logo from "../../../public/eyosaviour.png"
import Link from "next/link"
import { links } from "@/utils/links"
import MobileMenu from "../mobile.menu/MobileMenu"
import { useState } from "react"

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [step, setStep] = useState(0)
    const [submenu, setSubmenu] = useState<null | { name: string; url: string; }[]>(null)

    const handleToggleMenu = () => {
        setShowMobileMenu(prev => !prev)
        setStep(0)
    }

    const chooseStep = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, submenu: { name: string; url: string; }[] | null) => {
        setStep(1)
        setSubmenu(submenu)
    }

    const closeMenu = () => setShowMobileMenu(false)

    return <>
        <header className="fixed w-full top-0 bg-white z-[10] shadow">
            <div className="py-[20px] max-w-[1200px] w-[90%] mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src={Logo} alt="eyo saviour logo" className="w-[100px] md:w-[150px]" priority={true} />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-[30px] relative">
                        {links.map(_link => <Link href={_link.url} key={_link.name} className="text-[#000080] font-[300] text-[16px] capitalize group">{_link.name}</Link>)}

                    </nav>

                    <Link href="/contacts" className="hidden lg:block p-[10px_20px] bg-[#000080] text-white rounded text-[14px] font-[300]">Make Enquiry</Link>

                    <div onClick={handleToggleMenu} className="block lg:hidden">
                        {!showMobileMenu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#000080]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#000080]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        }
                    </div>

                </div>
            </div>
        </header>
        <MobileMenu showMobileMenu={showMobileMenu} chooseStep={chooseStep} step={step} submenu={submenu} closeMenu={closeMenu} />
    </>
}