import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Resident = ({residentUrl}) => {

  const [residentInfo, setResidentInfo] =useState(null)
    useEffect(() => {
      axios.get(residentUrl)
      .then(({data}) => setResidentInfo(data))
      .catch((err) => console.log(err))

    }, [])
  return (
    <article className="border-2 border-green-400">
      <div className="relative">
          <img src={residentInfo?.image} alt="" />
          <div className="flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-[50%]
           bg-black border-2 border-green-500 opacity-75 min-w-[100px] justify-center " >
            <div className="h-3 aspect-square bg-green-500 rounded-full " ></div>Dead
          </div>
      </div>
      <section className="border-2 border-green-500 ">
          <h3 className="text-2xl font-bold inset-px p-2 " >{residentInfo?.name}</h3>
          <ul className=' grid items-center gap-3'>
              <li className="flex items-center p-2 ">
                <span className=' min-w-[120px] text-slate-400 '>Species</span>
                <span className="le" >{residentInfo?.species}</span>
              </li>
              <li className="flex items-center p-1  ">
                <span className='min-w-[120px] text-slate-400'>Origin</span>
                <span>{residentInfo?.origin.name}</span>
              </li>
              <li className="flex items-center p-1 ">
                <span className='min-w-[120px] text-slate-400'>Times Appear</span>
                <span>{residentInfo?.episode.length}</span>
              </li>
              
          </ul>
    </section>
</article>
  )
}

export default Resident