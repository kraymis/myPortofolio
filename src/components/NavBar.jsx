import React, { useState } from 'react';

const NavBar = ({ scrollToSection, homeRef, projectsRef, servicesRef, whymeRef, contactRef }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#121212] text-white py-4 fixed sm:h-[15vh] top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center px-4 md:px-10 box-border overflow-x-hidden">
            <div className="flex justify-between items-center w-full">
                <div className="text-2xl md:text-3xl font-bold text-[#7456FF]">
                    Kray<span className="text-white">MIS</span>
                </div>
                <button 
                    className="md:hidden text-3xl z-60 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>
            <ul className={`flex flex-col md:flex-row md:space-x-8 items-center md:justify-end space-y-4 md:space-y-0 md:gap-8 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:flex w-full`}>
                <li className="w-full md:w-auto">
                    <button onClick={() => scrollToSection(homeRef)} className="hover:text-[#7456FF] text-xl md:text-xl md:font-semibold w-full text-center">Home</button>
                </li>
                <li className="w-full md:w-auto">
                    <button onClick={() => scrollToSection(projectsRef)} className="hover:text-[#7456FF] text-xl md:text-xl md:font-semibold w-full text-center">Projects</button>
                </li>
                <li className="w-full md:w-auto">
                    <button onClick={() => scrollToSection(servicesRef)} className="hover:text-[#7456FF] text-xl md:text-xl md:font-semibold w-full text-center">Services</button>
                </li>
                <li className="w-full md:w-auto">
                    <button onClick={() => scrollToSection(whymeRef)} className="hover:text-[#7456FF] text-xl md:text-xl md:font-semibold w-full text-center">Why Me</button>
                </li>
                <li className="w-full md:w-auto">
                    <button onClick={() => scrollToSection(contactRef)} className="border border-[#7456FF] py-2 px-4 rounded text-[#7456FF] hover:bg-[#7456FF] hover:text-white text-xl md:text-xl md:font-semibold w-full text-center">Contact Me</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
