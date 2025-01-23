import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import curosel1 from '../assets/images/carousel1.jpg'
import curosel2 from '../assets/images/carousel2.jpg'
import curosel3 from '../assets/images/carousel3.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Curosel = () => {
  return (
    <Swiper

      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-1/3"
    >
      <SwiperSlide>
        <Slide image={curosel1}   text='Get Your Web Development Projects Done in minutes'></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide image={curosel2}   text='Get Your Web Development Projects Done in minutes'></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide image={curosel3}   text='Get Your Web Development Projects Done in minutes'></Slide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Curosel;