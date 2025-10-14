import React, { useEffect, useRef, useState } from "react";
import { iniciarIntervalo } from "../data/TiempoIntervalo";
import Star from "./Star";

const STAR_COLORS = ["#ffea71ff", "#a6ff90ff", "#fd829dff", "#66e6f7ff"];
const SPAWN_INTERVAL_MS = 350;
const STAR_LIFESPAN_MS = 2500;
const MAX_STARS = 3;
const SCORE_TO_WIN = 10;

export default function Estrellas() {
  const [stars, setStars] = useState([]);
  const [score, setScore] = useState(0);
  const [estadoDeJuego, setEstadoDeJuego] = useState("inicio");
    
  const intervalRef = useRef(null);
  const timeoutsRef = useRef(new Map());

  const generarEstrella = () => {
    const nueva = {
      id: Date.now() + Math.random(),
      left: Math.random() * (window.innerWidth - 40) + "px",
      top: Math.random() * (window.innerHeight - 100) + "px",
      size: Math.random() * 30 + 22,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    };

    setStars((prev) => {
      const next = prev.length >= MAX_STARS ? prev.slice(1).concat(nueva) : prev.concat(nueva);
      return next;
    });

    const timeoutId = setTimeout(() => {
      setStars((prev) => prev.filter((s) => s.id !== nueva.id));
      timeoutsRef.current.delete(nueva.id);
    }, STAR_LIFESPAN_MS);

    timeoutsRef.current.set(nueva.id, timeoutId);
  };

  useEffect(() => {
    if (estadoDeJuego === "jugando"){
    intervalRef.current = iniciarIntervalo(generarEstrella, SPAWN_INTERVAL_MS);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      for (const t of timeoutsRef.current.values()) clearTimeout(t);
      timeoutsRef.current.clear();
    };
  }, [estadoDeJuego]);

  const handleCatch = (id) => {
    const timeoutId = timeoutsRef.current.get(id);
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutsRef.current.delete(id);
    }
    setStars((prev) => prev.filter((s) => s.id !== id));
    setScore((s) => {
      const nuevo = s + 1;
      if (nuevo >= SCORE_TO_WIN) {
        setEstadoDeJuego("ganaste");
      }
      return nuevo;
    });
  };

const starGame = () => {
  setScore(0);
  setStars([]);
  setEstadoDeJuego("jugando");
};

 return (
    <div
      className="w-100 h-100"
      style={{ minHeight: "100vh",
         backgroundColor: "#151724ff",
          position: "relative",
           overflow: "hidden",
            color: "white" 
          }}
    >
      <div
      style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        zIndex: 3000,
        backgroundColor: "rgba(143, 39, 117, 0.36)",
        padding: "8px 14px",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "1.2rem",
        backdropFilter: "blur(6px)",
      }}
   >
    🌟🎇 {score}
   </div>

   {estadoDeJuego === "jugando" &&
   stars.map((s) => <Star key={s.id} star={s} onCatch={handleCatch} />)}
   
   {estadoDeJuego === "jugando" &&(
    <div
    className="d-flex flex-column justify-content-center align-items-center"
    style={{ height: "100vh"}}
  >
    <h1 className="text-warning mb-3" style={{ fontSize: "3rem" }}>
      ¡Atrapa las estrellas!
    </h1>
    <button className="btn btn-outline-light btn-lg" onClick={starGame}>
      Iniciar Juego
    </button>
    </div>
   )}

    {estadoDeJuego === "ganaste" && (
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-75"
        style={{ 
          position: "absolute",
           top: 0,
           left: 0,
           width: "100%",
          height: "100vh",
          zIndex: 3000,
           }}
           >
            <h2 className="text-success mb-3" style={{ fontSize: "2.5rem" }}>
              ¡GANASTE! 🎉
            </h2>
            <p className="text-light mb-4">Puntuación final: {score}</p>
            <button className="btn btn-light btn-lg" onClick={starGame}>
              Jugar de Nuevo
            </button>
           </div>
    )}
    </div>
  );
}