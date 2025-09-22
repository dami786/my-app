import { ChevronLeftIcon, ChevronRight, ChevronRightIcon, Heart, HeartIcon, HeartPulse, Star } from 'lucide-react'
import React from 'react'
import Hero3 from './Hero3'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from 'react';

function Hero() {
  return (
    <>
    
    


      <div className=' px-8 mt-2 relative '>
        <div className='flex items-center justify-between'>
      <p className='font-bold text-2xl text-black mt-4 flex items-center'>Photography</p>
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
                <p className='text-sm opacity-50 ml-1'>{product.tittle2}</p>
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
      <p className='font-bold text-2xl text-black mt-8 flex items-center'>Chefs</p>
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
      <p className='font-bold text-2xl text-black mt-8 flex items-center'>Training</p>
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
                <p className='font-semibold text-xs mt-1 ml-1'>{product2.tittle}</p>
                <p className='font-semibold text-xs mt-1 ml-1'>{product2.tittle2}</p>
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
        <Hero3 />
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
    tittle: "Stylish Car vintage Photo",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e41.avif",
    tittle2:"Room,italy"
  },
  {
    id: 2,
    Label: "Popular",
    label2: <Heart className='fill-black/30' />,
    tittle: "Arial and Ground photography by denial",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e42.jpeg",
    tittle2:"Newyork,Us"


  },
  {
    id: 3,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Beautiful photography",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e43.avif",
     tittle2:"Newyork,Us"

  },
  {
    id: 4,
    Label: "Popular",
    label2: <Heart  className='fill-black/30' />,
    tittle: "Arial and Ground photography by denial",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e44.avif",
    tittle2:"Room,italy"

  },
  {
    id: 5,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Arial and Ground photography by denial",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e45.avif",
    tittle2:"Room,italy"

  },
  {
    id: 6,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Arial and Ground photography by denial",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e44.avif",
    tittle2:"Room,italy"

  },
  {
    id: 7,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Authentic photography",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e47.webp",
    tittle2:"Room,italy"

  },
  {
    id: 8,
    Label: "popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Authentic photography",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e46.webp",
    tittle2:"Room,italy"

  },
  {
    id: 8,
    Label: "popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Explore the hidden-pubs of london",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e48.avif",
    tittle2:"Room,italy"

  },
//   {
//     id: 8,
//     Label: "popular",
//     label2: <Heart  className='fill-black/30'/>,
//     tittle: "Explore the hidden-pubs of london",
//     Price: "90 for 2 Nights",
//     Icon2: <Star size={9} />,
//     Rating: 5,
//     image: "e8.avif"

//   },
//   {
//     id: 8,
//     Label: "Popular",
//     label2: <Heart  className='fill-black/30'/>,
//     tittle: "Explore the hidden-pubs of london",
//     Price: "90 for 2 Nights",
//     Icon2: <Star size={9} />,
//     Rating: 5,
//     image: "e6.avif"

//   },
//   {
//     id: 8,
//     Label: "Popular",
//     label2: <Heart  className='fill-black/30'/>,
//     tittle: "Explore the hidden-pubs of london",
//     Price: "90 for 2 Nights",
//     Icon2: <Star size={9} />,
//     Rating: 5,
//     image: "e3.avif"

//   },
//   {
//     id: 8,
//     Label: "Popular",
//     label2: <Heart  className='fill-black/30'/>,
//     tittle: "Explore the hidden-pubs of london",
//     Price: "90 for 2 Nights",
//     Icon2: <Star size={9} />,
//     Rating: 5,
//     image: "e8.avif"

//   }
]


