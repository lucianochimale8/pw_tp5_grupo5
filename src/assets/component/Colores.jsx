import { useState } from "react";

function Colores(){
    // arreglo de colores
    const colores = ['#fa9b9bff', '#a697f6ff', '#68e072ff', '#c27aecff'];
    // useStates
    const [colorDeBotones, setColorDeBotones] = useState(colores);
    const [mensaje, setMensaje] = useState("");
    // Funcion que manejara el cambio de color dentro del boton
    const manejarClickEnElBoton = (index) => {
        // .map recorre todos los elementos del arreglo
        const nuevosColores = colorDeBotones.map(() => {
            // indice devuelve un numero entero entre los espacios del arreglo
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        return colores[indiceAleatorio];
        });
        // Cambiar el color segun el valor del nuevo color
        setColorDeBotones(nuevosColores);
        // .every comprueba si todos los elementos del array cumplen cierta condicion
        const todosIguales = nuevosColores.every((c) => c === nuevosColores[0]);
        // Si todos los colores son de indice igual (todos iguales) mostrar mensaje atravez de SetMensaje
        if (todosIguales) {
          setMensaje("¡Ganaste! Todos los colores son iguales!");
        } else {
          setMensaje(""); // Si no limpia el mensaje si no ganó
        }
    }
    
    return(
        <div className="text-center my-4">
            <h1>Juego de Colores</h1>
            <p>Presiona cualquier botón para cambiar los colores. Si dos o mas coinciden, ganas.</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                {colorDeBotones.map((color, index) => (
                <button
                    key={index}
                    onClick={() => manejarClickEnElBoton(index)}
                    style={{backgroundColor: color,
                    width: "80px",
                    height: "80px",
                    border: "none",
                    borderRadius: "10px",
                }}
                >
                    boton{index+1}
                </button>
                ))}
            </div>
            {/* Mensaje de victoria , si hay mensaje mostrar el mensaje*/}
            {mensaje && 
            <h2
            className="mt-3 text-success fw-bold"
            style={{ color: "#33ff00ff" }}
            >
            {mensaje}
            </h2>}
        </div>
    );
}

export default Colores;