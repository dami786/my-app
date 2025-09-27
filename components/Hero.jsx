import { ChevronLeftIcon, ChevronRight, ChevronRightIcon, Heart, HeartIcon, HeartPulse, Star } from 'lucide-react'
import React from 'react'
import Hero1 from './Hero1'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from 'react';

function Hero() {
  return (
    <>
    
    

    
      <div className=' lg:px-8 px-4 relative '>
        <div className='flex items-center justify-between'>
      <p className='font-bold text-2xl text-black mt-8 flex items-center'>Popular Homes in Lahore<span><ChevronRight size={20} /></span></p>
      <div className='flex items-center mt-8'>
        <button className="hero-prev rounded-full"><ChevronLeftIcon size={20}/></button>
        <button className="hero-next rounded-full"><ChevronRight size={20}/></button>
        </div>
        </div>
        <Swiper
  slidesPerView={6}
  spaceBetween={12}
  modules={[Navigation]}
  navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
  breakpoints={{
    
    0: {
      slidesPerView: 2,
    },
   
    768: {
      slidesPerView: 4,
    },
     1024: {
      slidesPerView: 6,
    },
    2560:
    {
      slidesPerView: 8,
    }
  }}


>
  {products.map((product) => (
    <SwiperSlide key={product.id}>
      <div className='h-fit mt-2'>
        <div className='flex gap-15 lg:gap-13 mx-2 absolute mt-4 '>
          <p className='text-xs bg-white/70 backdrop-blur-lg border border-white/50 px-1 lg:px-2 py-1 rounded-full'>
            {product.Label}
          </p>
          <p className='text-white hover:scale-110'>{product.label2}</p>
        </div>
        <div>
          <img
            src={product.image}
            className='h-[200px] w-[250px] rounded-2xl object-cover'
          />
        </div>
        <p className='font-semibold mt-1 ml-1'>{product.tittle}</p>
        <div className='flex items-center ml-1'>
          <p className='text-xs'>${product.Price} .</p>
          <span className='text-xs flex items-center gap-1'>
            {product.Icon2}
            {product.Rating.toFixed(1)}
          </span>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>

      
      <div className=' lg:px-8 px-6 mt-2 relative '>
        <div className='flex items-center justify-between'>
      <p className='font-bold text-2xl text-black mt-8 flex items-center'>Popular Homes in Murree<span><ChevronRight size={20} /></span></p>
      <div className='flex items-center mt-8'>
        <button className="hero-prev1 rounded-full"><ChevronLeftIcon size={20}/></button>
        <button className="hero-next1 rounded-full"><ChevronRight size={20}/></button>
        </div>
        </div>
        <Swiper slidesPerView={6} spaceBetween={12} modules={[Navigation]} navigation={{ nextEl: '.hero-next1', prevEl: '.hero-prev1' }}   breakpoints={{
    
    0: {
      slidesPerView: 2,
    },
   
    768: {
      slidesPerView: 4,
    },
     1024: {
      slidesPerView: 6,
    },
  }}>

          {products1.map((product1) => (
            <SwiperSlide key={product1.id}>
              <div className='mt-2'>
                <div className='flex gap-15 lg:gap-13 absolute  mt-4 mx-2 '>
                  <p className='text-xs bg-white/70 backdrop-blur-lg border border-white/50 px-1 lg:px-2 py-1 rounded-full'>{product1.Label}</p>
                  <p className=' text-white hover:scale-110'>{product1.label2}</p>

                </div>
                <div>
                  <img
                    src={product1.image}
                    className='h-[200px] w-[250px] rounded-2xl object-cover'
                  />
                </div>
                <p className='font-semibold mt-1 ml-1'>{product1.tittle}</p>
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
      <p className='font-bold text-2xl text-black mt-8 items-center flex '>Availaible in Nathiagali <span><ChevronRight size={20} /></span></p>
      <div className='flex items-center mt-8'>
        <button className="hero-prev2 rounded-full"><ChevronLeftIcon size={20}/></button>
        <button className="hero-next2 rounded-full"><ChevronRight size={20}/></button>
        </div>
        </div>
        <Swiper slidesPerView={6} spaceBetween={12} modules={[Navigation]} navigation={{ nextEl: '.hero-next2', prevEl: '.hero-prev2' }}   breakpoints={{
    
    0: {
      slidesPerView: 2,
    },
   
    768: {
      slidesPerView: 4,
    },
     1024: {
      slidesPerView: 6,
    },
  }}>

          {products2.map((product2) => (
            <SwiperSlide key={product2.id}>
              <div className='h-fit  mt-2'>
                <div className='flex absolute gap-15 lg:gap-13  mt-4 mx-2 '>
                  <p className='text-xs bg-white/70 backdrop-blur-lg border border-white/50 px-2 py-1 rounded-full'>{product2.Label}</p>
                  <p className=' text-white hover:scale-110'>{product2.label2}</p>

                </div>
                <div>
                  <img
                    src={product2.image}
                    className='h-[200px] w-[250px] rounded-2xl object-cover'
                  />
                </div>
                <p className='font-semibold mt-1 ml-1'>{product2.tittle}</p>
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
        <Hero1  />
      </div>


    </>
  )
}

export default Hero

const products = [
  {
    id: 1,
    Label: "Guest Favourite",
    label2: <Heart className='fill-black/30' />,
    tittle: "Apartment in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room1.avif"
  },
  {
    id: 2,
    Label: "Guest Favourite",
    label2: <Heart className='fill-black/30' />,
    tittle: "House in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room3.avif"


  },
  {
    id: 3,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Condo in Peshawar",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room5.avif"

  },
  {
    id: 4,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30' />,
    tittle: "Condo in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room8.avif"

  },
  {
    id: 5,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "  in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room25.avif"

  },
  {
    id: 6,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "House in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room17.avif"

  },
  {
    id: 7,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Luxary Room in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room18.avif"

  },
  {
    id: 8,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "House in Peshawar",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room20.jpg"

  },
  {
    id: 8,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Condo in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room18.avif"

  },
  {
    id: 8,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "House in Quetta",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room9.avif"

  },
  {
    id: 8,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Singleroom in Nathiagali",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room17.avif"

  },
  {
    id: 8,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Bedrrom in Karachi",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room4.avif"

  },
  {
    id: 8,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Singleroom in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room28.avif"

  }
]


const products1 = [
  {
    id: 1,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room35.avif"
  },
  {
    id: 2,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "House in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room28.avif"


  },
  {
    id: 3,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in Islamabd",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room29.avif"

  },
  {
    id: 4,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room3.avif"

  },
  {
    id: 5,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "House in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room20.jpg"

  },
  {
    id: 6,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Bedroom in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room23.avif"

  },
  {
    id: 1,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Room in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room20.jpg"
  },
  {
    id: 2,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Condo in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room21.avif"


  },
  {
    id: 3,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in Karachi",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room7.avif"

  },
  {
    id: 4,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "House in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room29.avif"

  },
  {
    id: 5,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Room in Nathiagali",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room35.avif"

  },
  {
    id: 6,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Room in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room18.avif"

  }
]




const products2 = [
  {
    id: 1,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room17.avif"
  },
  {
    id: 2,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Condo in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room17.avif"


  },
  {
    id: 3,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in muree",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room4.avif"

  },
  {
    id: 4,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Bedroom in muree",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room20.jpg"

  },
  {
    id: 5,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room36.avif"

  },
  {
    id: 6,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Condo in Islamabad",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room38.avif"

  },
  {
    id: 1,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room5.avif"
  },
  {
    id: 2,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Condo in nathiagali",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room4.avif"


  },
  {
    id: 3,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Singleroom in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room3.avif"

  },
  {
    id: 4,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "House in Lahore",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room23.avif"

  },
  {
    id: 5,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Bedroom in Muree",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room28.avif"

  },
  {
    id: 6,
    Label: "Guest Favourite",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Apartment in Muree",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "room29.avif"

  }
]

