
function addNote() {
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  if (text === '') return;

  const note = document.createElement('div');
  note.className = 'note';

  const noteText = document.createElement('input');
  noteText.type = 'text';
  noteText.value = text;
  noteText.disabled = true;

  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.onclick = () => {
    noteText.disabled = !noteText.disabled;
    editBtn.innerText = noteText.disabled ? 'Edit' : 'Save';
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.onclick = () => {
    note.remove();
  };

  note.appendChild(noteText);
  note.appendChild(editBtn);
  note.appendChild(deleteBtn);

  document.getElementById('notesContainer').appendChild(note);

  input.value = '';
}
