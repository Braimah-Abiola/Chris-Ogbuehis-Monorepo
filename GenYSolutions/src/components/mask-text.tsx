import { useInView } from "framer-motion";
import { useRef } from "react";

const MaskText = () => {
  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "75%"});

  return (
    <div className="">
      <div className="lineMask">
        <h1 className="max-w-5xl text-5xl font-semibold md:text-6xl lg:text-7xl lg:leading-[1.2] text-white -mt-12 md:-mt-0">
          Crafting Tailored AI Solutions Across Diverse Sectors.
        </h1>
      </div>
    </div>
  );
};

export default MaskText;
