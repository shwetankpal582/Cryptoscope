import { GitHub } from '@mui/icons-material'
import React from 'react'

const Footer = () => {

    return (
        <div className='font-gadems w-full  px-4 pt-4 bg-newTileBackground '>
            <div className='flex flex-col items-center mx-auto text-center'>
                <h2 className='text-2xl mb-2'>Cryptoscope</h2>
                <a href="https://github.com/shwetankpal582" target="_blank" className='rounded-full p-2 text-center bg-contentBackground w-[40px] h-[40px] block hover:bg-newTileBackground ease-linear duration-300'>
                    <GitHub />
                </a>
                <div className='flex justify-center space-x-4 my-2 '>
                    <a href='/privacy-policy' className='text-white text-sm hover:underline'>Privacy Policy</a>
                    <a href='/term-of-service' className='text-white text-sm hover:underline'>Terms of Service</a>
                    <a href='mailto:vishal.2002.12.29@gmail.com' className='text-white text-sm hover:underline'>Contact Us</a>
                </div>
                <div className='w-full border-b-2 border-contentBackground'> </div>
                <p className='font-montserrat text-white'>© 2024 Cryptoscope. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer