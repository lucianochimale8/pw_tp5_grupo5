import React, { useEffect, useRef, useState } from "react";
import { iniciarIntervalo } from "../data/TiempoIntervalo";
import Star from "./Star";

const STAR_COLORS = ["#fde350ff", "#9cff83ff", "#e74c6eff", "#4caff1ff"];
const SPAWN_INTERVAL_MS = 600;
const STAR_LIFESPAN_MS = 2500;
const MAX_STARS = 3;
const SCORE_TO_WIN = 10;

export default function Estrellas() {
  const [stars, setStars] = useState([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("inicio");

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
    if (gameState === "jugando") {
      intervalRef.current = iniciarIntervalo(generarEstrella, SPAWN_INTERVAL_MS);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      for (const t of timeoutsRef.current.values()) clearTimeout(t);
      timeoutsRef.current.clear();
    };
  }, [gameState]);

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
        setGameState("ganaste");
      }
      return nuevo;
    });
  };

  const startGame = () => {
    setScore(0);
    setStars([]);
    setGameState("jugando");
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#140f2eff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          height: "600px",
        backgroundColor: "#140f2eff",
        }}
      >
        {gameState === "jugando" && (
          <div
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              zIndex: 10,
              backgroundColor: "#00fff259",
              padding: "8px 14px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#b3c5ffff",
              backdropFilter: "blur(6px)",
            }}
          >
            ⭐ {score}
          </div>
        )}

        {gameState === "jugando" &&
          stars.map((s) => <Star key={s.id} star={s} onCatch={handleCatch} />)}

        {gameState === "inicio" && (
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{ height: "100%", color: "white" }}
          >
            <h1 className="text-warning mb-3" 
            style={{ fontSize: "3rem"}}>
              ✨ ¡Atrapa las Estrellas! ✨
            </h1>
            <button className="game-btn" onClick={startGame}>
              Iniciar Juego
            </button>
          </div>
        )}

        {gameState === "ganaste" && (
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-75"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 3000,
              borderRadius: "20px",
              color: "white",
            }}
          >
            <h2 className="text-success mb-3" style={{ fontSize: "3.5rem"}}>
              🎉 ¡Ganaste! 🎉
            </h2>
            <p className="mb-4" style={{ fontSize: "1.5rem", color:"lightblue"}}>Puntuación final: {score}</p>
            <button className="game-btn" onClick={startGame}>
              Jugar de nuevo
            </button>
          </div>
        )}
      </div>

      <style>{`
        .game-btn {
          background-color: #ffac5eff; 
          border: none;
          color: #200c0cff;
          font-weight: bold;
          padding: 12px 26px;
          border-radius: 10px;
          font-size: 1.1rem;
          transition: background-color 0.3s, transform 0.2s;
        }
        .game-btn:hover {
          background-color: #ff698aff; 
        }
      `}</style>
    </div>
  );
}