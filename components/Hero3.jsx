import { ChevronLeft, ChevronLeftIcon, ChevronRight, ChevronRightIcon, ChevronsLeftIcon, DollarSignIcon, EarthIcon, FacebookIcon, Heart, HeartIcon, HeartPulse, Instagram, Star, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function hero1() {
  const [isOpen,setIsOpen]=useState(false); 
  const [isOpen1,setIsOpen1]=useState(true);
  const [isOpen2,setIsOpen2]=useState(false);
  const [active,setActive]=useState(true);
  const [active2,setActive2]=useState(false);
 
  const handleClick1 = () => {
    setIsOpen(true); 
  };
  
  
  const handleClick = (tabName) => {
    setActive(tabName);
  }
    
  const handleClick2 = (tabName) => {
    setActive2(tabName);
  }



  return (
    <>
  
 <div className='px-8 items-center font-sans'>
 <div className='flex items-center justify-between'>
        <div className='flex items-center'>
      <p className='font-bold text-2xl text-black mt-8 flex items-center'>Massage</p>
      </div>
      <div className='mt-8'>
        <button className='hero-prev3'><ChevronLeftIcon/></button>
        <button className='hero-next3'><ChevronRight/></button>
        </div>
        </div>
        <Swiper slidesPerView={6}  spaceBetween={12} modules={[Navigation]} navigation={{ nextEl: '.hero-next3', prevEl: '.hero-prev3' }}>

          {products3.map((product3) => (
            <SwiperSlide key={product3.id}>
              <div className='h-fit  mt-2'>
                <div className='flex absolute  mt-4 mx-2 gap-27'>
                  <p className='text-xs bg-white/70 backdrop-blur-lg border border-white/50 px-2 py-1 rounded-full'>{product3.Label}</p>
                  <p className='text-black text-white hover:scale-110'>{product3.label2}</p>

                </div>
                <div>
                  <img
                    src={product3.image}
                    className='h-[200px] w-[250px] rounded-2xl object-cover'
                  />
                </div>
                <p className='font-semibold text-sm mt-1 ml-1'>{product3.tittle}</p>
                <div className='flex items-center ml-1'>
                  <p className='text-xs'>${product3.Price} .</p>
                  <span className='text-xs flex items-center gap-1'>{product3.Icon2}{product3.Rating.toFixed(1)}</span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className='px-8'>
        <div className='flex justify-between'>
      <p className='font-bold text-2xl text-black mt-8 flex items-center'>Popular Homes in Karachi<span><ChevronRight size={20} /></span></p>
      <div className='flex mt-8'>
      <button className='hero-prev4 text-black '><ChevronLeftIcon/></button>
      <button className='hero-next4 text-black'><ChevronRight/></button>
      </div>
      </div>
      <Swiper modules={[Navigation]} slidesPerView={6} spaceBetween={12} navigation={{nextEl:".hero-next4" , prevEl:".hero-prev4"}}>
    
      {products4.map((product4)=>(
        <SwiperSlide key={product4.id} className='h-fit mt-3'>
                        <div className='flex absolute  mt-4 mx-2 gap-17'>
                  <p className='text-xs bg-white/70 backdrop-blur-lg border border-white/50 px-2 py-1 rounded-full'>{product4.Label}</p>
                  <p className='text-black text-white hover:scale-110'>{product4.label2}</p>

                </div>
                <div>
                  <img
                    src={product4.image}
                    className='h-[200px] w-[250px] rounded-2xl object-cover'
                  />
                </div>
                <p className='font-semibold mt-1 ml-1'>{product4.tittle}</p>
                <div className='flex items-center ml-1'>
                  <p className='text-xs'>${product4.Price} .</p>
                  <span className='text-xs flex items-center gap-1'>{product4.Icon2}{product4.Rating.toFixed(1)}</span>
                </div>

</SwiperSlide>
      ))}
      </Swiper>
</div> */}
<div className='h-[680px] bg-[#f7f7f7] mt-10'>
  <p className='pl-8 pt-6 font-bold text-2xl '>Inspiration for Future Gateway</p>
  <div className='flex gap-4 pb-2 border-b mx-6' >
    <div className='' onClick={()=>{setIsOpen1(!isOpen1)}}>
  <p className=' pt-3 ' onClick={()=>handleClick('Unique Stays')}>Unique Stays
    {active ==="Unique Stays" && (
      <p className='border-b-3  pt-4 transtion-all duration-200'></p>
    )}
  </p>
  {isOpen1&&(
    <div className='left-6 right-8 mt-8 bg-[#f7f7f7] h-fit absolute'>
      <div className='flex gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Cabin</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
     
      </div>


      <div className='flex mt-5 gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Cabin</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
     
      </div>

      
      <div className='flex mt-5 gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Cabin</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      </div>
      <div className='flex gap-85 mt-8'>
      <div className=''>
        <p className='text-sm font-semibold'> Support</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>

        </div>
        <div>
          <p className='text-sm font-semibold'>Hosting</p>
          <p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
          </div>
          <div className=' ml-4'>
           <p className='font-semibold text-m'>Airbnb</p> 
           <p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
            </div>
            </div>
    </div>
  )}
  </div>
  <div className='' onClick={()=>{setIsOpen(!isOpen)}}>
  <p className='pt-3 'onClick={()=>handleClick('Travels tips & inspiration')}>Travels tips & Inspiration
  {active ==='Travels tips & inspiration' && (
      <p className='border-b-3 font-bold pt-4'></p>
    )}
  </p>
  {isOpen&&(
    <div className='left-6 right-8 mt-8 bg-[#f7f7f7]  h-fit absolute'>
      <div className='flex gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Landon</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
     
      </div>


      <div className='flex mt-5 gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Cabin</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
     
      </div>

      
      <div className='flex mt-5 gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Cabin</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      </div>
      <div className='flex gap-85 mt-8'>
      <div className=''>
        <p className='text-sm font-semibold'> Support</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>


        </div>
        <div>
          <p className='text-sm font-semibold'>Hosting</p>
          <p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>

          </div>
          <div className=' ml-4'>
           <p className='font-semibold text-m'>Airbnb</p> 
           <p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
            </div>
            </div>
    </div>
  )}
 
            </div>
  <div className='' onClick={()=>{setIsOpen2(isOpen2)}}>
  <p className='pt-3' onClick={()=>handleClick('Airbnb-Friendly Apartments')}>Airbnb-Friendly Apartments 
  {active ==='Airbnb-Friendly Apartments' && (
      <p className='border-b-3 font-bold pt-4'></p>
    )}
  </p>
  {isOpen&&(
    <div className='left-6 right-8 mt-8 bg-[#f7f7f7] h-fit absolute'>
      <div className='flex gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Washington</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
     
      </div>


      <div className='flex mt-5 gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Cabin</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
     
      </div>

      
      <div className='flex mt-5 gap-28'>
      <div className='mt-6  '>
        <p className='font-bold text-lg'>Cabin</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Trehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Tinyhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Beachhouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-lg'>Lakehouses</p>
        <p className='opacity-50 cursor-pointer'>United States</p>
      </div>
      </div>
      <div className='flex gap-85 mt-8'>
      <div className=''>
        <p className='text-sm font-semibold'> Support</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>

        </div>
        <div>
          <p className='text-sm font-semibold'>Hosting</p>
          <p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
          </div>
          <div className=' ml-4'>
           <p className='font-semibold text-m'>Airbnb</p> 
           <p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
<p className='hover-underline mt-2'>Help Center</p>
            </div>
            </div>
    </div>
  )}
  </div>
 
</div>
</div>
<div>
<div className='bg-[#f7f7f7] flex justify-between items-center border-t-2 border-black-300 '>
      <div className='py-6 mt-2 mx-6'>
      <p className='items-center'> <span>© 2025 Airbnb, Inc</span><span className='ml-1'>·Terms</span> <span className='ml-1'>Sitemap</span> <span className='ml-1 hover:underline opacity-50 hover:underline cursor-pointer hover:opacity-100'> Privacy</span> <a className='ml-1 hover:underline cursor-pointer opacity-50 hover:opacity-100'> YourPrivacyChoices</a></p>
      </div>
      <div className='gap-3 mt-2 flex mr-6'>
        <div className='gap-1 flex'>
          <a>
        <EarthIcon  />
        </a>
        <p className='font-bold'>English(US)</p>
        </div>
        <DollarSignIcon/><span className='font-bold'>USD</span>
        <a href='https://www.facebook.com/airbnb ' target='_blank'>
        <FacebookIcon/>
        </a>
        <a href="https://www.twitter.com/airbnb" target='_blank'>
        <X/>
        </a>
        <a href='https://www.instagram.com/airbnb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>
        <Instagram/>
        </a>
      </div>
    </div>
    </div>

  
    {/* <div className='bg-red-200 h-225 mt-15 '>
      <p className='text-2xl font-bold ml-6 pt-8'>Inspiration for Future Getaways</p>
<div className='text-sm  flex gap-6 border-b border-gray-300 pl-6'>
      <button onClick={()=>handleClick1(!isOpen)} ><div className=' hover:font-semibold h-[40px] mt-3 cursor-pointer' onClick={()=>handleClick("Stays Unique")} ><p> Stays Unique 
      {active==="Stays Unique" && 
      <div className='border-b-3 duration-500'></div>
      }
      </p>
   
      </div>
    
      {isOpen &&(
  <div className=' absolute h-fit bg-[#f7f7f7] mt-6.5 h-[800px]'> 
  <div className='flex gap-20'>
  <div className='mt-8 text-left '>
  <p className='text-lg font-bold'>Cabins</p>
  <p className='text-m opacity-50 mt-2 cursor-pointer'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Washington</p>
  <p className='text-m opacity-50 mt-2 cursor-pointer'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>London</p>
  <p className='text-m opacity-50 mt-2 cursor-pointer'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Lords</p>
  <p className='text-m opacity-50 mt-2 cursor-pointer'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Istanbul</p>
  <p className='text-m opacity-50 mt-2 cursor-pointer'>Turkiyaa</p>
  </div>

  </div>

<div className='flex  '>
  <div className='mt-8 text-left '>
  <p className='text-lg font-bold'>Clifton</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left ml-30'>
  <p className='text-lg font-semibold'>Maldiv</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left ml-33'>
  <p className='text-lg font-semibold'>Eden</p>
  <p className='text-m opacity-50 mt-2 '>Newzealand</p>
  </div>
  <div className='mt-8 text-left ml-32'>
  <p className='text-lg font-semibold'>Washington</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left ml-27'>
  <p className='text-lg font-semibold'>Lahore</p>
  <p className='text-m opacity-50 mt-2'>Pakistan</p>
  </div>

  </div>
  


  <div className='flex '>
  <div className='mt-8 text-left items-center'>
  <p className='text-lg font-bold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left ml-30'>
  <p className='text-lg font-semibold'>Tokyo</p>
  <p className='text-m opacity-50 mt-2'>Chinaa</p>
  </div>
  <div className='mt-8 text-left ml-41'>
  <p className='text-lg font-semibold '>Dubai</p>
  <p className='text-m opacity-50 mt-2'>UAE</p>
  </div>
  <div className='mt-8 text-left ml-41'>
  <p className='text-lg font-semibold'>Dhabi</p>
  <p className='text-m opacity-50 mt-2'>UAE</p>
  </div>
  <div className='mt-8 text-left ml-41'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>

  </div>
  <div className='flex '>
<div className='flex '>
<div className=''>
  <p className='font-bold text-left text-xl mt-15 '>Support</p>
  <p className='text-left text-lg mt-3 hover:underline'>Airbnb your home</p>
  <p className='text-left text-lg mt-3 hover:underline'>AirCover</p>
  <p className='text-left text-lg mt-3 hover:underline'>Anti-discrimination</p>
  <p className='text-left text-lg mt-3 hover:underline'>Disability support</p>
  <p className='text-left text-lg mt-3 hover:underline'>Cancellation options</p>
  <p className='text-left text-lg mt-3 hover:underline'>Report neighborhood concern</p>
  <p className='text-left text-lg mt-3 hover:underline'>Help Center</p>
  </div>
  <div className='ml-43'>
    <p className='font-bold text-left text-xl mt-15'>Hosting</p>
    <p className='text-left text-lg mt-3 hover:underline'>Airbnb your home</p>
    <p className='text-left text-lg mt-3 hover:underline'>AirCover</p>
    <p className='text-left text-lg mt-3 hover:underline'>Anti-discrimination</p>
    <p className='text-left text-lg mt-3 hover:underline'>Disability support</p>
    <p className='text-left text-lg mt-3 hover:underline'>Cancellation options</p>
    <p className='text-left text-lg mt-3 hover:underline'>Report neighborhood concern</p>
    <p className='text-left text-lg mt-3 hover:underline'>Report neighborhood concern</p>
    <p className='text-left text-lg mt-3 hover:underline'>Report neighborhood concern</p>
    <p className='text-left text-lg mt-3 hover:underline'>Report neighborhood concern</p>
    <p className='text-left text-lg mt-3 hover:underline'>Report neighborhood concern</p>
   
    </div>
    </div>

    <div className='ml-16'>
      <p className='font-bold text-left text-xl mt-15 '>Airbnb</p>
      <p className='text-left text-lg mt-3 hover:underline'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3 hover:underline'>Newsroom</p>
      <p className='text-left text-lg mt-3 hover:underline'>Careers</p>
      <p className='text-left text-lg mt-3 hover:underline'>Gift Card</p>
      <p className='text-left text-lg mt-3 hover:underline'>Investor</p>
      <p className='text-left text-lg mt-3 hover:underline'>@Airbnb.com</p>
      
    </div>
    </div>
   
 
  
  </div>
)}
      </button>
      <button onClick={()=>{setIsOpen1(!isOpen1)}}><div className=' hover:font-semibold h-[40px] mt-3 cursor-pointer' onClick={()=>handleClick("Travel tips & inspiration")}><p> Travel tips & inspiration
      {active==="Travel tips & inspiration" && 
      <div className='border-b-3 '></div>
      } </p>
    </div>
      {isOpen1 &&(
  <div className=' mr-100 absolute z-5 w-fit h-[750px] bg-[#f7f7f7] w-300 mt-6.5 right-0  left-5'> 
  <div className='flex gap-30'>
  <div className='mt-10 text-left '>
  <p className='text-lg font-bold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2 w-20'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>

  </div>

<div className='flex gap-30'>
  <div className='mt-10 text-left '>
  <p className='text-lg font-bold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>

  </div>
  


  <div className='flex gap-30'>
  <div className='mt-10 text-left '>
  <p className='text-lg font-bold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
 
  </div>
  <div className='flex gap-66'>
<div className='flex gap-70'>
<div className=''>
  <p className='font-bold text-left text-xl mt-15 '>Support</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  </div>
  <div>
    <p className='font-bold text-left text-xl mt-15'>Hosting</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
   
    </div>
    </div>

    <div>
      <p className='font-bold text-left text-xl mt-15 '>Airbnb</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
    </div>
    </div>
   
 
  
  </div>
)}
      </button>
      
      <button onClick={()=>{setIsOpen2(!isOpen2)}}><div className=' hover:font-semibold h-[40px] mt-3 cursor-pointer' onClick={()=>handleClick("Airbnb-friendly apartments")}><p> Airbnb-friendly apartments </p>
      {active==='Airbnb-friendly apartments' && 
      <div className='border-b-3 '></div>
      }
      </div>
        
      {isOpen2 &&(
  <div className='mr-100 absolute h-[750px] bg-[#f7f7f7] z-5 w-fit bg-[] mt-6.5 right-0  left-5'> 
  <div className='flex gap-30'>
  <div className='mt-8 text-left '>
  <p className='text-lg font-bold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2 '>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  
  </div>

<div className='flex items-center'>
  <div className='mt-8 text-left '>
  <p className='text-lg font-bold '>Cabins</p>
  <p className='text-m opacity-50 mt-2 w-[100px] '>United States</p>
  </div>
  <div className='mt-8 text-left ml-27'>
  <p className='text-lg font-semibold '>Luxury </p>
  <p className='text-m opacity-50 mt-2'>Gorgia</p>
  </div>
  <div className='mt-8 text-left ml-36'>
  <p className='text-lg font-semibold'>Augusto</p>
  <p className='text-m opacity-50 mt-2'>Metro</p>
  </div>
  <div className='mt-8 text-left ml-34'>
  <p className='text-lg font-semibold'>Washington</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left ml-26'>
  <p className='text-lg font-semibold'>Tree houses</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
 
  </div>
  


  <div className='flex gap-30'>
  <div className='mt-10 text-left '>
  <p className='text-lg font-bold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
  <div className='mt-8 text-left'>
  <p className='text-lg font-semibold'>Cabins</p>
  <p className='text-m opacity-50 mt-2'>United States</p>
  </div>
 
  </div>
  <div className='flex gap-66'>
<div className='flex gap-70'>
<div className=''>
  <p className='font-bold text-left text-xl mt-15 '>Support</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  <p className='text-left text-lg mt-3'>Help Center</p>
  </div>
  <div>
    <p className='font-bold text-left text-xl mt-15'>Hosting</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    <p className='text-left text-lg mt-3'>Airbnb your home</p>
    
    </div>
    </div>

    <div>
      <p className='font-bold text-left text-xl mt-15 '>Airbnb</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
      <p className='text-left text-lg mt-3'>2025 Summer Release</p>
    </div>
    </div>
   
 
  
  </div>
)}
      </button>
      </div>
      <div className='bg-[#f7f7f7] flex w-[1420px] mt-195 justify-between items-center border-t-2 border-gray-300 '>
      <div className='py-6 mt-2 mx-6'>
      <p className='items-center'> <span>© 2025 Airbnb, Inc</span><span className='ml-1'>·Terms</span> <span className='ml-1'>Sitemap</span> <span className='ml-1 hover:underline opacity-50 hover:underline cursor-pointer hover:opacity-100'> Privacy</span> <a className='ml-1 hover:underline cursor-pointer opacity-50 hover:opacity-100'> YourPrivacyChoices</a></p>
      </div>
      <div className='gap-3 mt-2 flex mr-6'>
        <div className='gap-1 flex'>
          <a>
        <EarthIcon  />
        </a>
        <p className='font-bold'>English(US)</p>
        </div>
        <DollarSignIcon/><span className='font-bold'>USD</span>
        <a href='https://www.facebook.com/airbnb ' target='_blank'>
        <FacebookIcon/>
        </a>
        <a href="https://www.twitter.com/airbnb" target='_blank'>
        <X/>
        </a>
        <a href='https://www.instagram.com/airbnb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>
        <Instagram/>
        </a>
      </div>
    </div>
    </div> */}
    {/* <div className='bg-[#f7f7f7] flex w-[967px] absolute justify-between items-center border-t-2 border-gray-300 '>
      <div className='py-6 mt-2 mx-6'>
      <p className='items-center'> <span>© 2025 Airbnb, Inc</span><span className='ml-1'>·Terms</span> <span className='ml-1'>Sitemap</span> <span className='ml-1 hover:underline opacity-50 hover:underline cursor-pointer hover:opacity-100'> Privacy</span> <a className='ml-1 hover:underline cursor-pointer opacity-50 hover:opacity-100'> YourPrivacyChoices</a></p>
      </div>
      <div className='gap-3 mt-2 flex mr-6'>
        <div className='gap-1 flex'>
          <a>
        <EarthIcon  />
        </a>
        <p className='font-bold'>English(US)</p>
        </div>
        <DollarSignIcon/><span className='font-bold'>USD</span>
        <a href='https://www.facebook.com/airbnb ' target='_blank'>
        <FacebookIcon/>
        </a>
        <a href="https://www.twitter.com/airbnb" target='_blank'>
        <X/>
        </a>
        <a href='https://www.instagram.com/airbnb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>
        <Instagram/>
        </a>
      </div>
    </div> */}
    </>
  )
}

export default hero1
const products3=[
    {
     id:1,
     Label:"Popular",
     label2:<Heart className='fill-black/30'/>,
     tittle:"Got your massage therapy in london",
     Price:"90 for 2 Nights",
     Icon2:<Star size={9}/>,
     Rating:5,
  image:"e71.avif"
    },
    {
      id:1,
      Label:"popular",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Got your massage therapy in london",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"e72.avif"
   
      
     },
     {
      id:1,
      Label:"popular",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Got your massage therapy in Paris",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"e73.avif"
   
     },
     {
      id:1,
      Label:"Popular",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Got your massage therapy in washington",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"e74.avif"
   
     },
     {
      id:1,
      Label:"Popular",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Got your massage therapy in italy",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"e75.avif"
   
     },
     {
      id:1,
      Label:"Guest Favourite",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Got your massage therapy in london",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"e73.avif"
   
     }
     ,
     {
      id:1,
      Label:"Guest Favourite",
      label2:<Heart  className='fill-black/30'/>,
      tittle:"Got your massage therapy in london",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
   image:"e72.avif"
     },
     {
       id:1,
       Label:"Guest Favourite",
       label2:<Heart className='fill-black/30'/>,
       tittle:"Got your massage therapy in japan",
       Price:"90 for 2 Nights",
       Icon2:<Star size={9}/>,
       Rating:5,
       image:"e71.avif"
    
       
      },
      // {
      //  id:1,
      //  Label:"Guest Favourite",
      //  label2:<Heart className='fill-black/30'/>,
      //  tittle:"Learn to bake classic frenchy",
      //  Price:"90 for 2 Nights",
      //  Icon2:<Star size={9}/>,
      //  Rating:5,
      //  image:"e39.avif"
    
      // },
      // {
      //  id:1,
      //  Label:"Guest Favourite",
      //  label2:<Heart className='fill-black/30'/>,
      //  tittle:"Learn to bake classic frenchy",
      //  Price:"90 for 2 Nights",
      //  Icon2:<Star size={9}/>,
      //  Rating:5,
      //  image:"e40.avif"
    
      // },
      // {
      //  id:1,
      //  Label:"Guest Favourite",
      //  label2:<Heart className='fill-black/30'/>,
      //  tittle:"Learn to bake classic frenchy",
      //  Price:"90 for 2 Nights",
      //  Icon2:<Star size={9}/>,
      //  Rating:5,
      //  image:"e34.avif"
    
      // },
      // {
      //  id:1,
      //  Label:"Guest Favourite",
      //  label2:<Heart className='fill-black/30'/>,
      //  tittle:"Learn to bake classic frenchy",
      //  Price:"90 for 2 Nights",
      //  Icon2:<Star size={9}/>,
      //  Rating:5,
      //  image:".avif"
    
      // }
  ]
  







  const products4=[
    {
     id:1,
     Label:"Guest Favourite",
     label2:<Heart  className='fill-black/30'/>,
     tittle:"Apartment in Lahore",
     Price:"90 for 2 Nights",
     Icon2:<Star size={9}/>,
     Rating:5,
  image:"room5.avif"
    },
    {
      id:1,
      Label:"Guest Favourite",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Condo in Lahore",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"room1.avif"
   
      
     },
     {
      id:1,
      Label:"Guest Favourite",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Condo in Lahore",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"room3.avif"
   
     },
     {
      id:1,
      Label:"Guest Favourite",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Condo in Lahore",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"room2.avif"
   
     },
     {
      id:1,
      Label:"Guest Favourite",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Condo in Lahore",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"room4.avif"
   
     },
     {
      id:1,
      Label:"Guest Favourite",
      label2:<Heart className='fill-black/30'/>,
      tittle:"Condo in Lahore",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
      image:"room2.avif"
   
     },
     {
      id:1,
      Label:"Guest Favourite",
      label2:<Heart  className='fill-black/30'/>,
      tittle:"Apartment in Lahore",
      Price:"90 for 2 Nights",
      Icon2:<Star size={9}/>,
      Rating:5,
   image:"room5.avif"
     },
     {
       id:1,
       Label:"Guest Favourite",
       label2:<Heart className='fill-black/30'/>,
       tittle:"Condo in Lahore",
       Price:"90 for 2 Nights",
       Icon2:<Star size={9}/>,
       Rating:5,
       image:"room1.avif"
    
       
      },
      {
       id:1,
       Label:"Guest Favourite",
       label2:<Heart className='fill-black/30'/>,
       tittle:"Condo in Lahore",
       Price:"90 for 2 Nights",
       Icon2:<Star size={9}/>,
       Rating:5,
       image:"room3.avif"
    
      },
      {
       id:1,
       Label:"Guest Favourite",
       label2:<Heart className='fill-black/30'/>,
       tittle:"Condo in Lahore",
       Price:"90 for 2 Nights",
       Icon2:<Star size={9}/>,
       Rating:5,
       image:"room2.avif"
    
      },
      {
       id:1,
       Label:"Guest Favourite",
       label2:<Heart className='fill-black/30'/>,
       tittle:"Condo in Lahore",
       Price:"90 for 2 Nights",
       Icon2:<Star size={9}/>,
       Rating:5,
       image:"room4.avif"
    
      },
      {
       id:1,
       Label:"Guest Favourite",
       label2:<Heart className='fill-black/30'/>,
       tittle:"Condo in Lahore",
       Price:"90 for 2 Nights",
       Icon2:<Star size={9}/>,
       Rating:5,
       image:"room2.avif"
    
      }
  ]
  