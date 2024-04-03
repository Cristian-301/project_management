import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ cancelProject }) {
  const input = useRef();
  const description = useRef();
  const date = useRef();

  let newProject = {
    title: "",
    description: "",
    date: "",
  };

  function handleTitle() {
    newProject.title = input.current.value;
  }
  function handleDescription() {
    newProject.description = description.current.value;
  }
  function handleDate() {
    newProject.date = date.current.value.toString();
  }

  function handleSave() {
    console.log(newProject);
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={cancelProject}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          label="Title"
          inputType={"text"}
          ref={input}
          handleOnChange={handleTitle}
        />
        <Input
          label="Description"
          ref={description}
          handleOnChange={handleDescription}
        />
        <Input
          label="Due date"
          inputType={"date"}
          ref={date}
          handleOnChange={handleDate}
        />
      </div>
    </div>
  );
}
