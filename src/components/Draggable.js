import { useDraggable } from "@dnd-kit/core";

import {
  CSS,
  TouchSensor,
  MouseSensor,
  KeyboardSensor,
} from "@dnd-kit/utilities";

function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 999 : 0,
    cursor: isDragging ? "grabbing" : "grab",
    scale: isDragging ? "150%" : "100%",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default Draggable;
