import * as React from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
    SheetTitle
} from '@/components/ui/sheet'



export default function Header() {
    return (
        <header className="
                            top-0 box-border flex 
                            flex-row items-center justify-between 
                            p-5 w-full
                            text-white max-w-[1200px] z-10
                            F">
            <nav className='container mx-auto 
                            flex items-center 
                            justify-between h-16 
                            px-4 rounded-lg
                            bg-card/90 border border-white/15 shadow-sm  backdrop-blur-sm'>
                <div>
                    <div>Bare Bone Solutions</div>
                </div>
                <div className='flex-row gap-[16px] hidden sm:flex'>
                    <Link href="#services">Services</Link>
                    <Link href="#technologies">Technologies</Link>
                    <Link href="#about">About</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                {/* <Sheet>
                    <SheetTrigger>
                        <span>
                            Open
                        </span>
                    </SheetTrigger>
                    <SheetContent className='bg-zinc-900'>
                        <SheetTitle className="py-2 px-3">What would you like to know?</SheetTitle>
                        <div className='flex flex-col gap-[24px] pl-5'>
                            <Link className='' href="#services">Services</Link>
                            <Link className='' href="#technologies">Technologies</Link>
                            <Link className='' href="#about">About</Link>
                            <Link className='' href="#services">Contact Us</Link>
                        </div>
                    </SheetContent>
                </Sheet> */}
            </nav>
        </header>
    )
}
