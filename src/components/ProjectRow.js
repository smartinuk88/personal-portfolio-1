import "./ProjectRow.css";
import "./Project.css";
import projectImg from "../images/daniel-wirtz-jmmTlAPtNw8-unsplash.jpg";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function ProjectRow() {
  return (
    <div className="flex flex-col md:flex-row w-full border-2 border-light shadow-md transition-all duration-500 items-center">
      <img
        className="object-cover w-full h-96 md:h-auto md:w-48"
        src={projectImg}
        alt=""
      />

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-light">
          Project Title
        </h2>

        <div className="text-sm text-support-text mb-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="flex justify-between w-2/5 mx-auto">
        <SiTailwindcss className="text-mint" />
        <FaReact className="text-fucshia" />
        <SiFirebase className="text-custom-orange" />
      </div>

      <div className="flex w-full">
        <div className="text-lg">
          <a href="#" className="project__link">
            See Live
          </a>
        </div>
        <div>
          <a href="#" className="project__link">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;
