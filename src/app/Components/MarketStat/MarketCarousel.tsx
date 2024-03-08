"use client"
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import StatTile from './StatTile';

interface props {
    data: any,
}

const MarketCarousel: React.FC<props> = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState<Number>(0)
    const slidesChanged = (e: Number) => {
        if (currentSlide !== e) setCurrentSlide(e)
    }
    const prevBtn = () => {
        currentSlide == 0 ? setCurrentSlide(2) : setCurrentSlide((prev: any) => prev - 1)
    }
    const nextBtn = () => {
        currentSlide == 2 ? setCurrentSlide(0) : setCurrentSlide((prev: any) => prev + 1)
    }

    return (
        <>
            <button onClick={prevBtn} className='p-1 xsm:p-2 rounded bg-newTileBackground hover:bg-contentBackground ease-linear duration-300'>
                <ArrowBackIosNewRounded />
            </button>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} showArrows={false} onChange={slidesChanged} selectedItem={parseInt(currentSlide.toString())}
                className='max-w-[calc(100%-88px)] h-[200px] sm:h-[300px] p-0 xsm:p-2 rounded'>
                {data?.map((child: any, i: number) =>
                    <StatTile data={child} key={i} isNotBg={false} />
                )}
            </Carousel>
            <button onClick={nextBtn} className=' p-1 xsm:p-2 rounded bg-newTileBackground hover:bg-contentBackground ease-linear duration-300'>
                <ArrowForwardIosRounded />
            </button>
        </>
    )
}


export default MarketCarousel