import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note'
import notes from '../notes.js'

// {
//   key: 1,
//   title: "Delegation",
//   content:
//     "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
// },

function createNote(newNote) {
  return (
    <Note
    key={newNote.key}
    title={newNote.title}
    description={newNote.content}/>)
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
