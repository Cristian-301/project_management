import Button from "./Button";

export default function Sidebar({ handleButton }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button handleButton={handleButton} name={" + Add Project"} />
      <ul className="mt-8">
        <li className="flex justify-between my-4">Title of project</li>
      </ul>
    </aside>
  );
}
