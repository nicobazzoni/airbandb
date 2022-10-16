
import Image from 'next/image'

import { BiStar } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'


function InfoCard({img, location, title, description, star, price, total}) {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 
    hover:shadow-lg pr-4 transition duration-200 ease-in-out first:border-t'> 
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image 
            src={img} layout="fill" objectFit="cover" />
        </div>
 
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <FaRegHeart className='h-7 cursor-pointer' />
              
            </div>
            <h4 className='text-4xl'>{title}</h4>
            <div className='border-b w-10 pt-2' />
            <p className='pt-2 text-sm text-gray-500 flex-grow'> {description} </p>
            
            <div className='flex  justify-between'>
                <p>
                    <BiStar className='h-5 text-red-400' />
                    {star}
                </p>
                <div className=''>
                    <p className= 'text-lg font-semibold'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default InfoCard