"use client"

import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    const [search, setSearch] = useState<string>("")
    function searchClicked() {
        window.location.href = "/cryptocurrency?search=" + search
    }

    return (
        <div className='flex items-center justify-center h-[30px] xsm:h-[40px] sm:h-[50px] mt-10'>
            <input type="text" name="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} className='font-pixel px-4 py-2  xsm:px-7 sm:px-10 sm:py-4 text-base sm:text-xl h-full min-w-[200px] w-3/4 max-w-[600px] text-black bg-inputBackground rounded-s-full focus:outline-none' />
            <button onClick={searchClicked} className='bg-contentBackground h-full w-[40px] xsm:w-[60px] rounded-e-full hover:bg-newTileBackground ease-linear duration-300'>
                <SearchIcon />
            </button>
        </div>
    )
}

export default SearchBar