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
        <header className="box-border flex flex-row items-center justify-between p-4 w-full text-white">
            <div>
                <div>Bare Bone Solutions</div>
            </div>
            <Sheet>
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
            </Sheet>
        </header>
    )
}
