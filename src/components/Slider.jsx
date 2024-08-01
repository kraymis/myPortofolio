import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgcarbon from '../assets/carbon.jpg';
import imgtonobiltek from '../assets/tonobiltek.png';
import imgeduhack from '../assets/eduhack.png';
import imgcarbocount from '../assets/carbocount.png';
import imgdoctofy from '../assets/doctofy.png';
import imgquizz from '../assets/quizz.png';
import {EcommerceCard} from '../components/EcommerceCard.jsx'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import '../App.css';



function Slider() {
  return (
    <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
    >
      <SwiperSlide>
        <EcommerceCard
        projectName='Doctofy'
        description='Prototype design of a desktop app for managing a medical clinic of an orthophonist.'
        img={imgdoctofy}
        link="https://www.figma.com/design/Sm8U8myiTqJBRrRpVjlcNV/Doctofy?node-id=0-1&t=5Z9Rp0Txtvpwl9FF-1"
        type="UI/UX"
        />
      </SwiperSlide>

      <SwiperSlide>
        <EcommerceCard
        projectName='CarboCOUNT'
        description='FrontEND development of a web app for calculating the carbon footprint of companies, completed in a team.'
        img={imgcarbocount}
        link="https://github.com/DonDraper04/CarboCount"
        type="WEBDEV"
        />
      </SwiperSlide>

      <SwiperSlide>
        <EcommerceCard
        projectName="Quizz"
        description='Prototype design of a web app for a quiz as part of the ETIC club welcome day activities.'
        img={imgquizz}
        link="https://www.figma.com/design/ULXU0jivBTeyU8AGODRnMS/Activit%C3%A9-Stand?node-id=0-1&t=T0YbOnlPWYNInFnH-1"
        type="UI/UX"
        />
      </SwiperSlide>

      <SwiperSlide>
        <EcommerceCard
        projectName='TONOBILTEK'
        description="Design of a web app prototype implementing an AI model for predicting car market prices."
        img={imgtonobiltek}
        type="UI/UX"
        link="https://www.figma.com/design/dJ6icWy8YAyMCeX6PhLr2d/TC?node-id=0-1&t=Z0FBneRkUnpJlOEV-1"
        />
      </SwiperSlide>

      <SwiperSlide>
        <EcommerceCard
        projectName='EduHACK'
        description='First UI/UX design i made, for an educational event website created as part of a club challenge.'
        img={imgeduhack}
        link='https://www.figma.com/design/sg5xCi8dKyy4ZjVo13EG3L/Edu-Hack-ESMS%5BCSE%5D-TEAM-01?node-id=0-1&t=nY1JdpBZpcPyK9Ay-1'
        type="UI/UX"
        />
      </SwiperSlide>




    </Swiper>
  );
}
export default Slider