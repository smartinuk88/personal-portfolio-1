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
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import "./TechList.css";

function TechList() {
  const [techInfo, setTechInfo] = useState(null);
  const [draggedIcon, setDraggedIcon] = useState(null);
  const [isOver, setIsOver] = useState(false);

  const techMap = {
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

  const dragEndHandler = (e) => {
    let timeoutId;
    if (e.over && e.over.id === "drop-container") {
      setTechInfo(e.active.id);
      clearTimeout(timeoutId);
      setTimeout(() => {
        setTechInfo(null);
      }, 5000);
    }
  };

  const dragStartHandler = (e) => {
    setDraggedIcon(e.active.id);
    console.log(draggedIcon);
  };

  return (
    <div>
      <DndContext onDragStart={dragStartHandler} onDragEnd={dragEndHandler}>
        <div className="flex justify-evenly items-center mb-6 text-5xl">
          <Draggable id="react">
            <FaReact />
          </Draggable>
          <Draggable id="nextjs" className="cursor-grab">
            <SiNextdotjs />
          </Draggable>
          <Draggable id="firebase" className="cursor-grab">
            <SiFirebase />
          </Draggable>
          <Draggable id="tailwind" className="cursor-grab">
            <SiTailwindcss />
          </Draggable>
          <Draggable id="redux" className="cursor-grab">
            <SiRedux />
          </Draggable>
        </div>

        <Droppable id="drop-container" isOver={isOver}>
          {techInfo === null ? (
            <div
              className={`flex flex-col items-center justify-center text-center border-2 border-dotted min-h-12 mb-16 p-4 opacity-70 ${
                isOver ? "border-mint" : "border-support-text"
              }`}
            >
              <h3 className="text-xl">
                Drag a logo here to display more tech info...
              </h3>
            </div>
          ) : (
            <div
              className={`flex flex-col items-center justify-center text-center border-2 border-dotted min-h-12 mb-16 p-4 ${
                isOver ? "border-mint" : "border-fucshia"
              }`}
            >
              <div className="text-6xl">{techMap[techInfo].image}</div>
              <h2 className="text-custom-orange text-3xl">
                {techMap[techInfo].name}
              </h2>
              <h5 className="text-support-text">{techMap[techInfo].text}</h5>
            </div>
          )}
        </Droppable>
      </DndContext>
    </div>
  );
}

export default TechList;
