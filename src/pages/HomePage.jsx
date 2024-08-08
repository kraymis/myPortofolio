import React, {useRef} from 'react';
import NavBar from '../components/NavBar';
import ButtonWithImage from '../components/ButtonWithImage';
import image from '../assets/2022_01_05_12_49_IMG_4437.jpg';
import imageana from '../assets/ana.jpg';
import imgcarbon from '../assets/carbon.jpg';
import { EmailCONTACT } from '../components/EmailCONTACT.jsx';
import Slider from '../components/Slider.jsx';
import DownloadButton from '../components/DownloadButton.jsx';
import Card from '../components/Card.jsx';
import Card2 from '../components/Card2.jsx';
import imgdesign from "../assets/design.png"
import imgcode from "../assets/code.png"
import imguiux from "../assets/uiux.png"
import imgwork from "../assets/work.png"
import imgcommunicate from "../assets/communicate.png"
import imgverify from "../assets/verify.png"
import imglike from "../assets/like.png"
import imgphone from "../assets/phone-call.png"
import imggithub from "../assets/github.png"
import imglinkedin from "../assets/linkedin.png"
import imgemail from "../assets/email.png"


const HomePage = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const whymeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
      const offset = 210; // Adjust this value as needed
      const element = ref.current;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
      });
  };


  return (
    <div className=''>
        <NavBar
                scrollToSection={scrollToSection}
                homeRef={homeRef}
                projectsRef={projectsRef}
                servicesRef={servicesRef}
                whymeRef={whymeRef}
                contactRef={contactRef}
        />
<div ref={homeRef} className="flex flex-col lg:flex-row justify-start mt-[10vh] px-12 lg:mt-[25vh] lg:px-[8vw] gap-4 sm:gap-0 md:px-16 mb-8">
  
  {/* Image Container */}
  <div className='w-full mb-8 sm:mb-0 lg:w-[50%] lg:h-auto h-[80%] flex justify-center lg:items-center order-1 lg:order-2'>
    <div className="relative w-[13rem] h-[13rem] lg:h-[22rem] lg:w-[22rem] mt-6 lg:mt-0 bg-slate-500 overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
      <img src={imageana} alt="Description" className="absolute inset-0 object-cover w-full h-full" />
    </div>
  </div>

  {/* Text and Button Container */}
  <div className="text-white w-full lg:w-1/2 h-fit flex flex-col items-center px-6 sm:px-0 lg:items-start gap-3 order-2 lg:order-1">
    <p className="text-4xl max-sm:text-3xl md:text-5xl lg:text-6xl font-light">
      I am <span className="text-[#7456FF] font-semibold">KR4YM1S</span>
    </p>
    <h6 className="text-[#999999] text-sm max-sm:text-xs text-center lg:text-start md:text-base lg:text-lg mb-2 lg:mb-4">
      Junior UI/UX designer and a frontend web developer
    </h6>
    <p className="font-light text-center lg:text-start w-full lg:w-3/4 text-xs max-sm:text-xxs md:text-sm lg:text-base text-[#999999] mb-4">
      MAACHI Mohamed Islam Aymen AKA Kraymis, a 3rd year computer science student at the higher school of computer science (ESI Algiers),
      passionate about crafting captivating and intuitive digital experiences. With a keen eye for design and a focus on what users see and interact with, I blend creativity with technical skills to create engaging and visually appealing websites and applications.
    </p>
    <div className="flex justify-center lg:justify-start gap-x-4">
      <DownloadButton />
      <button className="h-auto w-auto md:w-40 lg:w-48 p-4 border border-solid border-gray-50 rounded-lg font-medium text-gray-50 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900">
        More
      </button>
    </div>
  </div>

</div>


      <div ref={projectsRef} id="projects" className="relative w-full py-12 sm:mt-[20vh] overflow-hidden">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-white relative z-10">
          Projects
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[12vw] font-bold text-transparent text-fill text-stroke text-gray-300 opacity-20">
            Projects done
          </span>
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center z-20 mt-4 sm:mt-[12vh] lg:mb-[20vh] max-w-full overflow-hidden">
            <div className="w-full max-w-[80vw] flex justify-center">
                <Slider />
            </div>
        </div>
      


      <div ref={servicesRef} id="services" className="relative w-full py-12 sm:mt-[20vh] overflow-hidden">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-white relative z-10">
          Services
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[12vw] font-bold text-transparent text-fill text-stroke text-gray-300 opacity-20">
            Services
          </span>
        </div>
      </div>
      <div className="relative z-20 mt-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 px-4 sm:px-6 lg:px-12 mb-2 sm:mt-[12vh] sm:mb-[20vh]">
      <Card 
        imgSrc={imguiux}
        title="UI/UX"
        description="here's a little description about it"
      />
      <Card 
        imgSrc={imgcode}
        title="Web Development"
        description="here's a little description about it"
      />
      <Card 
        imgSrc={imgdesign}
        title="Design"
        description="here's a little description about it"
      />
    </div>



  <div ref={whymeRef} id="whyme" className="relative w-full py-12 sm:py-12 sm:mt-[20vh] pt-16 mt-8  overflow-hidden">
  <h2 className="text-3xl sm:text-5xl font-bold text-center text-white relative z-10">
    WHY HIRE ME
  </h2>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-[12vw] sm:text-[8vw] md:text-[10vw] lg:text-[12vw] font-bold text-transparent text-fill text-stroke text-gray-300 opacity-20">
      WHY HIRE ME
    </span>
  </div>
</div>

<div className="relative z-20 mt-4 px-4 sm:mt-[12vh] sm:px-[12vw] mb-8 sm:mb-20 overflow-visible ">
  <div className="flex flex-col sm:flex-row  items-center justify-center ">
    <Card2 
      imgSrc={imgwork}
      title="Workaholic"
      description="I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive."
    />
    <Card2 
      imgSrc={imgcommunicate}
      title="Communicative"
      description="I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver."
    />
    <Card2 
      imgSrc={imglike}
      title="Cooperative"
      description="Behind the successful project, there’s a great team. I can build a good cooperation and remain consistent with the goal."
    />
    <Card2 
      imgSrc={imgverify}
      title="Perfectionist"
      description="I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result."
    />
  </div>
</div>


<div ref={contactRef} id="contact" className="relative w-full py-4 sm:py-12 mt-2 sm:mt-[20vh] overflow-hidden">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white relative z-10">
    CONTACT ME
  </h2>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-[12vw] sm:text-[10vw] md:text-[12vw] font-bold text-transparent text-fill text-stroke text-gray-300 opacity-20">
      CONTACT ME
    </span>
  </div>
</div>

<div className="relative z-20 mt-8 px-8 sm:px-6 md:px-8  sm:mt-[12vh] lg:px-[8vw] flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-x-[8vw]">
  <div className="w-full lg:w-[55%] h-auto">
    <EmailCONTACT />
  </div>
  <div className="flex flex-col w-full lg:w-[45%] text-white gap-y-10">
    <div className="flex flex-col">
      <p className="text-[#7456FF] text-lg sm:text-xl md:text-2xl">CONTACT</p>
      <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold">CONTACT ME</h5>
      <p className="text-[#999999] text-base sm:text-lg md:text-xl">
        If you have any project in mind, need a service or anything, don't hesitate to contact me.
      </p>
    </div>
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2 hover:scale-105 transition-transform duration-300">
        <div className="w-6 h-6 flex justify-center items-center">
          <img src={imgemail} alt="email" className="w-full h-full object-cover" />
        </div>
        <p className="text-base sm:text-lg">mm_maachi@esi.dz</p>
      </div>
      <a href="https://www.linkedin.com/in/mohamed-islam-aymen-maachi-81859925a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:scale-105 transition-transform duration-300">
        <div className="w-6 h-6 flex justify-center items-center">
          <img src={imglinkedin} alt="LinkedIn" className="w-full h-full object-cover" />
        </div>
        <p className="text-base sm:text-lg">LinkedIn</p>
      </a>
      <div className="flex items-center gap-x-2 hover:scale-105 transition-transform duration-300">
        <div className="w-6 h-6 flex justify-center items-center">
          <img src={imgphone} alt="phone" className="w-full h-full object-cover" />
        </div>
        <p className="text-base sm:text-lg">+213799592501</p>
      </div>
      <a href="https://github.com/kraymis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:scale-105 transition-transform duration-300">
        <div className="w-6 h-6 flex justify-center items-center">
          <img src={imggithub} alt="GitHub" className="w-full h-full object-cover" />
        </div>
        <p className="text-base sm:text-lg">GitHub</p>
      </a>
    </div>
  </div>


</div>

<footer className='bg-[#7456FF] w-full h-[4vh] mt-[12vh]'></footer>


      


          
          





    </div>
  );
};

export default HomePage;
