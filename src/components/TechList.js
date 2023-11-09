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
import {
  restrictToParentElement,
  restrictToWindowEdges,
  snapCenterToCursor,
} from "@dnd-kit/modifiers";

function TechList() {
  const [techInfo, setTechInfo] = useState(null);
  const [draggedIcon, setDraggedIcon] = useState(null);
  const [borderStyle, setBorderStyle] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

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
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the previous timeout if it exists
    }
    if (e.over && e.over.id === "drop-container") {
      setTechInfo(e.active.id);

      const newTimeoutId = setTimeout(() => {
        setTechInfo(null);
        setBorderStyle("border-support-text");
      }, 5000);
      setTimeoutId(newTimeoutId); // Save the new timeoutId
      setBorderStyle("border-fucshia");
    } else {
      setBorderStyle("border-support-text");
    }
  };

  const dragStartHandler = (e) => {
    setDraggedIcon(e.active.id);
    setBorderStyle("border-red-900");
  };

  const dragOverHandler = (e) => {
    setBorderStyle("border-mint");
  };

  return (
    <div>
      <DndContext
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        onDragOver={dragOverHandler}
        modifiers={[restrictToWindowEdges, snapCenterToCursor]}
      >
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

        <Droppable id="drop-container">
          {techInfo === null ? (
            <div
              className={`flex flex-col items-center justify-center text-center h-52 mb-16 p-4 border-dotted border-2
              ${borderStyle} opacity-70`}
            >
              <h3 className="text-xl">
                Drag a logo here to display more tech info...
              </h3>
            </div>
          ) : (
            <div
              className="flex flex-col items-center justify-center text-center h-52 border-2 border-dotted min-h-12 mb-16 p-4 border-fucshia
              "
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
