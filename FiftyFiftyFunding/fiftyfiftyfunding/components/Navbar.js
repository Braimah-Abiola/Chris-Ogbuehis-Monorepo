import Link from 'next/link';
import Image from 'next/image';

function Navbar() {

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

            {/* Nav Items */}
            <div className="ml-auto space-x-8 flex flex-row justify-center items-center">
                {navItems.map((item, index) => (
                    <Link key={index} href={`/${item.replace(/\s+/g, '-').toLowerCase()}`}>
                        <p className="text-white hover:text-black transition">{item}</p>
                    </Link>
                ))}
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
    </nav>
  );
}

export default Navbar;
