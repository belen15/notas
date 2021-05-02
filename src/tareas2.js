import React, { useState} from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';



const TareasDos = () => {
  const [notes,setNotes] = useState([
    {
      id: uuid(),
      task: 'Learn React'
    },
    {
      id: uuid(),
      task: 'Learn Typescript'
    },
    {
      id: uuid(),
      task: 'Learn NodeJS'
    },
  ]);

  const addNotes = () => {
    setNotes([...notes, notes.push({
      id:uuid(),
      task: 'nueva tarea'})]
  )}  

  
  return (
    <div className="App">
      <button onClick={addNotes}>+</button>
      <ul>
        {notes.map((item) =>
          <li className="tareas" key={item.id}>{item.task}</li>
        )
        }
      </ul>
     


    </div>
  );
}

export default TareasDos;


