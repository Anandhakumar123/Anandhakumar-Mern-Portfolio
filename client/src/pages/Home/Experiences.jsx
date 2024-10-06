import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { useState } from "react";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;

  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex py-10 gap-20 max-sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#0e8863] w-1/3 max-sm:flex-row max-sm:overflow-x-scroll max-sm:w-full">
          {experience.map((experience, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-8 ${
                  selectedItemIndex === index
                    ? "text-tertiary bg-[#00634d] border-tertiary py-3 border-l-4 -ml-[3px]"
                    : "text-white"
                }  `}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experience[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experience[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experience[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
