"use client"
import React, { useState } from 'react'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import StatTile from '../Components/MarketStat/StatTile';

interface props {
    data: any,
    rank: number
}
const CurrencyTile: React.FC<props> = ({ data, rank }) => {
    const [isExpand, setIsExpand] = useState(false)

    const expand = () => {
        setIsExpand(!isExpand)
    }

    return (

        <div className='w-full bg-newTileBackground rounded-[8px] mb-4 last:mb-0'>
            <div className='w-full flex items-center justify-between p-2 sm:p-4'>
                <p>{String(rank + 1)}. <a href={`/cryptocurrency/${data.symbol}`} className='text-white'>{data.name}</a></p>
                <div className='flex items-center'>
                    <p>${data?.current_price?.usd}</p>
                    <button className='rounded p-1 hover:bg-contentBackground ml-2' onClick={expand}>
                        {isExpand ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
                    </button>
                </div>


            </div>

            {isExpand && <div className='p-2 sm:p-4 !bg-transparent'>
                <StatTile data={data.historical_data} isNotBg={true} />
            </div>}
        </div>

    )
}


export default CurrencyTile