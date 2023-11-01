import { MouseEvent, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  client: string;
  description: string;
  src: string;
  year: number;
};

type DoubleProps = {
  projects: Project[];
  reversed: boolean;
};

const Double: React.FC<DoubleProps> = ({ projects, reversed }) => {
  const firstImage = useRef<HTMLDivElement>(null);
  const secondImage = useRef<HTMLDivElement>(null);
  let requestAnimationFrameId: number | null = null;
  let xPercent: number = reversed ? 100 : 0;
  let currentXPercent: number = reversed ? 100 : 0;
  const speed: number = 0.15;

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const xPercentDelta: number = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    const firstImagePercent: number = 66.66 - currentXPercent * 0.33;
    const secondImagePercent: number = 33.33 + currentXPercent * 0.33;

    if (firstImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
    }

    if (secondImage.current) {
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      if (requestAnimationFrameId) {
        window.cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    } else {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  return (
    <div
      onMouseMove={(e: MouseEvent<HTMLDivElement>) => {
        manageMouseMove(e);
      }}
      className="double"
    >
      <div ref={firstImage} className="imageContainer">
        <Link href="project">
          <div className="stretchyWrapper">
            <Image src={`/${projects[0].src}`} alt={"image"} fill />
          </div>

          <div className="body">
            <h3>{projects[0].name}</h3>
            <p>{projects[0].description}</p>
            <p>{projects[0].year}</p>
          </div>
        </Link>
      </div>

      <div ref={secondImage} className="imageContainer">
        <Link href="project">
          <div className="stretchyWrapper">
            <Image src={`/${projects[1].src}`} alt={"image"} fill />
          </div>

          <div className="body">
            <h3>{projects[1].name}</h3>
            <p>{projects[1].description}</p>
            <p>{projects[1].year}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Double;
