import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from "../firebaseConfig"
const Popular = async () => {
    async function fetchData() {
        let data: any = []
        const snapshot: any = await getDocs(query(collection(db, "currencyHistory"), orderBy('market_cap_rank')));
        for (let i = 0; i < 3; i++) {
            data.push(snapshot.docs[i].data());
        }
        return data
    }
    let data: any = await fetchData()
    return (
        <div className='min-h-screen pt-24 pb-16 w-full flex flex-col items-center justify-between' id="popular">
            <div className='text-center mb-10 sm:mb-0'>
                <h1 className='text-xl xxs:text-2xl md:text-[42px] lg:text-6xl my-2'>Popular Cryptocurrencies</h1>
                <h4 className='text-xs md:text-base lg:text-xl font-ardestine my-2 sm:my-4'>Discover the top cryptocurrencies in the market</h4>
            </div>

            <div className='w-full flex justify-center items-center flex-wrap'>
                {data?.map((child: any, i: number) =>
                    <a href={`/cryptocurrency/${child.symbol}`} key={i} className='w-2/6   min-w-[250px]  max-w-[350px] p-2 cursor-pointer'>
                        <div className='bg-newTileBackground rounded-xl p-2 hover:bg-contentBackground ease-linear duration-300'>
                            <div className='w-full flex justify-center items-center '>
                                <img src={child.image.large} alt={child.id} className='w-full object-contain rounded' />
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className='font-pixel text-base md:text-xl max-w-1/2 text-ellipsis overflow-hidden whitespace-nowrap'>{child?.name}</p>
                                <p className='font-pixel text-base md:text-xl max-w-1/2 text-ellipsis overflow-hidden whitespace-nowrap'>$ {child?.current_price.usd}</p>
                            </div>

                        </div>
                    </a>
                )}
            </div>
            <div className='relative w-full h-[40px] mt-10 sm:mt-0 '>
                <a href="/cryptocurrency" className='absolute top-0 left-[-1rem] sm:left-[-4rem] md:left-[-5rem] text-center w-screen max-w-screen py-2 bg-newTileBackground h-fit hover:bg-contentBackground ease-linear duration-300'>
                    View All
                </a>
            </div>

        </div>
    )
}

export default Popular