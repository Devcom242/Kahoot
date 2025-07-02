import Link from 'next/link'
import React from 'react'
import { FaCircleQuestion } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { irish } from '@/lib/font'

function HomeFooter() {
    return (
        <>
            <footer className='absolute bottom-0 w-full h-[75px] flex items-center gap-[50px] text-[20px] pl-[30px]'>
                <Link href="" className={`${irish.className} text-[20px]`}><FaHandsHelping/> Aide</Link>
                <Link href="" className={`${irish.className} text-[20px]`}><FaCircleQuestion/> A propos</Link>
            </footer>
        </>
    )
}

export default HomeFooter
