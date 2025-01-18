import { useState, useEffect } from 'react'
import './App.css'

function App() {
 
  const [cargo, setCargo] = useState(false)

  function handleContainerResize() {
    const width = document.getElementById("contenedor").offsetWidth;
    document.getElementById("map-left").style.width = `${width}px`;
    document.getElementById("map-right").style.width = `${width}px`;
  }

  useEffect(() => {
    if(!cargo){
      console.log(cargo)
      handleContainerResize()
      window.addEventListener("resize", handleContainerResize);
      
      Split(["#izquierda", "#derecha"], {
        sizes: [49, 50],
      });
      setCargo(true)
    }
    
  },[cargo])

  return (
    <>
      <h1 className='maquina-de-escribir'>Ignacio Salia</h1>
      <p>Desarrollador frontend</p> 
      <div id="contenedor">
        <div id="izquierda" >
          <div id="map-left" style={{width:"50%"}}>
            <h2>Creando experiencias</h2>
          </div>
        </div>
        <div id="derecha" >
          <div id="map-right" style={{width:"50%"}}>
            <h2 style={{textAlign:"right"}}>Ayudando con inovación</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
