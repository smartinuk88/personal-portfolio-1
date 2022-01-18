import "./Project.css";
import projectImg from "../images/daniel-wirtz-jmmTlAPtNw8-unsplash.jpg";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function Project() {
  return (
    <div className="project">
      <div className="project__projectContainer">
        <div className="project__linksContainer">
          <div>
            <a className="project__link" href="#">
              See Live
            </a>
          </div>
          <div>
            <a className="project__link" href="#">
              View Code
            </a>
          </div>
        </div>

        <div className="project__imgContainer">
          <img className="project__img" src={projectImg} alt="" />
        </div>
      </div>

      <div className="project__techLogoContainer">
        <FaReact />
        <SiFirebase />
        <SiTailwindcss />
      </div>
    </div>
  );
}

export default Project;
