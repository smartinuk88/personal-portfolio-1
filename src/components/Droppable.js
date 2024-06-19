import { useDroppable } from "@dnd-kit/core";
import { Children, cloneElement } from "react";

function Droppable({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef}>
      {Children.map(children, (child) => cloneElement(child, { isOver }))}
    </div>
  );
}

export default Droppable;
