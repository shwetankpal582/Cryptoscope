import React from 'react'

const AboutUS = () => {
    return (
        <div className=' pt-24 pb-16 w-full '>
            <h1 className='text-2xl xxs:text-2xl md:text-[42px] lg:text-6xl mb-5 '>About Us</h1>
            <div className='text-[12px] font-ardestine sm:text-[16px] bg-newTileBackground rounded p-2 '>
                <p >Welcome to Cryptoscope, where the veil of mystery surrounding cryptocurrencies is lifted. 🌟</p>
                <p className='mt-5'>Explore the Cosmos of Digital Assets</p>
                <ul className='mt-2 list-disc p-2'>
                    <li className='text-[8px] sm:text-[12px]'>Price Constellations: Witness real-time price movements of Bitcoin, Ethereum, and other celestial coins. Our star charts guide you through the crypto galaxy.</li>
                    <li className='text-[8px] sm:text-[12px]'>Stellar Insights: Dive into historical data, analyze orbits, and predict trajectories. Our expert astronomers decode market patterns for you.</li>
                </ul >
                <p className='mb-2'>Peer Through the Cryptoscope</p>
                <p>Ready to embark on your cosmic journey? Launch your spacecraft now!</p>
            </div>
        </div>
    )
}

export default AboutUS