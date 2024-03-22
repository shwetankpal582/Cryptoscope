"use client"
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'
const Page = () => {

    const [nav, setNav] = useState<boolean>(false)

    const navItems = [{
        item: "Home",
        link: "/"
    },
    {
        item: "News",
        link: "/#news"
    },
    {
        item: "Stats",
        link: "/#stats"
    },]

    return (
        <nav className=' font-gadems w-screen fixed p-4 bg-tilesBackground '>
            <div className={`flex  items-center justify-between ${nav ? "mb-2 sm:mb-0" : ""}`}>
                <a href="/" className='flex items-center'>
                    <Image src="/assets/logo.png" width={48} height={48} alt="logo" className='h-12 mr-1 object-contain' />
                    {/* <img src="/assets/logo.png" alt="logo" className='h-12 mr-1' /> */}
                    <span className='font-semibold text-white '>Cryptoscope</span>
                </a>
                <button className='sm:hidden rounded p-1 sm:hidden hover:bg-contentBackground' onClick={() => setNav(!nav)}>
                    <MenuIcon />
                </button>

                <div className='hidden sm:flex items-center'>
                    <ul className='flex items-center '>
                        {
                            navItems.map((child, j) =>
                                <li className='px-6 hover:bg-tilesBackground cursor-pointer' key={j}>
                                    <a href={child.link} className='text:white w-full' >{child.item}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            {
                nav &&
                <div className='block sm:hidden w-full  bg-tilesBackground'>
                    <ul className='bg-contentBackground rounded'>
                        {
                            navItems.map((child, i) =>
                                <li className='block px-6 py-1 w-full text-center py:2 hover:bg-tilesBackground cursor-pointer' key={i}>
                                    <a href={child.link} className='text:white' >{child.item}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Page