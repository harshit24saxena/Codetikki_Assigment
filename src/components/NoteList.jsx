
function NoteList({NoteList, DeleteNote}){
  if(NoteList.length == 0)
    return <p className="grid">No notes found</p>

  let noteContent;
  NoteList.map((note) =>{
    note.content.length > 50 ? noteContent = note.content.substring(0, 50) + "..." : ''
  })
  
  return (
    <div className="grid">
      {NoteList.map((note) => (
        <div key={note.id} className={`note-card ${note.category.toLowerCase()}`}>
          <div className="note-header">
          <h3>{note.title}</h3>
          <button className="delete" onClick={()=>DeleteNote(note.id)}>X</button>
          </div>
          <p>{noteContent}</p>
          <div className="note-footer">
            <span className="badge">{note.category}</span>
            <span className="date">{note.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NoteList;