import { useState } from "react";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
    };

    onAddNote(newNote);

    // Reset form
    setTitle("");
    setContent("");
    setCategory("Personal");
    setError("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Create New Note</h2>

      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
      />

      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Personal</option>
        <option>Work</option>
        <option>Home</option>
        <option>Ideas</option>
      </select>

      <button type="submit" disabled={!title.trim()}>
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
