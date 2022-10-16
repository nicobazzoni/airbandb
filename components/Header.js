import Image from "next/image"

import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import {FaUserAlt} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import {RiGlobalLine} from 'react-icons/ri'
import {BiUser} from 'react-icons/bi'
import {GoSearch} from 'react-icons/go'
import {IoSearchOutline} from 'react-icons/io5'


function Header({}) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {  
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const resetInput = () => { 
        setSearchInput("");

    }

    const search = () => { 
      router.push({
        pathname: "/search",
        query: {
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            noOfGuests,
        },
      })
    }


  


 
 
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',

    }
   
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md 
    px-5 py-5 md:px-10 ">
       
        <div 
        onClick={() => router.push("/")}
        className='relative items-center h-10 cursor-pointer'> 
            <Image  
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            
            />
        </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm" >
                <input 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-grow pl-5 bg-transparent outline-none rounded-full w-64 px-4 py-2 text-sm" 
                type="text" 
                placeholder= "Start your search" 
                 />
                 
            <IoSearchOutline className="hidden md:inline-flex m-2 h-6 cursor-pointer"  />

          
            
             </div>
      


        <div className="flex space-x-4 items-center justify-end text-gray-500">
            <p className="hidden md:inline-flex p-2">Become a Host</p>
            <RiGlobalLine className="h-6 cursor-pointer" />

            <div className="flex space-x-2 items-center border-2 p-2 rounded-full ">

            <FaBars className="h-6 cursor-pointer" />
            <AiOutlineUser className="h-6 cursor-pointer" />
            </div>
            <FaUserAlt className="h-6 cursor-pointer" />
        </div>
        {searchInput && (
         <div className= 'flex flex-col col-span-3 mx-auto mt-5'>
            <DateRangePicker 
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            />
            <div className="flex items-center border-b-2 mb-5">
                <h2 className='text-2xl flex-grow font-semibold'>Number of guests</h2>
                <BiUser className='h-5' />
                <input type="number" 
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                min={1}

                 className='w-12 pl-2 text-lg outline-none text-red-400' />
            </div>
            <div className="flex">
                <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                <button onClick={search} className='flex-grow text-red-400'>Search</button>

            </div>

         </div> 
         )}
    </header>
  )
}

export default Header