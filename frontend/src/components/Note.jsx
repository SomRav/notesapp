const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "Make Not Importance" : "Make important";
  return (
    <li>
      {note.content} {"  "}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;
