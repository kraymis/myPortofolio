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
      const offset = 120; // Adjust this value as needed
      const element = ref.current;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
      });
  };


  return (
    <div>
        <NavBar
                scrollToSection={scrollToSection}
                homeRef={homeRef}
                projectsRef={projectsRef}
                servicesRef={servicesRef}
                whymeRef={whymeRef}
                contactRef={contactRef}
        />
        <div ref={homeRef}  className='flex justify-start mt-[25vh] px-[6rem] mb-[8vw]'>
        <div className='text-white w-[50%] h-fit flex flex-col gap-3'>
          <p className='text-[5vw] font-light'>
            I am <span className='text-[#7456FF] font-semibold '>KRAYMIS</span>
          </p>
          <h6 className='text-[#999999] text-[1.2vw] mb-4'>Junior UI/UX designer and a frontend web developper</h6>
          <p className='font-light w-[70%] text-[1vw] text-[#999999] mb-4'>
            I'm a 3rd year computer science student at the higher school of computer science (ESI Algiers),
            passionate about crafting captivating and intuitive digital experiences. With a keen eye for design and a focus on what users see and interact with, I blend creativity with technical skills to create engaging and visually appealing websites and applications.


          </p>
          <div className='flex justify-start gap-x-4'>
            <DownloadButton/>



            <button className='h-auto w-[12rem] p-4 border border-solid border-gray-50 rounded-lg font-medium text-gray-50 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-900'>
              More
            </button>
          </div>
        </div>

        <div className='w-[50%] h-fit flex justify-center'>
          <div className="relative w-[22rem] h-[22rem] bg-slate-500 overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
            <img src={imageana} alt="Description" className="absolute inset-0 object-cover w-full h-full " />
          </div>
        </div>
      </div>

      <div ref={projectsRef} id="projects" className="relative w-full py-12 overflow-hidden">
        <h2 className="text-4xl font-bold text-center text-white relative z-10">
          Projects
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10vw] font-bold text-transparent text-fill text-stroke text-gray-300 opacity-20">
            Projects done
          </span>
        </div>
      </div>
      <div className="relative z-20 mt-4 mb-[20vh]"> {/* Added margin-top for spacing */}
          <Slider />
      </div>
      


      <div ref={servicesRef} id="services" className="relative w-full py-12 mt-16 overflow-hidden">
        <h2 className="text-4xl font-bold text-center text-white relative z-10">
          Services
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10vw] font-bold text-transparent text-fill text-stroke text-gray-300 opacity-20">
            Services
          </span>
        </div>
      </div>
      <div className="relative z-20 mt-4 flex items-center flex justify-center gap-x-[8vw] px-[6rem] mb-[20vh]"> {/* Added margin-top for spacing */}
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



      <div ref={whymeRef} id="whyme" className="relative w-full py-12 mt-16 overflow-hidden ">
        <h2 className="text-4xl font-bold text-center text-white relative z-10">
          WHY HIRE ME
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10vw] font-bold text-transparent text-fill text-stroke text-gray-300 opacity-20">
            WHY HIRE ME
          </span>
        </div>
      </div>
      <div className="relative z-20 mt-4 flex items-center justify-center gap-x-[0.5vw] px-[6rem] mb-[20vh] overflow-visible"> {/* Added margin-top for spacing */}
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

      <div ref={contactRef} id="contact" className="relative w-full py-12 mt-16 overflow-hidden">
  <h2 className="text-4xl font-bold text-center text-white relative z-10">
    CONTACT ME
  </h2>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-[10vw] font-bold text-transparent text-fill text-stroke text-gray-300 opacity-20">
      CONTACT ME
    </span>
  </div>
</div>

<div className="relative z-20 mt-8 flex justify-center gap-x-[8vw] px-[6rem]">
  <div className="w-[55%] h-auto">
    <EmailCONTACT />
  </div>
  <div className="flex flex-col w-[45%] text-white gap-y-10">
  <div className="flex flex-col">
    <p className="text-[#7456FF]">CONTACT</p>
    <h5 className="text-[5vw] font-bold">CONTACT ME</h5>
    <p className="text-[#999999] w-[30vw]">
      If you have any project in mind, need a service or anything, don't hesitate to contact me.
    </p>
  </div>

  <div className="flex flex-col gap-y-4">
    <div className="flex items-center gap-x-2 hover:scale-105 transition-transform duration-300">
      <div className="w-[1.5vw] h-[1.5vh] flex justify-center items-center">
        <img src={imgemail} alt="email" />
      </div>
      <p>mm_maachi@esi.dz</p>
    </div>
    <a href="https://www.linkedin.com/in/mohamed-islam-aymen-maachi-81859925a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:scale-105 transition-transform duration-300">
      <div className="w-[1.5vw] h-[1.5vh] flex justify-center items-center">
        <img src={imglinkedin} alt="LinkedIn" />
      </div>
      <p>LinkedIn</p>
    </a>

    <div className="flex items-center gap-x-2 hover:scale-105 transition-transform duration-300">
      <div className="w-[1.5vw] h-[1.5vh] flex justify-center items-center">
        <img src={imgphone} alt="phone" />
      </div>
      <p>+213799592501</p>
    </div>
    <a href="https://github.com/kraymis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 hover:scale-105 transition-transform duration-300">
      <div className="w-[1.5vw] h-[1.5vh] flex justify-center items-center">
        <img src={imggithub} alt="GitHub" />
      </div>
      <p>GitHub</p>
    </a>

  </div>
</div>

</div>

<footer className='bg-[#7456FF] w-full h-[4vh] mt-[12vh]'></footer>


      


          
          





    </div>
  );
};

export default HomePage;
