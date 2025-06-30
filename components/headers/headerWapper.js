'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import HomeHeader from './homeHeader'

function HeaderWapper() {

    const pathname = usePathname()
    console.log(pathname)
    return (
        <>
            <HomeHeader/>
        </>
    )
}

export default HeaderWapper
