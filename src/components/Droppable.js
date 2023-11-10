import { useDroppable } from "@dnd-kit/core";
import { Children, cloneElement } from "react";

function Droppable({ id, onDragEnd, children }) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  const dropHandler = (e) => {
    if (e.over && e.over.id === id) {
      onDragEnd(e.active.id);
    }
  };

  return (
    <div ref={setNodeRef}>
      {Children.map(children, (child) => cloneElement(child, { isOver }))}
    </div>
  );
}

export default Droppable;
