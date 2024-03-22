import { Facebook, Reddit } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import XIcon from '@mui/icons-material/X';
import { CoinData } from '@/app/interface';

interface props {
    data: CoinData

}
const Details: React.FC<props> = ({ data }) => {


    return (
        <div className='w-full sm:w-1/2 pr-0 sm:pr-2 pb-2  '>
            <div className='w-full font-ardestine h-full bg-newTileBackground rounded-[16px] p-2 xsm:p-4 flex flex-col justify-between'>
                <div className='flex items-center justify-between mb-2'><Avatar src={data?.image?.thumb} /> <p className='text-[24px] font-pixel'>{data?.name}</p></div>
                <div className='flex items-center justify-between'> <h3 >symbol</h3> <p></p>{data?.symbol}</div>
                <div className='flex items-center justify-between'> <h3 >hashing algorithm</h3> <p>{data?.hashing_algorithm}</p></div>
                <div className='flex items-center justify-between'> <h3 >genesis date</h3> <p>{data?.genesis_date}</p></div>
                <div className='flex items-center justify-between mt-4 '>
                    {data?.links?.twitter_screen_name &&
                        <a href={`https://twitter.com/${data?.links?.twitter_screen_name}`} target="_blank" className='rounded-full p-2 text-center bg-contentBackground w-10 h-10 hover:bg-newTileBackground ease-linear duration-300'>
                            <XIcon className='text-white' />
                        </a>
                    }
                    {data?.links?.facebook_username &&
                        <a href={`https://facebook.com/${data?.links?.facebook_username}`} target="_blank" className='rounded-full p-2 text-center bg-contentBackground w-10 h-10 hover:bg-newTileBackground ease-linear duration-300'>
                            <Facebook />
                        </a>
                    }
                    {data?.links?.subreddit_url &&
                        <a href={data?.links?.subreddit_url} target="_blank" className='rounded-full p-2 text-center bg-contentBackground w-10 h-10 hover:bg-newTileBackground ease-linear duration-300'>
                            <Reddit />
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Details