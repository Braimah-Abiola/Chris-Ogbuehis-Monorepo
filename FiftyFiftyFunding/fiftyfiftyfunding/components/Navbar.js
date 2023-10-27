import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ['OUR GOAL', 'HOW IT WORKS', 'MEET THE TEAM', 'STRUCTURE'];

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
                        {/* ... Your Apply Now Button ... */}
                    </Link>
                </div>

                {/* Hamburger Menu (mobile) */}
                <div className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
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
                <div className="absolute top-full left-0 w-full h-screen bg-black z-20 md:hidden">
                    <div className="container mx-auto py-4">
                        {navItems.map((item, index) => {
                            const href = `#${item.replace(/\s+/g, '-').toLowerCase()}`;
                            return (
                                <Link key={index} href={href}>
                                    <p className="text-white hover:text-black transition cursor-pointer block py-1">{item}</p>
                                </Link>
                            );
                        })}
                        <Link href='/apply'>
                            {/* ... Your Apply Now Button ... */}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
