import React, { useEffect, useMemo, useRef, useState } from 'react';
import imageana from '../assets/ana.jpg';
import imgcarbon from '../assets/carbon.jpg';
import imgtonobiltek from '../assets/tonobiltek.png';
import imgeduhack from '../assets/eduhack.png';
import imgekomm from '../assets/e-komm.png';
import imgcarbocount from '../assets/carbocount.png';
import imgkrayin from '../assets/krayin.png';
import imgdoctofy from '../assets/doctofy.png';
import imgquizz from '../assets/quizz.png';
import imgechoes from '../assets/unreadechoes.png';
import imgsi from '../assets/certiflow.png';
import imgcarsprediction from '../assets/cars.jpg';
import imgaudit from '../assets/audit.jpg';
import imgcv from '../assets/cv.jpg';
import imgsentiment from '../assets/sentiment.jpg';
import imgurba from '../assets/urba.jpg';
import imgwedding from '../assets/weddinginv.png';
import imgplan from '../assets/planfinancement.png';
import imgrag from '../assets/pferag.png';

const filters = ['ALL', 'AI / DATA', 'INFORMATION SYSTEMS', 'DEVELOPMENT', 'WEB', 'UI / UX'];

const featuredProjects = [
  {
    title: 'Amazon Sentiment Analysis',
    subtitle: 'NLP / DistilBERT',
    type: 'AI / DATA',
    year: '2026',
    tags: ['AI / DATA'],
    link: 'https://github.com/kraymis/sentiment-analysis-amazon',
  },
  {
    title: 'RAG PFE',
    subtitle: 'Document Retrieval & Semantic Search',
    type: 'AI / DATA',
    year: '2026',
    tags: ['AI / DATA'],
    link: 'https://github.com/kraymis/rag-pfe',
  },
  {
    title: 'SI support à la certification ISO 9001 – ESI Alger',
    subtitle: 'Conception d’un système d’information intégrant cartographie des processus, GED, versioning, KPI, traçabilité et suivi des actions correctives. Modélisation avec Merise/UML autour du cycle PDCA et prise en compte des audits internes et externes.',
    type: 'INFORMATION SYSTEMS',
    year: 'Fév. – Juin 2026',
    tags: ['INFORMATION SYSTEMS'],
    link: 'https://drive.google.com/file/d/1B_wdSNwCyI81cDXU2LT2RyY8aIytwEpV/view?usp=sharing',
  },
  {
    title: 'Used Car Price Prediction',
    subtitle: 'Machine Learning & Data Analysis',
    type: 'AI / DATA',
    year: '2026',
    tags: ['AI / DATA'],
    link: 'https://github.com/kraymis/used-car-price-prediction',
  },
  {
    title: 'Audit de l’outil Talents.esi.dz – ESI Alger',
    subtitle: 'Audit du module « Enseignants » portant sur l’ergonomie, l’efficience, la fiabilité des données et la gouvernance du système. Référentiel basé sur COBIT 2019, ITIL 4 et ISO/IEC 25010, collecte d’évidences, analyse des écarts et des risques, puis formulation d’un plan d’actions priorisé.',
    type: 'INFORMATION SYSTEMS',
    year: 'Mai 2026',
    tags: ['INFORMATION SYSTEMS'],
    link: 'https://drive.google.com/file/d/1HRwbFfQn9IjQa-pa-PwOjTFkCrmNj0lu/view?usp=sharing',
  },
  {
    title: 'Urbanisation du Système d’Information d’EGDA – Grande Distribution',
    subtitle: 'Diagnostic du SI, analyse des processus métier et de l’alignement SI/Métier, puis proposition d’une architecture cible intégrant CRM, e-commerce, supply chain et gouvernance SI. Modélisation des processus avec BPMN 2.0 et conception d’une cartographie fonctionnelle urbanisée.',
    type: 'INFORMATION SYSTEMS',
    year: 'Avr. – Mai 2026',
    tags: ['INFORMATION SYSTEMS'],
    link: 'https://drive.google.com/file/d/1tnLdwFtB1OK4NOL8V9Ks9xUv9iC5isOo/view?usp=sharing',
  },
  {
    title: 'Wedding Invitation',
    subtitle: 'Interactive web experience',
    type: 'WEB',
    year: '2025',
    tags: ['WEB'],
    link: 'https://github.com/kraymis/wedding-invitation',
  },
];

