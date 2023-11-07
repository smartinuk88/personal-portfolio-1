import ProjectRow from "./ProjectRow";

function ProjectList() {
  return (
    <div className="flex flex-col gap-16 mb-20">
      <ProjectRow />
      <ProjectRow />
      <ProjectRow />
    </div>
  );
}

export default ProjectList;
