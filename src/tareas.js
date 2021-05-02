import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';



const Tareas = () => {
  const [notes, setNotes] = useState([
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
    setNotes([...notes, {
      id: uuid(),
      task: 'Nueva tarea'
    }])

  }

  const deleteNotes =()=>{
    console.log('todavia no funciona')
  }
  

  return (
    <div className="App">
      <button className="boton" onClick={addNotes}>+</button> 
    
      <ul>
        {notes.map((item) =>
          <li className="tareas" key={item.id}>{item.task}
            <button className="boton" onClick={deleteNotes}>x</button>
          </li>
          
        )
        }
      </ul>
      {console.log(notes)}



    </div>
  );
}

export default Tareas;


