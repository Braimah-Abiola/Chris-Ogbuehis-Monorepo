import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ['OUR GOAL', 'HOW IT WORKS', 'MEET THE TEAM', 'STRUCTURE'];

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = 'auto'; // Allow scrolling
        }

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup: revert back to the default when component unmounts
        };
    }, [menuOpen]);

    return (
        <nav className="py-4 px-6 relative">
            <div className='container mx-auto flex items-center justify-between'>
                {/* Logo */}
                <div className="font-bold text-xl">
                    <Link href="/">
                        <Image src="/header/FiftyFifty-Logo.png" alt="FiftyFifty Logo" width={50} height={50} />
                    </Link>
                </div>

                {/* Nav Items (desktop) */}
                <div className="ml-auto space-x-8 flex flex-row justify-center items-center hidden md:flex">
                    {navItems.map((item, index) => {
                        const href = `#${item.replace(/\s+/g, '-').toLowerCase()}`;
                        return (
                            <Link key={index} href={href}>
                                <p className="text-white hover:text-black transition cursor-pointer">{item}</p>
                            </Link>
                        );
                    })}
                    <Link href='/apply'>
                        <div className="border border-white text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-white hover:text-black cursor-pointer transition">
                            <span className="mr-2">APPLY NOW</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L12 13.586V6a1 1 0 112 0v7.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </Link>
                </div>

                {/* Hamburger Menu (mobile) */}
                <div className="md:hidden flex items-center z-40" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {menuOpen ? 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> :
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        }
                    </svg>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black z-20 md:hidden">
                    <div className="container mx-auto py-4 flex flex-col mt-20 ml-5 gap-10">
                        {navItems.map((item, index) => {
                            const href = `#${item.replace(/\s+/g, '-').toLowerCase()}`;
                            return (
                                <Link key={index} href={href}>
                                    <p 
                                        className="text-white hover:text-black transition cursor-pointer block py-1"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                            {item}
                                    </p>
                                </Link>
                            );
                        })}
                        <Link href='/apply'>
                            <div className="border border-white text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-white hover:text-black cursor-pointer transition">
                                <span className="mr-2">APPLY NOW</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L12 13.586V6a1 1 0 112 0v7.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
