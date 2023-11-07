import ProjectRow from "./ProjectRow";

function ProjectList() {
  return (
    <div className="flex mx-auto pl-12 pr-20 flex-col gap-12 md:ml-14 md:mb-36 md:w-5/6">
      <ProjectRow />
      <ProjectRow />
      <ProjectRow />
    </div>
  );
}

export default ProjectList;
