import React from 'react'

const Home = () => {
    return (
        <div className='min-h-screen py-20 flex w-full items-center justify-center flex-wrap'>
            <div className='sm:order-2 sm:w-2/5'>
                <img src="/assets/green.png" alt="crypto" className='w-full max-w-xs sm:max-w-max' />
            </div>
            <div className=' sm:order-1 w-full sm:w-3/5 text-center sm:text-left'>
                <h1 className='text-3xl xxs:text-4xl md:text-[42px] lg:text-6xl my-2'>Cryptoscope</h1>
                <h4 className='text-xs md:text-base lg:text-xl font-ardestine my-2 '>Unveiling the Crypto Universe</h4>
                <a href="/#popular" className=' text-xs  md:text-base lg:text-xl py-1 px-2 rounded bg-newTileBackground mt-2 drop-shadow-tile hover:bg-contentBackground hover:scale-110 ease-linear duration-300'>Get Started</a>
            </div>
        </div>
    )
}

export default Home