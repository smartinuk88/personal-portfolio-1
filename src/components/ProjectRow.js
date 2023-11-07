import projectImg from "../images/daniel-wirtz-jmmTlAPtNw8-unsplash.jpg";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function ProjectRow() {
  return (
    <div className="lg:h-auto w-full border-2 border-light shadow-md transition-all duration-500 items-center">
      <div className="flex flex-col lg:flex-row text-center">
        <img
          className="object-cover w-full h-96 lg:h-auto lg:w-1/2"
          src={projectImg}
          alt=""
        />

        <div className="flex flex-col justify-between px-4 py-8 leading-normal lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-light">
            Project Title
          </h2>

          <div className="text-sm text-support-text mb-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="flex justify-between w-2/5 mx-auto text-xl pb-4">
            <SiTailwindcss className="text-mint" />
            <FaReact className="text-fucshia" />
            <SiFirebase className="text-custom-orange" />
          </div>
        </div>
      </div>

      <div className="flex w-full h-16 justify-between text-center border-t-2 border-light">
        <div className="text-lg w-full h-full border-r border-light">
          <a
            href="#"
            className="flex justify-center items-center w-full h-full hover:opacity-80 transition-all duration-500 hover:text-custom-black hover:bg-light"
          >
            See Live
          </a>
        </div>
        <div className="text-lg w-full h-full border-l border-light">
          <a
            href="#"
            className="flex justify-center items-center w-full h-full hover:opacity-80 transition-all duration-500 hover:text-custom-black hover:bg-light"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;
