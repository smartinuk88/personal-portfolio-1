import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import "./TechList.css";

function TechList() {
  const [draggable, setDraggable] = useState(null);
  const [isDropped, setIsDropped] = useState(false);

  const skillMap = {
    react: {
      name: "React",
      text: "React is great!",
      image: <FaReact />,
    },
    nextjs: {
      name: "NextJS",
      text: "NextJS text is here",
      image: <SiNextdotjs />,
    },
    firebase: {
      name: "Firebase",
      text: "Firebase is awesome",
      image: <SiFirebase />,
    },
    tailwind: {
      name: "Tailwind CSS",
      text: "I love Tailwind CSS",
      image: <SiTailwindcss />,
    },
    styledComponents: {
      name: "Styled Components",
      text: "I love Styled Components",
      image: <SiStyledcomponents />,
    },
  };

  function handleDragEnd(e) {
    if (e.over && e.over.id === "droppable") {
      setIsDropped(true);
      setDraggable(e.active.id);
    }
  }

  return (
    <div className="techList">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="techList__logoContainer">
          <Draggable id="react">
            <FaReact />
          </Draggable>
          <Draggable id="nextjs">
            <SiNextdotjs />
          </Draggable>
          <Draggable id="firebase">
            <SiFirebase />
          </Draggable>
          <Draggable id="tailwind">
            <SiTailwindcss />
          </Draggable>
          <Draggable id="styledComponents">
            <SiStyledcomponents />
          </Draggable>
          <Draggable id="bootstrap">
            <BsFillBootstrapFill />
          </Draggable>
          <Draggable id="redux">
            <SiRedux />
          </Draggable>
        </div>

        <Droppable id="droppable">
          {draggable === null ? (
            <div className="techList__info techList__info--inactive">
              <h3>Drag a logo here to display more info...</h3>
            </div>
          ) : (
            <div className="techList__info">
              <div className="techList__icon">{skillMap[draggable].image}</div>
              <h2 className="techList__name">{skillMap[draggable].name}</h2>
              <h5 className="techList__text">{skillMap[draggable].text}</h5>
            </div>
          )}
        </Droppable>
      </DndContext>
    </div>
  );
}

export default TechList;
