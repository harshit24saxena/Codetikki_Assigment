import { useState } from "react";
import Header from "./components/Header"
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

export function Layout(){
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const newNoteData = (newNote) =>{
    setNotes((prev) => [newNote, ...prev])
    setShowForm(false)
  }
  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleDeleteNote = (id) => {
      setNotes((prev) => prev.filter((note) => note.id !== id));
    };
   return <>
     <Header showNoteForm={handleShowForm} />
     {showForm && <NoteForm onAddNote={newNoteData}/>}
     <NoteList NoteList={notes} DeleteNote={handleDeleteNote}/>
   </>
}