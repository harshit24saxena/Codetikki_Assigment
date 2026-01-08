
function Header({showNoteForm, TotalNotes}) {

  return (
    <div className="header">
      <div>
        <h1>All Notes</h1>
        <p className="muted">{TotalNotes} notes</p>
      </div>

      <div className="header-actions">
        <button className="primary-btn" onClick={showNoteForm}>+ Add New Note</button>
        <div className="avatar">👤</div>
      </div>
    </div>
 
  );
}

export default Header;