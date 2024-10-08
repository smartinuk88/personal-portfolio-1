import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiReactrouter,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import { restrictToWindowEdges, snapCenterToCursor } from "@dnd-kit/modifiers";
import TechInfo from "./TechInfo";

function TechList() {
  const [techInfo, setTechInfo] = useState(null);
  const [borderStyle, setBorderStyle] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [dragStarted, setDragStarted] = useState(false);

  const dragEndHandler = (e) => {
    setDragStarted((prevState) => !prevState);
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the previous timeout if it exists
    }

    if (e.over && e.over.id === "drop-container") {
      setTechInfo(e.active.id);

      const newTimeoutId = setTimeout(() => {
        setTechInfo(null);
        setBorderStyle("border-lm-support dark:border-dm-support");
      }, 15000);
      setTimeoutId(newTimeoutId); // Save the new timeoutId

      setBorderStyle("border-lm-fucshia dark:border-dm-fucshia");
    }
  };

  const dragStartHandler = () => {
    setDragStarted((prevState) => !prevState);
  };

  return (
    <div>
      <DndContext
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        modifiers={[restrictToWindowEdges, snapCenterToCursor]}
      >
        <div className="flex flex-wrap justify-evenly items-center mb-6 text-2xl md:text-5xl dark:text-dm-light">
          <Draggable id="react">
            <FaReact />
          </Draggable>
          <Draggable id="nextjs" className="cursor-grab">
            <SiNextdotjs />
          </Draggable>
          <Draggable id="typescript" className="cursor-grab">
            <SiTypescript />
          </Draggable>
          <Draggable id="tailwind" className="cursor-grab">
            <SiTailwindcss />
          </Draggable>
          <Draggable id="firebase" className="cursor-grab">
            <SiFirebase />
          </Draggable>
          <Draggable id="redux" className="cursor-grab">
            <SiRedux />
          </Draggable>
          <Draggable id="reactRouter" className="cursor-grab">
            <SiReactrouter />
          </Draggable>
          <Draggable id="graphQL" className="cursor-grab">
            <SiGraphql />
          </Draggable>
        </div>

        <Droppable id="drop-container" className="h-52 mb-16">
          <TechInfo
            techInfo={techInfo}
            borderStyle={borderStyle}
            dragStarted={dragStarted}
          />
        </Droppable>
      </DndContext>
    </div>
  );
}

export default TechList;
