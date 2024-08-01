import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    //validation

    if (!title || !description || !dueDate) {
      alert("Please fill in all fields");
      return;
    }

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title,
      description,
      dueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2> Invalid Input</h2>
        <p> Oops looks like you didn't fill in all fields</p>
        <p> Please fill in all fields</p>
        <button onClick={() => modal.current.close()}>Close</button>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input type="date" label="Due Date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
}
