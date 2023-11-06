import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Service = ({
  href,
  index,
  title,
  number,
  setModal,
}: {
  href: string;
  index: number;
  title: string;
  number: string;
  setModal: (value: any) => void;
}) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <Link className="flex flex-row justify-between w-full items-center" href={href}>
        <div className="flex flex-row space-x-5 md:space-x-20">
          <h4 className="text-zinc-400 text-[14px] md:text-[16px] mt-3">
            {number}
          </h4>
          <div className="flex flex-col items-start">
            <h2>{title}</h2>
            <p>Design & Development</p>
          </div>
        </div>

        <div id="arrow">
          <ArrowUpRight width={40} height={40} color="white" />
        </div>
      </Link>
    </div>
  );
};

export default Service;
