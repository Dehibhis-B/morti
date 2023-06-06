import React from 'react'
import axios from 'axios'

const Location = ({location, setLocation}) => {
    console.log(location)
    const handleSubmit = (e) => {
      e.preventDefault()
      const newLocation = e.target.newLocation.value

      const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
      console.log(URL)
      axios.get(URL)
        .then(({data}) => setLocation(data))
        .catch((err) => console.log(err))

    }
  return (
    <section className=" gap-2 grid-cols-[repeat(auto-fill,_280px)] justify-center 
            max-w-[1024px] mx-auto py-6">
        <form onSubmit={handleSubmit} className="flex  grid-cols-[repeat(auto-fill,_280px)] justify-center 
                max-w-[1024px] mx-auto py-6">
          <input id="newLocation" className="text-black w-[400px] h-10" placeholder="type of planet" type="text" />
          <button className="bg-green-500 w-[100px] h-10" >Search <i className="bx bx-search"></i></button>
        </form>
        <section>
            <h2 className='flex gap-[50px] grid-cols-[repeat(auto-fill,_280px)] justify-center 
                    max-w-[1024px] mx-auto py-6'>{location?.name}</h2>
            <ul className="flex gap-[50px] grid-cols-[repeat(auto-fill,_280px)] justify-center 
                  max-w-[1024px] mx-auto py-6">
                <li className="">Type: {location?.type}</li>
                <li>Dimension: {location?.dimension}</li>
                <li>Population: {location?.residents.length}</li>
                
            </ul>
        </section>
    </section>
  )
}

export default Location