import { menuSlide } from "@/anim";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

import Curve from "./curve";
import MenuLink from "./menu-link";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const navItems = [
    {
      title: "Work /",
      href: "work/",
    },
    {
      title: "Services /",
      href: "/services",
    },
    {
      title: "Industries /",
      href: "/industries",
    },
    {
      title: "About /",
      href: "/about",
    },
    {
      title: "Contact /",
      href: "/contact",
    },
    {
      title: "Blog /",
      href: "/blogs",
    },
  ];

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="flex flex-row w-full h-full justify-between px-5 md:px-20 pt-8 md:pt-28 pb-10 md:pb-20">
        <div className="body">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="nav"
          >
            {navItems.map((data, index) => {
              return (
                <MenuLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></MenuLink>
              );
            })}
          </div>
          <div className="md:hidden">
            <div className="flex flex-row items-end gap-10 fit">
              <div className="flex flex-col gap-4">
                <Link href="tel:+12128892123">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg">
                    +359 877 161 266
                  </p>
                </Link>
                <Link href="mailto:info@genysolutions.com">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg">
                    hey@genysolutions.co
                  </p>
                </Link>
                <p> Texas, United States</p>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="https://youtube.com">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg">
                    YouTube
                  </p>
                </Link>
                <Link href="https://instagram.com">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg mt-2">
                    Instagram
                  </p>
                </Link>
                <Link href="https://facebook.com">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg mt-2">
                    Facebook
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-col justify-between h-full items-end">
            <div className="flex flex-col items-end">
              <Image
                className="rounded-[8px]"
                width={400}
                height={65}
                src="/c2.jpg"
                alt="Featured work"
              />
              <div className="flex flex-row space-x-2 mt-5">
                <ArrowUp color="white" />
                <p>Featured Work</p>
              </div>
            </div>
            <div className="flex flex-row items-end gap-20 fit">
              <div className="flex flex-col">
                <Link href="tel:+12128892123">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg">
                    +359 877 161 266
                  </p>
                </Link>
                <Link href="mailto:info@genysolutions.com">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg mt-2">
                    hey@genysolutions.co
                  </p>
                </Link>
                <p className="text-white text-lg mt-2"> Texas, United States</p>
              </div>
              <div className="flex flex-col">
                <Link href="https://youtube.com">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg">
                    YouTube
                  </p>
                </Link>
                <Link href="https://instagram.com">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg mt-2">
                    Instagram
                  </p>
                </Link>
                <Link href="https://facebook.com">
                  <p className="text-zinc-400 hover:text-white transition-colors text-lg mt-2">
                    Facebook
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Menu;
