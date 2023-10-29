import { slide, scale } from "@/anim";
import { motion } from "framer-motion";
import Link from "next/link";

interface MenuLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
    // Add additional properties if present in the data object
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const MenuLink = ({ data, isActive, setSelectedIndicator }: MenuLinkProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="link"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator"
      ></motion.div>
      <Link href={href}><span className=" font-medium">{title}</span></Link>
    </motion.div>
  );
};

export default MenuLink;
