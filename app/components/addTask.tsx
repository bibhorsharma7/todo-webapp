"use client";

import { useState } from "react";
import Button from "./button";

export default function AddTask() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAddTask = () => {
    // input validation
    if (title.length == 0) {
      alert('Title cannot be empty')
      return;
    }

    alert(`create clicked\nTitle: ${title}\nDescription: ${description}`)
  }

  return (
    <div className="border border-black rounded-lg w-full p-2 m-2">
      <input className="p-2 w-full" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input className="p-2 w-full" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <Button name="Create" className="h-8" onClick={handleAddTask} />
    </div>
  );
}
