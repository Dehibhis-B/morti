import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './utils/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentLis from './components/ResidentLis'


function App() {
    const [location, setLocation] = useState(null)

    useEffect(() =>{
      const URL =`https://rickandmortyapi.com/api/location/${getRandomDimension()}`
      console.log(URL)
      axios.get(URL)
        .then(({data}) => setLocation(data))
        .catch((err) => console.log(err))
    }, [])

    return (

      <main className='bg-black min-h-screen text-white'>
        <Location location={location} setLocation={setLocation}/>
        <ResidentLis residents={location?.residents}/>
      </main>
    )
}

export default App
