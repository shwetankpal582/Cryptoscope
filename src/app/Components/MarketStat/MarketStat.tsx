import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import MarketCarousel from './MarketCarousel'
import { db } from '@/app/firebaseConfig';
const MarketStat = async () => {

    async function fetchData() {
        let data: any = []
        const snapshot: any = await getDocs(query(collection(db, "currencyHistory"), orderBy('market_cap_rank')));
        for (let i = 0; i < snapshot.docs.length; i++) {
            if (data.length === 3) break
            if (!snapshot.docs[i].data().historical_data?.["Error Message"])
                data.push(snapshot.docs[i].data().historical_data);
        }
        return data
    }
    let data: any = await fetchData()
    return (
        <div id="stats" className='min-h-screen pt-24 pb-16 w-full flex flex-col items-center justify-around'>
            <div className='text-center mb-10 sm:mb-0'>
                <h1 className='text-xl xxs:text-2xl md:text-[42px] lg:text-6xl my-2'>Market Data</h1>
            </div>
            <div className='font-ardestine w-full flex items-center justify-between min-h-[300px]'>
                <MarketCarousel data={data} />
            </div>

        </div>
    )
}

export default MarketStat