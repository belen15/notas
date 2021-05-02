import React, { useState, useCallback } from 'react';
import './App.css';

// Clase escrita de la forma hook
const Formulario = () => {

  // redux - useStore
  // -

  // es un hook? atributo
  const [datos, setDatos] = useState({
    nombre: ''
  })
  const [tareas, setTareas] = useState()

  // hay ref?
  // -

  // callback - effect
  // solo pueden llamar getters y setters.
  // redux -actions

  // es un hook? function
  const datosIngresados = useCallback((event) => {
    // en el cuerpo de los callbacks, getters y setters solamente.
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
    // en el corchete, todos los getters que usaste
  }, [datos])

  // es un hook? function
  const nuevaTarea = useCallback(() => {
    // en el cuerpo de los callbacks, getters y setters solamente.
    console.log(datos.nombre) 
    setTareas(datos.nombre)

    // en el corchete, todos los getters que usaste
  }, [datos])

  // useEffect?
  // --

  // que es? function render()
  // solo getters y store (redux) y on=callbacks y id=refs
  return (
    <div className="formulario">
        <div>
          <input
            placeholder="Ingrese tarea"
            className="elementos"
            type="text"
            name="nombre"
            onChange={datosIngresados}

          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={nuevaTarea}>Agregar tarea</button>
        </div>
        <h4>{tareas}</h4>
    </div>
  )
}

export default Formulario;