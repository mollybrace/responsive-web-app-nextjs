import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NAV_LINKS } from '../app/constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
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
                <Link href={link.href} key={link.key} className='flexCenter regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {link.label}
                </Link>
            ))}
        </ul>

        <div className='lg:flexCenter hidden'>
            <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green" 
            />
        </div>
        <Image
            src="/menu.svg"
            alt="menu"
            height={32}
            width={32}
            className='inline-block cursor-pointer lg:hidden'
            />
    </nav>
  )
}

export default Navbar