import React, { useEffect, useRef, useState } from "react";
import { iniciarIntervalo } from "../data/TiempoIntervalo";
import Star from "./Star";

const STAR_COLORS = ["#ffea71ff", "#a6ff90ff", "#fd829dff", "#66e6f7ff"];
const SPAWN_INTERVAL_MS = 400;
const STAR_LIFESPAN_MS = 2500;
const MAX_STARS = 3;

export default function Estrellas() {
  const [stars, setStars] = useState([]);
  const [score, setScore] = useState(0);
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
    intervalRef.current = iniciarIntervalo(generarEstrella, SPAWN_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      for (const t of timeoutsRef.current.values()) clearTimeout(t);
      timeoutsRef.current.clear();
    };
  }, []);

  const handleCatch = (id) => {
    const timeoutId = timeoutsRef.current.get(id);
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutsRef.current.delete(id);
    }
    setStars((prev) => prev.filter((s) => s.id !== id));
    setScore((s) => s + 1);
  };

  return (
    <div
      className="w-100 h-100"
      style={{ minHeight: "100vh", backgroundColor: "#151724ff", position: "relative", overflow: "hidden" }}
    >
      <nav className="navbar navbar-dark bg-transparent position-fixed w-100" style={{ zIndex: 2000 }}>
        <div className="container-fluid d-flex justify-content-start align-items-center">
          <span className="badge bg-light text-dark">
            Puntuación <strong className="ms-2">{score}</strong>
          </span>
          <small className="text-white-50 ms-3">¡Atrapá las estrellas!</small>
        </div>
      </nav>

      {stars.map((s) => (
        <Star key={s.id} star={s} onCatch={handleCatch} />
      ))}
    </div>
  );
}