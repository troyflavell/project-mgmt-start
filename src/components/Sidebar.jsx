import React from "react";
import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id} className="mt-4">
            <button className="text-left w-full px-2 py-1 text-stone-200 hover:text-stone-50 hover:bg-stone-800 rounded">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
