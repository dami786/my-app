import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import { CircleUserIcon, HeartIcon, Search } from 'lucide-react'

function index() {
  return (
    <div className='relative'>
      <div className=' block gap-5 py-3 lg:hidden bg-white shadow-8xl w-full border-t border-gray-300 z-50 fixed rounded-lg bottom-0 flex justify-center'>
       
        <div className='items-center'>
        <Search className="  align-middle ml-2 " size={35}/>
        <h1 className='font-bold  align-middle '>Explore</h1>
        </div>
        <div>
        <HeartIcon className='ml-2' size={35}/>
        <h1 className='font-bold  '>Explore</h1>
        </div>
        <div>
        <CircleUserIcon className="ml-2" size={35}/>
        <h1 className='font-bold  inline-block align-middle'>Explore</h1>
        </div>



      </div>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default index