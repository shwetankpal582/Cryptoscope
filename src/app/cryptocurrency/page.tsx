
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import CurrencyTile from './CurrencyTile';
import SearchBar from './SearchBar';
import { db } from '../firebaseConfig';
const page = async ({
    searchParams,
}: {
    searchParams: { search: string; };
}) => {

    function capitalizeFirstLetter(string: string) {
        return string?.charAt(0).toUpperCase() + string.slice(1);
    }
    async function fetchData() {
        let data: any = []
        let snapshot: any
        if (searchParams.search === "" || !searchParams.search) {
            snapshot = await getDocs(query(collection(db, "currencyHistory"), orderBy('market_cap_rank')));
        } else {
            snapshot = await getDocs(query(collection(db, "currencyHistory"), where("name", ">=", capitalizeFirstLetter(searchParams.search)), where("name", "<", `${capitalizeFirstLetter(searchParams.search)}\uf8ff`), orderBy('name'), orderBy('market_cap_rank')));
        }
        for (let i = 0; i < snapshot.docs.length; i++) {
            data.push(snapshot.docs[i].data());
        }
        return data
    }


    let data = await fetchData()
    return (
        <div className='px-4 sm:px-16 md:px-20 overflow-x-hidden py-20 text-center'>
            <h1 className='text-3xl xxs:text-4xl md:text-[42px] lg:text-6xl my-2'>Cryptoscope</h1>
            <SearchBar />

            <div className=' font-pixel w-full h-fit p-4 rounded-[20px] bg-newTileBackground mt-16'>
                {
                    data?.map((child: any, i: number) =>
                        <CurrencyTile data={child} rank={i} key={i} />
                    )
                }
            </div>
        </div>
    )
}




export default page