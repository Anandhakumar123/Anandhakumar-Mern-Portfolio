// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faLinkedin,
//   faInstagram,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";

const LeftSider = () => {
  return (
    <div className="fixed right-0 bottom-0 px-10 max-sm:static max-sm:pb-9">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 max-sm:flex-row">
          <a
            href="https://www.facebook.com/anandhakumar.anandhakumar.940436"
            target="_blank"
          >
            <i className="fa-brands fa-facebook text-gray-400 fa-xl"></i>
          </a>
          <a href="https://x.com/Anandhk_S" target="_blank">
            <i className="fa-brands fa-twitter text-gray-400 fa-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anandhakumar-s-9700b6299/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-gray-400 fa-xl"></i>
          </a>
          <a href="https://www.instagram.com/anandhakumar6423/" target="_blank">
            <i className="fa-brands fa-instagram text-gray-400 fa-xl"></i>
          </a>
          <a href="https://github.com/Anandhakumar123" target="_blank">
            <i className="fa-brands fa-github text-gray-500 fa-xl"></i>
          </a>

          {/* <FontAwesomeIcon
            icon={faFacebook}
            className="text-gray-500"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-gray-500"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-gray-500"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-gray-500"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="text-gray-500"
            size="2x"
          /> */}
        </div>

        <div className="m-5 w-[1px] h-52 bg-[#625feb] max-sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
