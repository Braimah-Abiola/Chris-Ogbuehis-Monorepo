import Link from 'next/link';
import Image from 'next/image';

function Navbar() {

    const navItems = ['OUR GOAL', 'HOW IT WORKS', 'MEET THE TEAM', 'STRUCTURE', 'APPLY NOW'];

  return (
    <nav className="py-4 px-6 transparent">
        <div className='container mx-auto flex items-center justify-between'>
            {/* Logo */}
            <div className="font-bold text-xl">
                <Link href="/">
                    <Image src="/header/FiftyFifty-Logo.png" alt="FiftyFifty Logo" width={50} height={50} />
                </Link>
            </div>

            {/* Nav Items */}
            <div className="ml-auto space-x-4 flex flex-row">
                {navItems.map((item, index) => (
                    <Link key={index} href={`/${item.replace(/\s+/g, '-').toLowerCase()}`}>
                        <p className="text-gray-700 hover:text-black transition">{item}</p>
                    </Link>
                ))}
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
