import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgcarbon from '../assets/carbon.jpg';
import imgtonobiltek from '../assets/tonobiltek.png';
import imgeduhack from '../assets/eduhack.png';
import imgekomm from '../assets/e-komm.png';
import imgcarbocount from '../assets/carbocount.png';
import imgkrayin from '../assets/krayin.png';
import imgdoctofy from '../assets/doctofy.png';
import imgquizz from '../assets/quizz.png';
import imgechoes from '../assets/unreadechoes.png';
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
        projectName='eKomm'
        description='eKomm, an e-Commerce MERN Stack APP.'
        img={imgekomm}
        link="https://github.com/kraymis/eKomm"
        type="WEB DEV"
        />
      </SwiperSlide>
      <SwiperSlide>
        <EcommerceCard
        projectName='Unread Echoes'
        description='Unread Echoes is an anonymous platform for sharing unsent messages and unspoken feelings.'
        img={imgechoes}
        link="https://github.com/kraymis/unreadEchoes"
        type="WEB DEV"
        />
      </SwiperSlide>
      <SwiperSlide>
        <EcommerceCard
        projectName='KrayIN'
        description='KrayIN is a MERN stack social media app for creating posts, interacting with friends, and real-time messaging.'
        img={imgkrayin}
        link="https://github.com/kraymis/KrayIN"
        type="WEB DEV"
        />
      </SwiperSlide>
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
        description='Team project building a web application for tracking and reducing a company carbon footprint.'
        img={imgcarbocount}
        link="https://github.com/DonDraper04/CarboCount"
        type="WEB DEV"
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
        description="UI/UX prototype for a car market price prediction platform with AI-assisted decision support."
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

      <SwiperSlide>
        <EcommerceCard
          projectName='Used Car Price Prediction'
          description='Machine learning project for predicting used-car prices from vehicle features using preprocessing, feature engineering and a Random Forest pipeline.'
          img={imgcarbon}
          link='https://github.com/kraymis/used-car-price-prediction'
          type='DATA SCIENCE'
        />
      </SwiperSlide>

      <SwiperSlide>
        <EcommerceCard
          projectName='PFE Document RAG System'
          description='Document retrieval and semantic search pipeline using PDF extraction, chunking, multilingual embeddings and FAISS-backed search.'
          img={imgcarbon}
          link='https://github.com/kraymis/rag-pfe'
          type='AI / NLP'
        />
      </SwiperSlide>

      <SwiperSlide>
        <EcommerceCard
          projectName='Amazon Reviews Sentiment Analysis'
          description='Sentiment classification project for Amazon reviews using PyTorch and DistilBERT to analyze positive and negative feedback.'
          img={imgcarbon}
          link='https://github.com/kraymis/sentiment-analysis-amazon'
          type='ML / NLP'
        />
      </SwiperSlide>

      <SwiperSlide>
        <EcommerceCard
          projectName='Plan Financement COFI'
          description='Financial planning web app for building and analyzing financing scenarios, debt ratios and cash-flow forecasts.'
          img={imgcarbon}
          link='https://github.com/kraymis/plan_financement_cofi'
          type='IS / SOFTWARE'
        />
      </SwiperSlide>

      <SwiperSlide>
        <EcommerceCard
          projectName='Wedding Invitation'
          description='Interactive wedding invitation website with animated sections, RSVP handling and a polished responsive guest experience.'
          img={imgcarbon}
          link='https://github.com/kraymis/wedding-invitation'
          type='WEB DEV'
        />
      </SwiperSlide>




    </Swiper>
  );
}
export default Slider