import Link from 'next/link'
import React from 'react'

function HomeFooter() {
    return (
        <>
            <footer className='absolute bottom-0 w-full h-[75px] flex items-center gap-[50px] text-[20px]'>
                <Link href="">Aide</Link>
                <Link href="">A propos</Link>
            </footer>
        </>
    )
}

export default HomeFooter
