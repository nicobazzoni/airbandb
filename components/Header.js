import Image from "next/image"
import {Bars3Icon, MagnifyingGlassIcon, UserCircleIcon, UserIcon, GlobeAltIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'


function Header() {
   
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md 
    px-5 py-5 md:px-10 ">
       
        <div className='relative items-center h-10 cursor-pointer'> 
            <Image  
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            
            />
        </div>

        
        
        

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm" >
                <input className="flex-grow pl-5 bg-transparent outline-none rounded-full w-64 px-4 py-2 text-sm" type="text" placeholder="Start your search" />
            

           <MagnifyingGlassIcon  className="hidden md:inline-flex h-8 
           bg-red-400 rounded-full p-2 cursor-pointer md:mx-2" /> 
            
             </div>
       


        <div className="flex space-x-4 items-center justify-end text-gray-500">
            <p className="hidden md:inline-flex p-2">Become a Host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />

            <div className="flex space-x-2 items-center border-2 p-2 rounded-full ">

            <Bars3Icon className="h-6 cursor-pointer" />
            <UserCircleIcon className="h-6 cursor-pointer" />
            </div>
            <UserIcon className="h-6 cursor-pointer" />
        </div>
    </header>
  )
}

export default Header