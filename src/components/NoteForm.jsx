import { useState } from "react";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleSubmit = (e) => {
    e.preventDefault();

    const CheckedContent = content.trim().length == 0 ? "No content" : content

    const newNote = {
      id: Date.now(),
      title,
      content:CheckedContent,
      category,
      date: new Date().toLocaleDateString(),
    };

    onAddNote(newNote);

    // Reset form
    setTitle("");
    setContent("");
    setCategory("Personal");
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
