import { ChevronLeftIcon, ChevronRight, ChevronRightIcon, Heart, HeartIcon, HeartPulse, Star } from 'lucide-react'
import React from 'react'
import Hero2 from './Hero2'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from 'react';

function Hero() {
  return (
    <>
    
    

    <p className=' font-bold text-3xl text-black mt-8 flex items-center pl-8'>Popular with travelers from your area</p>
      <div className=' px-8 mt-2 relative '>
        <div className='flex items-center justify-between'>
      <p className='font-bold text-2xl text-black mt-4 flex items-center'>Experiencing in london<span><ChevronRight size={20} /></span></p>
      <div className='flex items-center mt-8'>
        <button className="hero-prev rounded-full"><ChevronLeftIcon size={20}/></button>
        <button className="hero-next rounded-full"><ChevronRight size={20}/></button>
        </div>
        </div>
        <Swiper slidesPerView={6} spaceBetween={12} modules={[Navigation]}   breakpoints={{
    
    0: {
      slidesPerView: 2,
    },
   
    768: {
      slidesPerView: 4,
    },
     1024: {
      slidesPerView: 6,
    },
  }} navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}>

          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className='h-fit  mt-2'>
                <div className='flex absolute  mt-4 mx-2 gap-27'>
                  <p className='text-xs bg-white/70 backdrop-blur-lg border border-white/50 px-2 py-1 rounded-full'>{product.Label}</p>
                  <p className='text-black text-white hover:scale-110'>{product.label2}</p>

                </div>
                <div>
                  <img
                    src={product.image}
                    className='h-[200px] w-[250px] rounded-2xl object-cover'
                  />
                </div>
                <p className='font-semibold text-sm mt-1 ml-1'>{product.tittle}</p>
                <div className='flex items-center ml-1'>
                  <p className='text-xs'>${product.Price} .</p>
                  <span className='text-xs flex items-center gap-1'>{product.Icon2}{product.Rating.toFixed(1)}</span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className=' px-8 mt-2 relative '>
        <div className='flex items-center justify-between'>
      <p className='font-bold text-2xl text-black mt-8 flex items-center'>Experiences in Kuala Lumpur<span><ChevronRight size={20} /></span></p>
      <div className='flex items-center mt-8'>
        <button className="hero-prev1 rounded-full"><ChevronLeftIcon size={20}/></button>
        <button className="hero-next1 rounded-full"><ChevronRight size={20}/></button>
        </div>
        </div>
        <Swiper slidesPerView={6} spaceBetween={12} modules={[Navigation]}   breakpoints={{
    
    0: {
      slidesPerView: 2,
    },
   
    768: {
      slidesPerView: 4,
    },
     1024: {
      slidesPerView: 6,
    },
  }} navigation={{ nextEl: '.hero-next1', prevEl: '.hero-prev1' }}>

          {products1.map((product1) => (
            <SwiperSlide key={product1.id}>
              <div className='h-fit  mt-2'>
                <div className='flex absolute  mt-4 mx-2 gap-27'>
                  <p className='text-xs bg-white/70 backdrop-blur-lg border border-white/50 px-2 py-1 rounded-full'>{product1.Label}</p>
                  <p className='text-black text-white hover:scale-110'>{product1.label2}</p>

                </div>
                <div>
                  <img
                    src={product1.image}
                    className='h-[200px] w-[250px] rounded-2xl object-cover'
                  />
                </div>
                <p className='font-semibold text-sm mt-1 ml-1'>{product1.tittle}</p>
                <div className='flex items-center ml-1'>
                  <p className='text-xs'>${product1.Price} .</p>
                  <span className='text-xs flex items-center gap-1'>{product1.Icon2}{product1.Rating.toFixed(1)}</span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=' px-8 mt-2 relative '>
        <div className='flex items-center justify-between'>
      <p className='font-bold text-2xl text-black mt-8 flex items-center'>Experiencing in Dubai<span><ChevronRight size={20} /></span></p>
      <div className='flex items-center mt-8'>
        <button className="hero-prev2 rounded-full"><ChevronLeftIcon size={20}/></button>
        <button className="hero-next2 rounded-full"><ChevronRight size={20}/></button>
        </div>
        </div>
        <Swiper slidesPerView={6} spaceBetween={12} modules={[Navigation]}   breakpoints={{
    
    0: {
      slidesPerView: 2,
    },
   
    768: {
      slidesPerView: 4,
    },
     1024: {
      slidesPerView: 6,
    },
  }} navigation={{ nextEl: '.hero-next2', prevEl: '.hero-prev2' }}>

          {products2.map((product2) => (
            <SwiperSlide key={product2.id}>
              <div className='h-fit  mt-2'>
                <div className='flex absolute  mt-4 mx-2 gap-27'>
                  <p className='text-xs bg-white/70 backdrop-blur-lg border border-white/50 px-2 py-1 rounded-full'>{product2.Label}</p>
                  <p className='text-black text-white hover:scale-110'>{product2.label2}</p>

                </div>
                <div>
                  <img
                    src={product2.image}
                    className='h-[200px] w-[250px] rounded-2xl object-cover'
                  />
                </div>
                <p className='font-semibold  text-sm mt-1 ml-1'>{product2.tittle}</p>
                <div className='flex items-center ml-1'>
                  <p className='text-xs'>${product2.Price} .</p>
                  <span className='text-xs flex items-center gap-1'>{product2.Icon2}{product2.Rating.toFixed(1)}</span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Hero2 />
      </div>


    </>
  )
}

export default Hero

const products = [
  {
    id: 1,
    Label: "Popular",
    label2: <Heart className='fill-black/30' />,
    tittle: "London Sightseeing walking tour with 30 sites",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e1.avif"
  },
  {
    id: 2,
    Label: "Popular",
    label2: <Heart className='fill-black/30' />,
    tittle: "Walk London with a local",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e2.avif"


  },
  {
    id: 3,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the hidden-pubs of london",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e3.avif"

  },
  {
    id: 4,
    Label: "Popular",
    label2: <Heart  className='fill-black/30' />,
    tittle: "NoN touristy & unseen London with an urban planner",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e4.avif"

  },
  {
    id: 5,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Top rated Landon harry potter",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e5.avif"

  },
  {
    id: 6,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Visit Unique bars in london",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e10.avif"

  },
  {
    id: 7,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Top rated Landon harry potter",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e7.avif"

  },
  {
    id: 8,
    Label: "popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Top rated Landon harry potter",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e6.avif"

  },
  {
    id: 8,
    Label: "popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the hidden-pubs of london",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e9.avif"

  },
  {
    id: 8,
    Label: "popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the hidden-pubs of london",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e8.avif"

  },
  {
    id: 8,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the hidden-pubs of london",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e6.avif"

  },
  {
    id: 8,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the hidden-pubs of london",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e3.avif"

  },
  {
    id: 8,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the hidden-pubs of london",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e8.avif"

  }
]


const products1 = [
  {
    id: 1,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Hidden bar hopping with a local",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e11.avif"
  },
  {
    id: 2,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Authentic Malasian Streak",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e12.webp"


  },
  {
    id: 3,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore kuala Lumpur with local uncle",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e13.avif"

  },
  {
    id: 4,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore kuala Lumpur with local uncle",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e14.avif"

  },
  {
    id: 5,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore kuala Lumpur with local uncle",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e15.avif"

  },
  {
    id: 6,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore kuala Lumpur with local uncle",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e16.avif"

  },
  {
    id: 1,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Step into betu caves",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e11.avif"
  },
  {
    id: 2,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Step into betu caves",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e17.avif"


  },
  {
    id: 3,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Step into betu caves",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e16.avif"

  },
  {
    id: 4,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Step into betu caves",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e15.avif"

  },
  {
    id: 5,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Step into betu caves",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e14.avif"

  },
  {
    id: 6,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Step into betu caves",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e10.avif"

  }
]




const products2 = [
  {
    id: 1,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Experience Luxury desert safari in dubai ",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e19.avif"
  },
  {
    id: 2,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Safari in dubai",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e20.avif"


  },
  {
    id: 3,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Ride in Dubai",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e21.avif"

  },
  {
    id: 4,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Deasert Safari With bbq dinner",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e22.avif"

  },
  {
    id: 5,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the squad by camel",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e23.avif"

  },
  {
    id: 6,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Take a private a friend friendly trip in desert",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e24.avif"

  },
  {
    id: 1,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the squad by camel",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e25.avif"
  },
  {
    id: 2,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Morning Desert Tour",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e23.avif"


  },
  {
    id: 3,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Ride in desert",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e26.avif"

  },
  {
    id: 4,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Morning Desert tour",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e25.avif"

  },
  {
    id: 5,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Cruise to burjalarab",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e28.avif"

  },
  {
    id: 6,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Morning Desert tour",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e29.avif"

  }
]

