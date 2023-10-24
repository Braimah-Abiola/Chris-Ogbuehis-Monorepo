"use client";

import { IMAGES } from "@/constants/images";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const WorkSlider = () => {
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);

  const [sliderWidth, setSliderWidths] = useState<number>(0);
  const [slidesWidth, setSlidesWidths] = useState<number>(0);

  const slideMarginRight = 15;
  const totalSlidesMarginRight = slideMarginRight * IMAGES.length;

  useEffect(() => {
    const measureSliderWidth = () => {
      const sliderElement = sliderRef.current as HTMLElement | null;
      if (sliderElement) {
        setSliderWidths(sliderElement.clientWidth);
      }
    };

    const measureSlidesWidth = () => {
      const slidesNode = slidesRef.current as HTMLElement | null;
      if (slidesNode) {
        const slidesArr = Array.from(slidesNode.childNodes);
        const slidesSumWidth = slidesArr.reduce(
          (acc, node) => acc + ((node as HTMLElement).clientWidth || 0),
          0
        );
        setSlidesWidths(slidesSumWidth);
      }
    };

    measureSliderWidth();
    measureSlidesWidth();

    window.addEventListener("resize", measureSliderWidth);
    window.addEventListener("resize", measureSlidesWidth);

    return () => {
      window.removeEventListener("resize", measureSliderWidth);
      window.removeEventListener("resize", measureSlidesWidth);
    };
  }, [sliderWidth, slidesWidth]);

  return (
    <div>
      <div>
        <div ref={sliderRef} className="slider">
          <motion.ul
            ref={slidesRef}
            drag="x"
            dragConstraints={{
              left: -(slidesWidth - sliderWidth + totalSlidesMarginRight),
              right: 0,
            }}
            dragElastic={0.2}
            dragTransition={{ bounceDamping: 18 }}
            className="slides"
          >
            {IMAGES.map((image) => (
              <li key={image.id}>
                <div
                  className="mr-6 md:mr-12"
                  style={{ backgroundImage: `url(${image.imageSrc})` }}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
