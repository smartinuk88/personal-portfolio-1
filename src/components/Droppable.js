import { useDroppable } from "@dnd-kit/core";

function Droppable({ id, isOver, children }) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      // className={`${isOver ? "border-mint" : "border-support-text"}`}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}

export default Droppable;
