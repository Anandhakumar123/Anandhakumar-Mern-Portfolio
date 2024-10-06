import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex max-sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className="text-tertiary ">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p key={key} className="ml-5">
                  <span className="text-tertiary">{key} : </span>
                  <span className="text-white">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary ">{"}"}</p>
        </div>

        <div className="h-[500px]">
          {/* <dotlottie-player
            src="https://lottie.host/c9c648fe-1c04-4634-9272-960739fe0817/7zsIhJ750k.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player> */}

          <dotlottie-player
            src="https://lottie.host/68deabeb-d23f-443c-9622-f7d0c9fb2ba0/zRfIb48HdM.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
