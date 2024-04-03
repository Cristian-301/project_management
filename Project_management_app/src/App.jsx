import logo from "./assets/no-projects.png";
import Button from "./components/Button";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [newProject, setNewProject] = useState(false);
  function handleClick() {
    setNewProject(true);
  }
  function handleCancel() {
    setNewProject(false);
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar handleButton={handleClick} />
        {!newProject && (
          <div className="mt-24 text-center w-2/3">
            <img
              className="w-16 h-16 object-contain mx-auto"
              src={logo}
              alt="clipboard and pen"
            />
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              No Project Selected
            </h1>
            <p className="mb-4 text-stone-400">
              Select a project or get started with new one
            </p>
            <Button name={" Create new project"} handleButton={handleClick} />
          </div>
        )}
        {newProject && <NewProject cancelProject={handleCancel} />}
      </main>
    </>
  );
}

export default App;
