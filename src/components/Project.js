import "./Project.css";
import projectImg from "../images/daniel-wirtz-jmmTlAPtNw8-unsplash.jpg";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function Project() {
  return (
    <div className="project">
      <div className="project__projectContainer">
        <div className="project__imgContainer">
          <img className="project__img" src={projectImg} alt="" />
        </div>

        <div className="project__infoContainer">
          <h2 className="project__title">Project Title</h2>

          <div className="project__techLogoContainer">
            <SiTailwindcss />
            <FaReact />
            <SiFirebase />
          </div>

          <div className="project__desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div className="project__linksContainer">
        <div>
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

export default Project;
