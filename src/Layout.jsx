import { useEffect, useState } from "react";
import Header from "./components/Header"
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { SkeletonLoader } from "./components/Loader";

export function Layout(){
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([]);

  const newNoteData = (newNote) =>{
    setNotes((prev) => [newNote, ...prev])
    setShowForm(false)
  }
  const handleShowForm = (e) => {
    console.log(e)
    if(showForm == true)
      setShowForm(false)
    
    setShowForm(true);
  };
  const handleDeleteNote = (id) => {
      setNotes((prev) => prev.filter((note) => note.id !== id));
    };
  const TotalNotes = notes.length;


useEffect(()=>{
  setTimeout(()=>setLoading(false), 1000)  
})

  if(loading){
    return <SkeletonLoader />
  }
   return <>
     <Header showNoteForm={handleShowForm} TotalNotes={TotalNotes} />
     {showForm && <NoteForm onAddNote={newNoteData}/>}
     <NoteList NoteList={notes} DeleteNote={handleDeleteNote}/>
   </>
}