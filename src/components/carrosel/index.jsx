import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

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



  return (
    <>
     
      <Swiper
       grabCursor ={true}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Hambuguer} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Cadastro} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Iphone13} alt="" /></SwiperSlide>


      </Swiper>
    </>
  );
}

