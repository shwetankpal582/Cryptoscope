import { ArrowBackIosNewRounded } from '@mui/icons-material'
const MarketData = dynamic(
    () => import('./Components/MarketData'),
    { ssr: false }
)
import Details from "./Components/Details"
import StatTile from '@/app/Components/MarketStat/StatTile'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/app/firebaseConfig'
import dynamic from 'next/dynamic'
import { CoinData } from '@/app/interface'


const page = async ({ params }: { params: { id: string } }) => {

    async function fetchData() {
        let data: CoinData[] = []
        const snapshot: any = await getDocs(query(collection(db, "currencyHistory"), where("symbol", "==", params.id)));
        for (let i = 0; i < snapshot.docs.length; i++) {
            data.push(snapshot.docs[i].data() as CoinData);
        }
        return data
    }
    const data: CoinData[] = await fetchData()


    return (
        <div className='font-pixel px-4 sm:px-16 md:px-20 overflow-x-hidden py-24 '>
            <a href="/cryptocurrency" className='flex items-center w-fit text-left rounded pl-2 pr-4 py-2 bg-newTileBackground hover:bg-contentBackground ease-linear duration-300'><ArrowBackIosNewRounded className='mr-1' /> Back</a>
            <div className='w-full flex pt-2 sm:pt-4 flex-wrap'>
                <Details data={data[0]} />
                <MarketData data={data[0]} />
                <div className='mt-0 sm:mt-2 rounded-[16px] bg-newTileBackground w-full p-2 '>
                    <StatTile data={data[0]?.historical_data} isNotBg={true} />
                </div>
            </div>
        </div >
    )
}



export default page