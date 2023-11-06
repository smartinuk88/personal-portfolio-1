import ProjectRow from "./ProjectRow";

function ProjectList() {
  return (
    <div className="flex flex-col gap-12 ml-14 mb-36 w-5/6">
      <ProjectRow />
      <ProjectRow />
      <ProjectRow />
    </div>
  );
}

export default ProjectList;
