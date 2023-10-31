import { ArrowRight } from "lucide-react";

const Industry = ({
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
      <div className="flex flex-row space-x-4 md:space-x-20 items-start">
        <p>{number}</p>
        <h2>{title}</h2>
      </div>
      <div id="arrow">
        <ArrowRight width={40} height={40} color="white" />
      </div>
    </div>
  );
};

export default Industry;
