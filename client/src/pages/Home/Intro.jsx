import { useSelector } from "react-redux";

const Intro = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { fullName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-4 py-10">
      {/* max-sm:pt-56 */}
      <h1 className="text-white ">{welcomeText || ""}</h1>
      <h1 className="text-secondary text-7xl max-sm:text-3xl font-semibold ">
        {fullName || ""} {lastName || ""}
      </h1>
      <h1 className="text-white text-7xl max-sm:text-3xl font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3">{description || ""}</p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3  rounded">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
