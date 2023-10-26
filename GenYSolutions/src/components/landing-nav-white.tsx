import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const LandingNavWhite = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center z-20 absolute py-6">
      <div className="w-full px-20 flex flex-row items-center justify-between">
        <div className="relative w-[110px] h-[45px]">
          <Link href="/">
            <Image fill src="/logo_black.svg" alt="Logo" />
          </Link>
        </div>

        <div className="bg-[#191619]/70 rounded-full py-3 px-10 hidden lg:block">
          <ul className="list-none flex items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.title}
                className={` font-dmSans font-normal text-[18px] text-[#9B9CA1] hover:text-white transition-colors ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-[60px]"
                }`}
              >
                <a href={`${nav.href}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <Image width={50} height={25} src="./menu_black.svg" alt="Menu" />
      </div>
    </div>
  );
};

export default LandingNavWhite;
