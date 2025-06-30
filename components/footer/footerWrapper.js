'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import HomeFooter from './homeFooter'

function FooterWrapper() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <>
            <HomeFooter/>
        </>
    )
}

export default FooterWrapper