const otherProjects = [
  {
    title: 'CarboCOUNT',
    subtitle: 'Carbon footprint web platform',
    type: 'DEVELOPMENT',
    year: '2024',
    tags: ['DEVELOPMENT'],
    link: 'https://github.com/DonDraper04/CarboCount',
  },
  {
    title: 'Plan Financement COFI',
    subtitle: 'Financial planning and scenario analysis',
    type: 'DEVELOPMENT',
    year: '2025',
    tags: ['DEVELOPMENT'],
    link: 'https://github.com/kraymis/plan_financement_cofi',
  },
  {
    title: 'Semantic CV Indexing / Hayat Algérie',
    subtitle: 'CV processing and semantic indexing',
    type: 'AI / DATA',
    year: '2025',
    tags: ['AI / DATA'],
    link: 'https://github.com/kraymis',
  },
  {
    title: 'eKomm',
    subtitle: 'E-commerce application',
    type: 'WEB',
    year: '2024',
    tags: ['WEB'],
    link: 'https://github.com/kraymis/eKomm',
  },
  {
    title: 'Unread Echoes',
    subtitle: 'Anonymous social message platform',
    type: 'WEB',
    year: '2024',
    tags: ['WEB'],
    link: 'https://github.com/kraymis/unreadEchoes',
  },
  {
    title: 'KrayIN',
    subtitle: 'Social media application',
    type: 'WEB',
    year: '2024',
    tags: ['WEB'],
    link: 'https://github.com/kraymis/KrayIN',
  },
  {
    title: 'Doctofy',
    subtitle: 'Clinic management interface concept',
    type: 'UI / UX',
    year: '2024',
    tags: ['UI / UX'],
    link: 'https://www.figma.com/design/Sm8U8myiTqJBRrRpVjlcNV/Doctofy?node-id=0-1&t=5Z9Rp0Txtvpwl9FF-1',
  },
  {
    title: 'Quizz',
    subtitle: 'Interactive event quiz experience',
    type: 'UI / UX',
    year: '2024',
    tags: ['UI / UX'],
    link: 'https://www.figma.com/design/ULXU0jivBTeyU8AGODRnMS/Activit%C3%A9-Stand?node-id=0-1&t=T0YbOnlPWYNInFnH-1',
  },
  {
    title: 'TONOBILTEK',
    subtitle: 'Car market price prediction UI concept',
    type: 'UI / UX',
    year: '2024',
    tags: ['UI / UX'],
    link: 'https://www.figma.com/design/dJ6icWy8YAyMCeX6PhLr2d/TC?node-id=0-1&t=Z0FBneRkUnpJlOEV-1',
  },
  {
    title: 'EduHACK',
    subtitle: 'Educational event landing page',
    type: 'UI / UX',
    year: '2023',
    tags: ['UI / UX'],
    link: 'https://www.figma.com/design/sg5xCi8dKyy4ZjVo13EG3L/Edu-Hack-ESMS%5BCSE%5D-TEAM-01?node-id=0-1&t=nY1JdpBZpcPyK9Ay-1',
  },
];

