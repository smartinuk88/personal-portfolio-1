import { useDroppable } from "@dnd-kit/core";

function DroppableContainer(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "#ddbdfc" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default DroppableContainer;
