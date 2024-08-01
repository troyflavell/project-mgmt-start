import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // console.log(
  //   "projectsState.selectedProjectId",
  //   projectsState.selectedProjectId,
  //   "projectsState.projects",
  //   projectsState.projects
  // );

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,

        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log("selected project id ", projectsState.selectedProjectId);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
