import React from "react";
import Input from "./Input";
export default function NewProject() {
  return (
    <div>
      <menu>
        <li></li>
        <li></li>
      </menu>
      <div>
        <Input label="title" />
        <Input label="description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
