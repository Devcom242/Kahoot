import React from 'react'
import Kahoot from '../logos/kahoot'
import Link from 'next/link'
import { FaRegCircleUser } from "react-icons/fa6";

function HomeHeader() {
    return (
        <>
            <header className='w-full h-[75px] flex justify-between items-center px-7'>
                <Kahoot/>
                <Link href='' className='svg text-[20px]'>Connexion <FaRegCircleUser/></Link>
            </header>
        </>
    )
}

export default HomeHeader