const products1 = [
  {
    id: 1,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "A poetry of taste by oscar ",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e58.avif"
  },
  {
    id: 2,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "A poetry of taste by oscar",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e57.avif"


  },
  {
    id: 3,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "A poetry of taste by oscar",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e56.webp"

  },
  {
    id: 4,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "A poetry of taste by oscar",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e51.avif"

  },
  {
    id: 5,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "Wholesome Flavour by fernando",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e52.avif"

  },
  {
    id: 6,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "A poetry of taste by oscar",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e53.avif"

  },
  {
    id: 1,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "A poetry of taste by oscar",
    Price: "Whole sum flavour by fernendo",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e54.avif"
  },
  {
    id: 2,
    Label: "Popular",
    label2: <Heart  className='fill-black/30'/>,
    tittle: "A poetry of taste by oscar",
    Price: "90 for 2 Nights",
    Icon2: <Star size={9} />,
    Rating: 5,
    image: "e55.webp"


  },
//   {
//     id: 3,
//     Label: "Popular",
//     label2: <Heart  className='fill-black/30'/>,
//     tittle: "Step into betu caves",
//     Price: "90 for 2 Nights",
//     Icon2: <Star size={9} />,
//     Rating: 5,
//     image: "e16.avif"

//   },
//   {
//     id: 4,
//     Label: "Popular",
//     label2: <Heart  className='fill-black/30'/>,
//     tittle: "Step into betu caves",
//     Price: "90 for 2 Nights",
//     Icon2: <Star size={9} />,
//     Rating: 5,
//     image: "e15.avif"

//   },
//   {
//     id: 5,
//     Label: "Popular",
//     label2: <Heart  className='fill-black/30'/>,
//     tittle: "Step into betu caves",
//     Price: "90 for 2 Nights",
//     Icon2: <Star size={9} />,
//     Rating: 5,
//     image: "e14.avif"

//   },
//   {
//     id: 6,
//     Label: "Guest Favourite",
//     label2: <Heart  className='fill-black/30'/>,
//     tittle: "Step into betu caves",
//     Price: "90 for 2 Nights",
//     Icon2: <Star size={9} />,
//     Rating: 5,
//     image: "e10.avif"

//   }
]




const products2 = [
    {
        id: 1,
        Label: "Popular",
        label2: <Heart className='fill-black/30' />,
        tittle: "Total body training by paterson",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e61.webp",
        tittle2:"Room,italy"
      },
      {
        id: 2,
        Label: "Popular",
        label2: <Heart className='fill-black/30' />,
        tittle: "Total body training by paterson",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e62.avif",
        tittle2:"Newyork,Us"
    
    
      },
      {
        id: 3,
        Label: "Popular",
        label2: <Heart  className='fill-black/30'/>,
        tittle: "sun training",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e63.avif",
         tittle2:"Newyork,Us"
    
      },
      {
        id: 4,
        Label: "Popular",
        label2: <Heart  className='fill-black/30' />,
        tittle: "Total body training by paterson",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e64.avif",
        tittle2:"Room,italy"
    
      },
      {
        id: 5,
        Label: "Popular",
        label2: <Heart  className='fill-black/30'/>,
        tittle: "Total body training by paterson",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e65.avif",
        tittle2:"Room,italy"
    
      },
      {
        id: 6,
        Label: "Popular",
        label2: <Heart  className='fill-black/30'/>,
        tittle: "Total body training by paterson",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e66.avif",
        tittle2:"Room,italy"
    
      },
      {
        id: 7,
        Label: "Popular",
        label2: <Heart  className='fill-black/30'/>,
        tittle: "Body training ",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e67.avif",
        tittle2:"Room,italy"
    
      },
      {
        id: 8,
        Label: "popular",
        label2: <Heart  className='fill-black/30'/>,
        tittle: "Authentic bodytraining",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e68.webp",
        tittle2:"Room,italy"
    
      },
      {
        id: 8,
        Label: "popular",
        label2: <Heart  className='fill-black/30'/>,
        tittle: "Total body training by paterson",
        Price: "90 for 2 Nights",
        Icon2: <Star size={9} />,
        Rating: 5,
        image: "e69.webp",
        tittle2:"Room,italy"
    
      },
    ]