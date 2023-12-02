import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ScrollReveal from 'scrollreveal';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import {ImgProject} from './styles';
// import required modules
import { Pagination } from 'swiper/modules';
import Cadastro from '../../img/cadastroS.png'
import Hambuguer from '../../img/HamburguerS.png'
import Iphone13 from '../../img/iphone13S.png'
export default function App() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

useEffect(()=>{


  ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 3000,
    delay: 300
  });

 
  ScrollReveal().reveal('img', { origin: 'left' });

 
  return () => ScrollReveal().destroy()




},[])

  return (
    <>
     
      <Swiper
       grabCursor ={true}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ImgProject src={Hambuguer} alt="" /></SwiperSlide>
        <SwiperSlide><ImgProject src={Cadastro} alt="cadastro" /></SwiperSlide>
        <SwiperSlide><ImgProject src={Iphone13} alt="" /></SwiperSlide>


      </Swiper>
    </>
  );
}

