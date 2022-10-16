import { useRouter } from 'next/router';
import React from 'react'
import Header from '../components/Header'
import  Map  from '../components/Map'
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {

  const router = useRouter();
  console.log(searchResults)
  const {location, startDate, endDate, noOfGuests} = router.query;

  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();
  const range = `${formattedStartDate} - ${formattedEndDate}`;



  console.log(router.query)
  return (
    <div> 
      <Header  placeholder={`${location} | ${range} | `} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'> 300+ Stays - {range} for {noOfGuests} number of Guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
            
            <div className='flex flex-col'>
          {searchResults.map(({img, location, title, description, star, price, total}
          )=>(
            <InfoCard  
            key={img}
            img={img}
            location={location}
            title={title}
            description={description}
            star={star}
            price={price}
            total={total}
            
            />
          ))}
          </div>
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600px]' >

          <Map searchResults={searchResults} />

        </section>

      </main>

    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
  .then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults
    }
  }
}