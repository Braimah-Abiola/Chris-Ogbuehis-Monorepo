import { ArrowUpRight } from "lucide-react";
import React from "react";

const Service = ({
  index,
  title,
  number,
  setModal,
}: {
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
      <div className="flex flex-row space-x-5 md:space-x-20">
        <h4 className="text-zinc-400">{number}</h4>
        <div className="flex flex-col items-start">
          <h2>{title}</h2>
          <p>Design & Development</p>
        </div>
      </div>

      <div id="arrow">
        <ArrowUpRight width={40} height={40} color="white" />
      </div>
    </div>
  );
};

export default Service;
