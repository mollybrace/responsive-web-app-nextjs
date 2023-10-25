import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NAV_LINKS } from '../constants'

const Navbar = () => {
  return (
    <nav className='border-2 border-red-500 flex-between max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <Image 
                src="/hilink-logo.svg"
                alt="logo"
                height={29}
                width={74}
            />
        </Link>

        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {link.label}
                </Link>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar