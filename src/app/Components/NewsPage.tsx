import Image from "next/image";
import { Article } from "../interface";


const NewsPage = async () => {
    async function fetchData() {
        let data: Article[] = []
        const response = await fetch(`https://newsapi.org/v2/everything?sources=wired&q=cryptocurrency&apiKey=${process.env.newsApiKey}`).then((res) => res.json())
        for (let i = 0; i < 5; i++) {
            data.push(response.articles[i] as Article);
        }
        // console.log(data)
        return data
    }
    let data: Article[] = await fetchData()
    return (
        <div id="news" className='min-h-screen pt-24 pb-16 w-full flex flex-col items-center justify-around'>
            <div className='text-center mb-10 sm:mb-0'>
                <h1 className='text-xl xxs:text-2xl md:text-[42px] lg:text-6xl my-2'>News</h1>
            </div>
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-2/4 p-1'>
                    <a href={data[0]?.url} target="_blank" className='block my-1 w-full xsm:my-0 w-full px-1 my-0 md:my-1 '>
                        <div className='rounded p-2 bg-newTileBackground hover:bg-contentBackground ease-linear duration-300'>
                            <Image src={data[0]?.urlToImage} alt={data[0]?.title} width={500} height={500} className='w-full mb-2 object-cover rounded h-[auto] sm:h-[460px]' />
                            {/* <img src={data[0]?.urlToImage} alt={data[0]?.title} className='w-full mb-2 object-cover rounded h-[auto] sm:h-[460px]' /> */}
                            <p className='font-ardestine text-xs break-words line-clamp-1'>{data[0]?.title}</p>
                            <p className='text-right text-[8px]'>-{data[0]?.source.name}</p>
                        </div>
                    </a>
                </div>
                <div className='w-full md:w-2/4 flex flex-wrap p-1'>
                    {data?.map((child: any, i: number) =>
                        i !== 0 && <a href={child?.url} target="_blank" className='my-1 xsm:my-0 w-full xsm:w-1/2 p-1' key={i}>
                            <div className='rounded p-2 bg-newTileBackground hover:bg-contentBackground ease-linear duration-300'>
                                <Image src={child?.urlToImage} alt={child?.title} width={500} height={500} className='w-full mb-2 object-cover rounded h-[150px] sm:h-[200px]' />
                                {/* <img src={child?.urlToImage} alt={child?.title} className='w-full mb-2 object-cover rounded h-[150px] sm:h-[200px] ' /> */}
                                <p className='font-ardestine text-xs break-words line-clamp-1'>{child?.title}</p>
                                <p className='text-right text-[8px]'>-{child?.source.name}</p>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewsPage