import { useState } from "react";
import projectImg from "../images/flashfluent-1.png";
import hoverImg from "../images/flashfluent-2.png";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

function ProjectRow({
  image,
  secondImage,
  title,
  bullets,
  tech,
  codeLink,
  liveLink,
}) {
  const [imgSrc, setImgSrc] = useState(projectImg);

  return (
    <div className="lg:h-auto w-full border-2 border-lm-custom-black dark:border-dm-light shadow-md  items-center">
      <div className="flex flex-col lg:flex-row text-center">
        <img
          className="object-cover aspect-w-16 aspect-h-9 w-full h-auto lg:w-1/2"
          src={projectImg}
          alt=""
        />

        <div className="flex flex-col justify-between px-4 py-6 leading-normal lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-lm-custom-black dark:text-dm-light">
            FlashFluent
          </h2>

          <div className="flex flex-col text-left space-y-2 text-xs lg:text-md text-lm-support dark:text-dm-support mb-6">
            <p>
              <span className="font-bold">Firebase Integration:</span> Secure
              authentication and real-time CRUD operations with Firestore for
              dynamic content management.
            </p>
            <p>
              <span className="font-bold">Efficient Data Syncing:</span>{" "}
              Implements debouncing and a 90-second interval for robust data
              synchronization, optimizing server interactions.
            </p>
            <p>
              <span className="font-bold">
                Streak Functionality & Context API:
              </span>{" "}
              Tracks user engagement with a motivational streak system and
              utilizes React Context for streamlined state management.
            </p>
          </div>

          <div className="flex justify-between w-2/5 mx-auto text-4xl pb-4">
            <FaReact className="text-lm-fucshia dark:text-dm-fucshia" />
            <SiTailwindcss className="text-lm-mint dark:text-dm-mint" />
            <SiFirebase className="text-lm-custom-orange dark:text-dm-custom-orange" />
            <SiReactrouter className="text-lm-fucshia dark:text-dm-fucshia" />
          </div>
        </div>
      </div>

      <div className="flex w-full h-16 justify-between text-center border-t-2 border-lm-custom-black dark:border-dm-light">
        <div className="text-lg w-full h-full border-r border-lm-custom-black dark:border-dm-light">
          <a
            href="https://main--stunning-cupcake-ed88e2.netlify.app/"
            rel="noopener"
            target="_blank"
            className="flex justify-center items-center w-full h-full hover:opacity-80 transition-all duration-500 text-lm-custom-black dark:text-lm-light hover:text-lm-light dark:hover:text-dm-custom-black hover:bg-lm-custom-black dark:hover:bg-dm-light"
          >
            See Live
          </a>
        </div>
        <div className="text-lg w-full h-full border-l border-lm-custom-black dark:border-dm-light">
          <a
            href="https://github.com/smartinuk88/flashcard-app"
            rel="noopener"
            target="_blank"
            className="flex justify-center items-center w-full h-full hover:opacity-80 transition-all duration-500 text-lm-custom-black dark:text-dm-light hover:text-lm-light dark:hover:text-dm-custom-black hover:bg-lm-custom-black dark:hover:bg-dm-light"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;
