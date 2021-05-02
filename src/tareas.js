import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';


const Tareas = () => {
  
  const notes = [
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

  ]

  return (
    <div className="App">
      <button onClick={() => console.log('añadir nota')}>+</button>
      <ul>
        {notes.map((item) =>
          <li className="tareas" key={item.id}>{item.task}</li>
        )
        }
      </ul>

    </div>
  );
}

export default Tareas;


