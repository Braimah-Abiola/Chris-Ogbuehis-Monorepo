import { ArrowUpRight } from "lucide-react";
import React from "react";

const Service = ({
  index,
  title,
  setModal,
}: {
  index: number;
  title: string;
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
      <div className="flex flex-col items-start">
        <h2>{title}</h2>
        <p>Design & Development</p>
      </div>
      <div id="arrow">
        <ArrowUpRight width={40} height={40} color="white" />
      </div>
    </div>
  );
};

export default Service;
