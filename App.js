import { useState } from "react";
import { nanoid } from 'nanoid';
import NoteList from "./components/Notelist";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'this is a note',
    date: '30/07/2022',
  },
  {
    id: nanoid(),
    text: 'this is another note',
    date: '30/07/2022',
  },
  {
    id: nanoid(),
    text: 'this is s strange note',
    date: '30/07/2022',
  },
  {
    id: nanoid(),
    text: 'this is a weird note',
    date: '30/07/2022',
  },
]);

const [searchText, setSearchText] = useState('')
const [darkMode, setDarkMode] = useState(false)

const addNote = (text) => {
  const date = new Date()
  const newNote = {
    id: nanoid(),
    text: text, 
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote]
  setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes)
}


  return <div className={`${darkMode && 'dark-mode'}`}>
     <div className="container">
       <Header handleToggleDarkMode={setDarkMode}/>
       <Search handleInputSearch={setSearchText}/>
      <NoteList notes={notes.filter((note) => {
        return note.text.includes(searchText)
         })}  
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
    />
    </div>
  </div>
}

export default App;