import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 max-sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#0e8863] w-1/3 max-sm:flex-row max-sm:overflow-x-scroll max-sm:w-full">
          {project.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 max-sm:flex-col">
          <img
            src={project[selectedItemIndex].image}
            alt=""
            className="h-60 w-72 rounded-md"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {project[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              {project[selectedItemIndex].description}
            </p>
            <p className="text-white">
              {project[selectedItemIndex].technologies}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
