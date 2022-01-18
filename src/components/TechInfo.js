import "./TechInfo.css";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function TechInfo() {
  return (
    <div className="techInfo">
      <div className="techInfo__logos">
        <FaReact className="techInfo__logo" />
        <SiFirebase className="techInfo__logo" />
        <SiTailwindcss className="techInfo__logo" />
      </div>
      <div className="techInfo__info">
        <h3>Drag logo here for more info...</h3>
      </div>
    </div>
  );
}

export default TechInfo;
