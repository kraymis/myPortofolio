import React from 'react';

const NavBar = ({ scrollToSection, homeRef, projectsRef, servicesRef, whymeRef, contactRef }) => {
    return (
        <nav className="bg-[#121212] text-white py-4 h-[6rem] fixed top-0 left-0 w-full z-50 flex justify-center font-[550] px-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold text-[#7456FF]">
                    Kray<span className="text-white">MIS</span>
                </div>
                <ul className="space-x-8 flex items-center justify-center">
                    <li>
                        <button onClick={() => scrollToSection(homeRef)} className="hover:text-[#7456FF]">Home</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(projectsRef)} className="hover:text-[#7456FF]">Projects</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(servicesRef)} className="hover:text-[#7456FF]">Services</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(whymeRef)} className="hover:text-[#7456FF]">Why Me</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(contactRef)} className="border border-[#7456FF] py-2 px-4 rounded text-[#7456FF] hover:bg-[#7456FF] hover:text-white">Contact Me</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
