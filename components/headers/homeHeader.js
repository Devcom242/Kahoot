import React from 'react'
import Kahoot from '../logos/kahoot'
import Link from 'next/link'
import { FaRegCircleUser } from "react-icons/fa6";
import { irish } from '@/lib/font'

function HomeHeader() {
    return (
        <>
            <header className='w-full h-[75px] flex justify-between items-center pl-[50px] pr-[60px]'>
                <Kahoot/>
                <Link href='' className={`${irish.className} svg text-[20px] border-[2px] px-[10px] rounded-[10px]`}>Connexion <FaRegCircleUser/></Link>
            </header>
        </>
    )
}

export default HomeHeader