const allProjects = [...featuredProjects, ...otherProjects];
const PROJECTS_PER_PAGE = 5;
const ambientParticles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 37) % 84)}%`,
  top: `${10 + ((index * 61) % 76)}%`,
  delay: `${(index % 5) * -1.7}s`,
}));
const projectPreviews = {
  'SI support à la certification ISO 9001 – ESI Alger': imgsi,
  'Audit de l’outil Talents.esi.dz – ESI Alger': imgaudit,
  'Urbanisation du Système d’Information d’EGDA – Grande Distribution': imgurba,
  'RAG PFE': imgrag,
  'Used Car Price Prediction': imgcarsprediction,
  'Amazon Sentiment Analysis': imgsentiment,
  'Semantic CV Indexing / Hayat Algérie': imgcv,
  'Plan Financement COFI': imgplan,
  'Wedding Invitation': imgwedding,
  CarboCOUNT: imgcarbocount,
  eKomm: imgekomm,
  'Unread Echoes': imgechoes,
  KrayIN: imgkrayin,
  Doctofy: imgdoctofy,
  Quizz: imgquizz,
  TONOBILTEK: imgtonobiltek,
  EduHACK: imgeduhack,
};

const expertiseItems = [
  {
    title: 'INFORMATION SYSTEMS',
    description:
      'Working with information systems analysis, audit, process modeling, business workflows and information structures in practical digital contexts.',
  },
  {
    title: 'DATA & AI',
    description:
      'Exploring machine learning, NLP, data analysis and AI-based systems through small but concrete projects and experiments.',
  },
  {
    title: 'WEB DEVELOPMENT',
    description:
      'Building web applications and digital products with a focus on clarity, usability and maintainable front-end implementation.',
  },
  {
    title: 'GRAPHIC DESIGN',
    description:
      'Creating visual assets and communication materials with attention to composition, consistency and clear visual expression.',
  },
  {
    title: 'UI / UX DESIGN',
    description:
      'Designing clear interfaces and interaction flows that are functional, readable and aligned with real user needs.',
  },
];

const experienceItems = [
  {
    year: '2025',
    company: 'HAYAT ALGÉRIE',
    title: 'Semantic CV Indexing / AI-related internship',
    description:
      'Worked on a CV processing and semantic indexing project focused on automating the analysis of candidate profiles. The internship involved working with OCR to extract information from CVs, NLP techniques to process and structure textual data, and classification methods to identify and organize candidate information. The project aimed to make CV search and candidate matching more efficient by transforming unstructured documents into searchable and structured data.',
  },
  {
    year: '2024 — 2025',
    company: 'ETIC CLUB — ESI ALGIERS',
    title: 'External Relations & Logistics Manager',
    description:
      'Managed the club’s external relations and logistics activities, including contacting and coordinating with companies, speakers and external partners. Contributed to organizing events and initiatives such as S2EE, while helping build and maintain relationships with external organizations. The role also involved coordinating logistics, following up with partners, managing outreach efforts and supporting the team in the preparation and execution of major club activities.',
  },
];

const stackGroups = {
  'INFORMATION SYSTEMS': ['Information Systems', 'SI Urbanization', 'Audit', 'Information Systems Analysis', 'Business Intelligence', 'ISO 9001 / Quality Management'],
  'DATA / AI': ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Hugging Face', 'NLP', 'Machine Learning', 'Deep Learning', 'RAG'],
  DEVELOPMENT: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub'],
  DESIGN: ['Figma', 'UI/UX Design', 'Illustrator', 'Photoshop'],
};

const HomePage = () => {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const whatIDoRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState('ALL');
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const [activeWorkItem, setActiveWorkItem] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let scrollStopTimer;
    const updateMobile = () => setIsMobile(window.innerWidth <= 768);
    const handlePointerMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
      setIsScrolling(true);
      window.clearTimeout(scrollStopTimer);
      scrollStopTimer = window.setTimeout(() => setIsScrolling(false), 180);
    };
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 }
    );

    updateMobile();
    handleScroll();
    window.addEventListener('resize', updateMobile);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.querySelectorAll('.section, .site-footer').forEach((element) => revealObserver.observe(element));

    return () => {
      window.removeEventListener('resize', updateMobile);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(scrollStopTimer);
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const scrollToSection = (ref) => {
    if (!ref.current) return;
    setIsMenuOpen(false);
    const top = ref.current.offsetTop - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const visibleProjects = useMemo(() => {
    return allProjects.filter((project) => activeFilter === 'ALL' || project.tags.includes(activeFilter));
  }, [activeFilter]);

  const totalProjectPages = Math.ceil(visibleProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = visibleProjects.slice(
    (currentProjectPage - 1) * PROJECTS_PER_PAGE,
    currentProjectPage * PROJECTS_PER_PAGE
  );

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentProjectPage(1);
  };

  return (
    <div
      className="portfolio-shell"
      style={{ '--cursor-x': `${cursorPos.x}px`, '--cursor-y': `${cursorPos.y}px` }}
    >
      {!isMobile && <div className="cursor-dot" style={{ left: cursorPos.x, top: cursorPos.y }} />}
      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />
      <div className="ambient-particles" aria-hidden="true">
        {ambientParticles.map((particle) => (
          <span
            key={particle.id}
            className="ambient-particle"
            style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
          />
        ))}
      </div>
      <div className="shooting-star shooting-star-one" aria-hidden="true" />
      <div className="shooting-star shooting-star-two" aria-hidden="true" />
      <div
        className={isScrolling ? 'scroll-cat is-walking' : 'scroll-cat'}
        style={{ top: `calc(8% + ${scrollProgress * 0.84}%)` }}
        title="A small companion exploring the page"
        aria-hidden="true"
      >
        <svg className="cat-svg" viewBox="0 0 100 100" role="img" aria-label="Small walking cat">
          <path className="cat-svg-tail" d="M73 69 C94 63, 96 39, 81 34 C91 48, 84 58, 72 57" />
          <path className="cat-svg-body" d="M33 52 C42 48, 65 49, 73 63 C77 70, 72 81, 62 83 L37 83 C29 79, 26 64, 33 52Z" />
          <path className="cat-svg-leg cat-svg-leg-back-left" d="M34 72 L34 91 Q34 95 39 94 L42 93 L42 74Z" />
          <path className="cat-svg-leg cat-svg-leg-back-right" d="M57 74 L57 92 Q57 96 62 94 L65 92 L65 72Z" />
          <path className="cat-svg-neck" d="M42 55 L59 55 L58 67 L43 67Z" />
          <path className="cat-svg-ear cat-svg-ear-left" d="M29 27 L34 7 L47 22Z" />
          <path className="cat-svg-ear cat-svg-ear-right" d="M55 22 L69 7 L75 28Z" />
          <path className="cat-svg-head" d="M26 28 Q27 19 51 19 Q75 19 76 28 L76 43 Q72 57 51 59 Q30 57 26 43Z" />
          <path className="cat-svg-ear-inner" d="M32 24 L35 13 L42 22Z M61 22 L68 13 L72 25Z" />
          <ellipse className="cat-svg-eye" cx="39" cy="36" rx="2.5" ry="3.5" />
          <ellipse className="cat-svg-eye" cx="63" cy="36" rx="2.5" ry="3.5" />
          <path className="cat-svg-nose" d="M49 42 L53 42 L51 45Z" />
          <path className="cat-svg-mouth" d="M51 45 Q48 49 46 47 M51 45 Q54 49 56 47" />
          <path className="cat-svg-whiskers" d="M43 43 L25 39 M43 47 L24 47 M59 43 L77 39 M59 47 L78 47" />
          <path className="cat-svg-leg cat-svg-leg-front-left" d="M40 69 L40 91 Q40 95 45 94 L47 92 L47 68Z" />
          <path className="cat-svg-leg cat-svg-leg-front-right" d="M62 68 L62 91 Q62 95 67 94 L69 92 L69 68Z" />
        </svg>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />

      <header className="topbar">
        <div className="nav-inner">
         <button type="button" className="brand" onClick={() => scrollToSection(homeRef)}>
           <span>AYMEN</span>
           <span className="brand-light">/ MAACHI</span>
         </button>

         <nav className="nav-links" aria-label="Main navigation">
           <button type="button" onClick={() => scrollToSection(workRef)}>WORK</button>
           <button type="button" onClick={() => scrollToSection(aboutRef)}>ABOUT</button>
           <button type="button" onClick={() => scrollToSection(contactRef)}>CONTACT</button>
           <span className="nav-status"><span className="status-dot" /> AVAILABLE</span>
           <button
             type="button"
             className="theme-toggle"
             onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
             aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
           >
             {theme === 'dark' ? '☼ LIGHT' : '☾ DARK'}
           </button>
         </nav>
         <button
           type="button"
           className={isMenuOpen ? 'mobile-menu-toggle is-open' : 'mobile-menu-toggle'}
           onClick={() => setIsMenuOpen((open) => !open)}
           aria-expanded={isMenuOpen}
           aria-controls="mobile-navigation"
           aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
         >
           <span />
           <span />
           <span />
         </button>
        </div>
        <nav id="mobile-navigation" className={isMenuOpen ? 'mobile-nav is-open' : 'mobile-nav'} aria-label="Mobile navigation">
         <button type="button" onClick={() => scrollToSection(homeRef)}>HOME</button>
         <button type="button" onClick={() => scrollToSection(aboutRef)}>ABOUT</button>
         <button type="button" onClick={() => scrollToSection(whatIDoRef)}>WHAT I DO</button>
         <button type="button" onClick={() => scrollToSection(workRef)}>PROJECTS</button>
         <button type="button" onClick={() => scrollToSection(contactRef)}>CONTACT</button>
         <button
           type="button"
           className="mobile-theme-toggle"
           onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
         >
           {theme === 'dark' ? '☼ LIGHT MODE' : '☾ DARK MODE'}
         </button>
        </nav>
      </header>

      <main className="page" ref={homeRef}>
        <section className="hero section reveal-section">
         <div className="hero-copy">
           <div className="eyebrow">AYMEN MAACHI / ESI ALGIERS</div>
           <h1>
             AYMEN <span>MAACHI</span>
           </h1>
           <div className="hero-divider" />
           <div className="hero-meta">INFORMATION SYSTEMS · DATA &amp; AI · WEB · DESIGN</div>
           <p className="lead">
             Information Systems &amp; Technology student at ESI Algiers, working across information systems,
             data and AI, web development, graphic design and UI/UX design.
           </p>

           <div className="hero-actions">
             <a
               href="https://drive.google.com/uc?export=download&id=1IBpsrfMssbtmc_hQIgu_Y0VY2aXoZ_YT"
               target="_blank"
               rel="noreferrer"
               className="primary-button"
             >
               DOWNLOAD CV
             </a>
             <button type="button" className="secondary-button" onClick={() => scrollToSection(workRef)}>
               VIEW WORK
             </button>
           </div>

           <div className="scroll-indicator">SCROLL</div>
         </div>

         <div className="hero-aside">
           <div className="portrait-frame interactive-photo">
             <img src={imageana} alt="Portrait of Aymen Maachi" />
           </div>
           <div className="portrait-label">Information Systems · Data &amp; AI · Web · Design</div>
         </div>
        </section>

        <section ref={workRef} className="section projects-section reveal-section">
         <div className="section-heading">
           <div className="eyebrow">SELECTED WORK</div>
           <h2>Projects at the center of my current work.</h2>
         </div>

         <div className="filter-row" aria-label="Project filters">
           {filters.map((filter) => (
             <button
               key={filter}
               type="button"
               className={filter === activeFilter ? 'filter-button active' : 'filter-button'}
               onClick={() => changeFilter(filter)}
             >
               {filter}
             </button>
           ))}
         </div>

         <div className="project-list">
           {paginatedProjects.length > 0 ? (
             paginatedProjects.map((project, index) => (
               <a key={project.title} href={project.link} target="_blank" rel="noreferrer" className="project-row">
                 <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                 <div className="project-main">
                   <div className="project-title-wrap">
                     <h3>{project.title}</h3>
                     <span className="arrow">↗</span>
                   </div>
                   <p>{project.subtitle}</p>
                 </div>
                 <div className="project-meta">
                   <span>{project.type}</span>
                   <span>{project.year}</span>
                 </div>
                 <img className="project-preview" src={projectPreviews[project.title]} alt="" aria-hidden="true" />
               </a>
             ))
           ) : (
             <p className="empty-state">No projects match this filter right now.</p>
           )}
         </div>
 
         {totalProjectPages > 1 && (
           <div className="project-pagination" aria-label="Project pages">
             <button
               type="button"
               className="pagination-button"
               onClick={() => setCurrentProjectPage((page) => page - 1)}
               disabled={currentProjectPage === 1}
             >
               PREV
             </button>
             <span className="pagination-status">
               PAGE {currentProjectPage} / {totalProjectPages}
             </span>
             <button
               type="button"
               className="pagination-button"
               onClick={() => setCurrentProjectPage((page) => page + 1)}
               disabled={currentProjectPage === totalProjectPages}
             >
               NEXT
             </button>
           </div>
         )}
        </section>

        <section ref={aboutRef} className="section about-section reveal-section">
         <div className="section-heading">
           <div className="eyebrow">ABOUT</div>
           <h2>Information Systems student with a practical background in development, design and data.</h2>
         </div>

         <div className="about-grid">
           <p>
             I&apos;m Aymen, a 5th-year Information Systems &amp; Technology student at ESI Algiers. My work sits
             between information systems, data and AI, web development, graphic design and UI/UX design.
           </p>
           <p>
             I have worked on information systems analysis, data and AI experiments, web projects, graphic design
             and UI/UX concepts, with an eye for how tools, information and interfaces connect in real projects.
           </p>
         </div>
        </section>

        <section ref={whatIDoRef} className="section what-i-do-section reveal-section">
         <div className="section-heading">
           <div className="eyebrow">WHAT I DO</div>
           <h2>Work across the technical and the design side of digital systems.</h2>
         </div>

         <div className="services-layout">
           <div className="service-list" role="tablist" aria-label="Areas of work">
             {expertiseItems.map((item, index) => (
               <button
                 key={item.title}
                 type="button"
                 className={index === activeWorkItem ? 'service-item active' : 'service-item'}
                 onClick={() => setActiveWorkItem(index)}
                 onMouseEnter={() => setActiveWorkItem(index)}
               >
                 <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                 <span className="service-title">{item.title}</span>
               </button>
             ))}
           </div>

           <div className="service-detail">
             <div className="service-detail-number">{String(activeWorkItem + 1).padStart(2, '0')}</div>
             <h3>{expertiseItems[activeWorkItem].title}</h3>
             <p>{expertiseItems[activeWorkItem].description}</p>
           </div>
         </div>
        </section>

        <section ref={experienceRef} className="section experience-section reveal-section">
         <div className="section-heading">
           <div className="eyebrow">EXPERIENCE</div>
           <h2>Recent work and practical experience.</h2>
         </div>

         <div className="timeline">
           {experienceItems.map((item) => (
             <div key={item.company} className="timeline-item">
               <div className="timeline-year">{item.year}</div>
               <div className="timeline-content">
                 <h3>{item.company}</h3>
                 <p>{item.title}</p>
                 <p className="timeline-description">{item.description}</p>
               </div>
             </div>
           ))}
         </div>
        </section>

        <section className="section education-stack-section reveal-section">
         <div className="education-panel">
           <div className="eyebrow">EDUCATION</div>
           <h3>ESI ALGIERS</h3>
           <p className="edu-role">Engineering Degree</p>
           <p>Information Systems &amp; Technology</p>
           <p>2022 — 2027</p>
           <span className="ranking">6th / 59 — 4th Year</span>
         </div>

         <div className="stack-panel">
           <div className="eyebrow">TOOLS / TECHNOLOGIES</div>
           {Object.entries(stackGroups).map(([group, items]) => (
             <div key={group} className="stack-group">
               <h4>{group}</h4>
               <div className="stack-list">
                 {items.map((item) => (
                   <span key={item}>{item}</span>
                 ))}
               </div>
             </div>
           ))}
         </div>
        </section>

        <section ref={contactRef} className="section contact-section reveal-section">
         <div className="eyebrow">CONTACT</div>
         <div className="contact-layout">
           <h2>LET&apos;S CONNECT.</h2>
           <div className="contact-links">
             <a href="https://www.linkedin.com/in/mohamed-islam-aymen-maachi-81859925a/" target="_blank" rel="noreferrer">
               LinkedIn ↗
             </a>
             <a href="https://github.com/kraymis" target="_blank" rel="noreferrer">
               GitHub ↗
             </a>
             <a href="mailto:mm_maachi@esi.dz">Email ↗</a>
             <a
               href="https://drive.google.com/uc?export=download&id=1i0nK0Sa3JWjT3DMVfPMCCw-uISVy-2YY"
               target="_blank"
               rel="noreferrer"
             >
               CV ↗
             </a>
           </div>
         </div>
        </section>
      </main>

      <footer className="site-footer reveal-section">
        <div className="footer-inner">
         <div className="footer-brand">AYMEN MAACHI</div>
         <div className="footer-meta">Information Systems · Web · Data · Design</div>
         <button type="button" className="back-top" onClick={() => scrollToSection(homeRef)}>
           BACK TO TOP
         </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
