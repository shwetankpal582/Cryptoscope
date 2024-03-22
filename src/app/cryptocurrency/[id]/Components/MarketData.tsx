"use client"
import { CoinData, PricePercentObjectInterface } from '@/app/interface'
import { useState } from 'react'
interface props {
    data: CoinData
}
const MarketData: React.FC<props> = ({ data }) => {
    const [currentCurrency, setCurrentCurrency] = useState<string>("usd")
    const [priceChangeTime, setPriceChangeTime] = useState<string>("24h")


    const pricePercentObject: PricePercentObjectInterface = {
        "24h": "price_change_percentage_24h",
        "7d": "price_change_percentage_7d",
        "14d": "price_change_percentage_14d",
        "30d": "price_change_percentage_30d",
        "60d": "price_change_percentage_60d",
        "200d": "price_change_percentage_200d",
        "1y": "price_change_percentage_1y",
    }
    const currencyChange = (e: any) => {
        setCurrentCurrency(e.target.value)
    }
    const priceTimeChange = (e: any) => {
        setPriceChangeTime(e.target.value)
    }


    return (
        <div className='font-ardestine w-full sm:w-1/2 pl-0 sm:pl-2 pb-2'>
            <div className='text-base xlg:text-xl w-full h-full flex flex-col justify-between bg-newTileBackground rounded-[16px] p-2 xsm:p-4  '>
                <div className='w-full flex justify-between items-center'>
                    <h4 className='font-semibold' >Market Cap Rank : {data.market_cap_rank}</h4>
                    <select name="currentPrice" onChange={currencyChange} value={currentCurrency} className='bg-contentBackground rounded focus:outline-none'>
                        {Object.keys(data.current_price).map((child, i) =>
                            <option value={child} key={i}>{child}</option>
                        )}
                    </select>
                </div>



                <h4 className='w-full'> Current Price : {data?.current_price[currentCurrency]} </h4>
                <h4 className='w-full'>Market Cap :{data?.market_cap[currentCurrency]}</h4>
                <h4 className='w-full'>Total Volume :{data?.total_volume?.[currentCurrency]} </h4>
                <div className='w-full flex items-end '>
                    <h3 >Price Change % : {data?.[pricePercentObject[priceChangeTime as keyof typeof pricePercentObject] as keyof CoinData]} </h3>
                    <select name="currentPrice" onChange={priceTimeChange} value={priceChangeTime} className='ml-2 bg-contentBackground rounded focus:outline-none'>
                        <option value="24h">24h</option>
                        <option value="7d">7d</option>
                        <option value="14d">14d</option>
                        <option value="30d">30d</option>
                        <option value="60d">60d</option>
                        <option value="200d">200d</option>
                        <option value="1y">1y</option>
                    </select>
                </div>
                <h4 className='text-xs text-right mt-2'> Last Updated On: {data?.last_updated}</h4>
            </div>
        </div>
    )
}

export default MarketData