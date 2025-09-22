import { Building, Building2Icon, Divide, Earth, FactoryIcon, Menu, Sea, SearchIcon, SendIcon, TreePalmIcon, TreesIcon, WavesIcon } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from 'react'
import Hero from './Hero';
import Hero1 from './Hero1';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from 'react';


function Navbar() {
  const [active, setActive] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
 

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen9(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen3(false); // close if clicked outside
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen4(false); // close if clicked outside
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen5(false); // close if clicked outside
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // close if clicked outside
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);






  const handleClick = (tabName) => {
    setActive(tabName);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowFixedNav(true);
      } else {
        setShowFixedNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    <>

      <div className='bg-gray-100 hidden lg:block  h-[210px] overflow-hidden font-sans border-b-3 border-gray-300'>

        {!showFixedNav && (

          <div className='flex items-center mt-7 justify-between relative'>
            <div className=''>
              <img
                src='gty.png '
                className=' object-cover  h-[35px] pl-10 '

              />
            </div>
            <div className='flex items-center gap-8 h-[30px] absolute left-1/2 -translate-x-1/2' >
              <div className=''
                onClick={() => handleClick("Homes")} >
                <div className='flex items-center  cursor-pointer gap-2 py-1  group'  >

                  <img
                    src='icon2.png'
                    width={50}
                    className='group-hover:scale-110 duration-500'
                  />
                  <a href='/' className='font-sans roboto hover:font-bold'>Homes</a>

                </div>

                {active === "Homes" &&
                  <div className='border-b-3 w-full py-1 transition-all duration-300 ease-in-out'></div>
                }
              </div>
              <div className='group' onClick={() => handleClick("Experience")} >
                <div className='bg-[#354969] text-xs font-bold text-white w-[43px] py-1 rounded-tl-full rounded-br-full rounded-tr-full group-hover:scale-105 justify-center absolute pl-2  bottom-6.5 left-47' >New</div>
                <div className='flex items-center gap-2 cursor-pointer py-1 group'  >

                  <img
                    src='icon3.avif'
                    width={50}
                    className='group-hover:scale-110 duration-300'
                  />

                  <a href="experiences" className='hover:font-bold'>Experience</a>
                </div>
                {active === "Experience" &&
                  <div className='border-b-3 w-full py-1'></div>}
                <div />

              </div>
              <div onClick={() => { handleClick("Services") }}>

                <div className='bg-[#354969] text-xs font-bold text-white w-[43px] py-1 rounded-tl-full rounded-br-full rounded-tr-full justify-center absolute pl-2 bottom-6.5 left-87 group-hover:scale-105 ' >New</div>

                <div className='group flex items-center gap-2 cursor-pointer py-1 group'>
                  <img
                    src='icon4.avif'
                    width={40}
                    className='group-hover:scale-110 duration-300'
                  />
                  <a className='hover:font-bold' href="Services">Services</a>
                </div>

                {active === "Services" &&
                  <div className='border-b-3 w-full py-1'></div>

                }
              </div>

            </div>


            <div className='flex items-center gap-3 pr-8 ' >
              <div onClick={() => { setIsOpen6(!isOpen6) }}>
                <a className='hover:bg-gray-300  px-3 py-1.5 rounded-full font-semibold text-m cursor-pointer'>Become a Host</a>

              </div>
              <div className=' flex w-[40px] h-[40px] bg-gray-300 hover:scale-104  cursor-pointer  rounded-full items-center justify-center'>

                <Earth size={20} className='r' />


              </div>
              <div className=' flex w-[40px] h-[40px] bg-gray-300 hover:scale-104 cursor-pointer  rounded-full items-center justify-center'>

                <Menu size={20} />
              </div>
            </div>

          </div>

        )}

        {!showFixedNav && (
          <div className=" flex justify-center px-6" >
            <div className='flex justify-center items-center bg-white mt-10 mb-12 w-fit shadow-2xl rounded-full border-3 border-gray-200 ' onClick={() => { setIsOpen2(!isOpen2) }} >
              {isOpen2 && (
                <div className=' absolute bg-gray-300 h-[68px] w-[850px] rounded-full'></div>
              )}

              <div className='flex  '>
                <div className='flex group'>
                  <div className=' py-4 w-[300px] border-r group-hover:border-none border-gray-100 hover:border-none hover:bg-gray-100 hover:rounded-full   text-sm z-10' onClick={() => { setIsOpen(!isOpen) }}>
                    <div className='absolute z-50'>
                      <p className='ml-8 font-semibold'>Where</p>
                      <input
                        type="text"
                        placeholder='Search Destinstion'
                        className='ml-8 outline-none'
                        ref={dropdownRef}
                        onClick={() => setIsOpen9(!isOpen9)}

                      />
                      {isOpen9  && (
                        <div  className='bg-white shadow-md border-gray-300 top-15 rounded-2xl border absolute h-[400px] w-[500px] overflow-hidden hover:overflow-y-scroll'>
                          <p className='text-sm ml-7 mt-6'>Suggested destination</p>
                          <div className='ml-4 mr-8 mt-1 hover:bg-[#ebebeb] rounded-2xl flex py-2 items-center gap-4'>
                            <div className='w-[80px] h-[60px] bg-[#f0f5fa] rounded-xl ml-3 flex items-center justify-center'>
                              <SendIcon className='text-[#73a1ce]' size={35} />
                            </div>
                            <div >
                              <p className='font-bold text-lg cursor-pointer'>Nearby</p>
                              <p className='opacity-50 text-m cursor-pointer'>Find Whats around you</p>
                            </div>
                          </div>

                          <div className='ml-4 mr-8 mt-1 hover:bg-[#ebebeb] rounded-2xl flex py-2 items-center gap-4'>
                            <div className='w-[80px] h-[60px] bg-[#fdf7f1] rounded-xl ml-3 flex items-center justify-center'>
                              <Building2Icon className='text-[#edad72]' size={35} />
                            </div>
                            <div >
                              <p className='font-bold text-lg cursor-pointer'>Islamabad,Pakistan</p>
                              <p className='opacity-50 text-m cursor-pointer w-[250px]'>Because Your wishlist has stays in Pakistan</p>
                            </div>
                          </div>

                          <div className='ml-4 mr-8 mt-1 hover:bg-[#ebebeb] rounded-2xl flex py-2 items-center gap-4'>
                            <div className='w-[80px] h-[60px] bg-[#f0f5f1] rounded-xl ml-3 flex items-center justify-center'>
                              <FactoryIcon className='text-[#70aa78]' size={35} />
                            </div>
                            <div >
                              <p className='font-bold text-lg cursor-pointer'>Lahore,Pakistan</p>
                              <p className='opacity-50 text-m cursor-pointer'>Because Your wishlist has stays in Pakistan</p>
                            </div>
                          </div>

                          <div className='ml-4 mr-8 mt-1 hover:bg-[#ebebeb] rounded-2xl flex py-2 items-center gap-4'>
                            <div className='w-[80px] h-[60px] bg-[#f2f4f8] rounded-xl ml-3 flex items-center justify-center'>
                              <TreesIcon className='text-[#647699]' size={35} />
                            </div>
                            <div >
                              <p className='font-bold text-lg cursor-pointer'>Murree</p>
                              <p className='opacity-50 text-m cursor-pointer'>Near You</p>
                            </div>
                          </div>

                          <div className='ml-4 mr-8 mt-1 hover:bg-[#ebebeb] rounded-2xl flex py-2 items-center gap-4'>
                            <div className='w-[80px] h-[60px] bg-[#fbf7f4] rounded-xl ml-3 flex items-center justify-center'>
                              <WavesIcon className='text-[#d6ba9c]' size={35} />
                            </div>
                            <div >
                              <p className='font-bold text-lg cursor-pointer'>Karachi,Pakistan</p>
                              <p className='opacity-50 text-m cursor-pointer'>Find Whats around you</p>
                            </div>
                          </div>

                          <div className='ml-4 mr-8 mt-1 hover:bg-[#ebebeb] rounded-2xl flex py-2 items-center gap-4'>
                            <div className='w-[80px] h-[60px] bg-[#fef3f2] rounded-xl ml-3 flex items-center justify-center'>
                              <TreePalmIcon className='text-[#ee6553]' size={35} />
                            </div>
                            <div >
                              <p className='font-bold text-lg cursor-pointer'>Nathia gali,Pakistan</p>
                              <p className='opacity-50 text-m cursor-pointer'>Near you</p>
                            </div>
                          </div>

                          <div className='ml-4 mr-8 mt-1 hover:bg-[#ebebeb] rounded-2xl flex py-2 items-center gap-4'>
                            <div className='w-[80px] h-[60px] bg-[#f2f4f8] rounded-xl ml-3 flex items-center justify-center'>
                              <Building className='text-[#647699]' size={35} />
                            </div>
                            <div >
                              <p className='font-bold text-lg cursor-pointer'>Istanbul,Turkiyaa</p>
                              <p className='opacity-50 text-m cursor-pointer'>World Famous</p>
                            </div>
                          </div>

                          <div className='ml-4 mr-8 mt-1 hover:bg-[#ebebeb] rounded-2xl flex py-2 items-center gap-4'>
                            <div className='w-[80px] h-[60px] bg-[#f0f5fa] rounded-xl ml-3 flex items-center justify-center'>
                              <SendIcon className='text-[#73a1ce]' size={35} />
                            </div>
                            <div >
                              <p className='font-bold text-lg cursor-pointer'>SwizerLand</p>
                              <p className='opacity-50 text-m cursor-pointer'>Find Whats around you</p>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                    {isOpen  && (
                      <div ref={dropdownRef} className='bg-white absolute z-5 h-[68px] top-28 w-[300px] border-gray-100 rounded-full transition-smooth duration-100'></div>
                    )
                    } 
                  </div>
                  <div className='py-4 w-[140px] hover:bg-gray-100 border-gray-100 hover:rounded-full group z-10 text-sm  ' onClick={() => { setIsOpen4(!isOpen4) }}>
                    {isOpen4  && (
                      <div ref={dropdownRef} className='bg-white absolute w-[140px] h-[67px] top-28 z-5 rounded-full z-5' ></div>
                    )}
                    <div className='absolute z-50'>
                      <p className='ml-4 font-semibold'>Check in</p>
                      <div className='ml-4 text-xs '>
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          className="  rounded-lg w-[80px] outline-none pointers-event-none"
                          placeholderText="Add Date"
                        />


                      </div>
                    </div>

                  </div>
                </div>
                <div className='py-4 w-[140px] hover:bg-gray-100 border-gray-100  hover:rounded-full z-10 group group-hover:border-none border-l text-sm' onClick={() => { setIsOpen3(!isOpen3) }} >
                  {isOpen3 && (
                    <div ref={dropdownRef} className='bg-white absolute w-[140px] h-[67px] top-28 rounded-full z-5' ></div>
                  )}
                  <div className=' absolute z-50'>
                    <p className='ml-4 font-semibold '>Check out</p>
                    <div className='ml-4 text-xs '>
                      <DatePicker
                        selected={selectedDate1}
                        onChange={(date1) => setSelectedDate1(date1)}
                        className="  rounded-lg w-[80px] outline-none top-0 pointers-event-none"
                        placeholderText="Add Date"
                      />

                    </div>
                  </div>

                </div>


                <div className='justify-between flex py-3 w-[267px] hover:bg-gray-100 border-gray-50 border-l z-50 hover:rounded-full group-hover:border-none text-sm items-center' onClick={() => { setIsOpen5(!isOpen5) }}>
                  {isOpen5 && (
                    <div ref={dropdownRef}  className='bg-white absolute w-[268px] h-[67.5px] top-27.5 z-5 rounded-full z-5' ></div>
                  )}
                  <a className='absolute z-50 '>
                    <p className='ml-4 font-semibold'>Who</p>
                    <p className='ml-4 text-xs'>Add Guests</p>
                  </a>

                  <div className='h-[45px] w-[45px] bg-[#ff385c] ml-53 z-50 hover:bg-red-800 rounded-full mr-2 items-center '>
                    <a>
                      <SearchIcon size={20} className=' mt-3 ml-3 text-white' />
                    </a>
                  </div>


                </div>
              </div>
            </div>

          </div>
        )}

        <div
          className={`flex items-center justify-between transition-smooth duration-100 ${showFixedNav
            ? 'fixed bg-white shadow-lg w-full z-50  py-6'
            : ''
            }`}
        >


          <img
            src='gty.png '
            className=' object-cover  h-[35px] ml-8'

          />
          <div className=''>
            <div className=' flex w-[400px] bg-white shadow md rounded-full items-center py-2 text-sm hover:shadow-lg'>
              <div className='flex items-center w-[130px] ml-3 gap-3 border-r border-gray-200 '>
                <img src='icon4.avif' width={35} />
                <span className='font-semibold cursor-pointer'>Anywhere</span>
              </div>
              <span className='font-semibold flex items-center w-[80px] ml-3 gap-3 border-r border-gray-200 cursor-pointer'>Anytime</span>
              <div>
              </div>
              <div className='justify-between flex items-center'>
                <span className='font-semibold flex items-center w-[120px] ml-3 gap-3 cursor-pointer'>Add guests</span>
                <div className='w-[30px] h-[30px] rounded-full bg-[#ff385c] mr-2 flex justify-center items-center'>
                  <SearchIcon size={15} className='text-white ' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-4 mr-6'>
            <a className='hover:bg-[#f2f2f2]  px-3 py-1.5 rounded-full font-semibold text-m'>Become a Host</a>
            <div className=' flex w-[40px] h-[40px] bg-[#f2f2f2] hover:scale-102  rounded-full items-center justify-center'>

              <Earth size={20} />


            </div>
            <div className=' flex w-[40px] h-[40px] bg-[#f2f2f2] hover:scale-102  rounded-full items-center justify-center'>

              <Menu size={20} />
            </div>
          </div>


        </div>
      </div>

      <div className='bg-gray-100 lg:hidden'>mobile navbar</div>
    </>
  )


}



export default Navbar
