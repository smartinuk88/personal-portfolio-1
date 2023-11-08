import { useDroppable } from "@dnd-kit/core";
import React from "react";

function DroppableContainer({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { isOver: isOver });
  });

  return <div ref={setNodeRef}>{childrenWithProps}</div>;
}

export default DroppableContainer;
