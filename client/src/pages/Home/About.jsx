import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { imgUrl, description1, description2, skills } = about;

  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center max-sm:flex-col">
        <div className="h-[70vh] w-1/2 max-sm:w-full">
          <dotlottie-player
            src={imgUrl}
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 max-sm:w-full">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here ara a few technologies I&apos;ve been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 items-center justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
