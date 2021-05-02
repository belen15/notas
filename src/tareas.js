import React, { useState , useCallback} from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Formulario from './form'


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
      task: 'nueva tarea'
    }])

  }
  const nisman = useCallback(() => {
    console.log('todavia no funciona')
    
}, [])
  

  return (
    <div className="App">
      <Formulario/>
      <button className="boton" onClick={addNotes}>+</button> 
    
      <ul>
        {notes.map((item) =>
          <li className="tareas" key={item.id}>{item.task}
            <button className="boton" onClick={()=>nisman()}>x</button>
          </li>
          
        )
        }
      </ul>
      
    </div>
  );
}

export default Tareas;


