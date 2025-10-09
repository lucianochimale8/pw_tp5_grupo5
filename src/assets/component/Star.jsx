export default function Star({ star, onCatch }) {
  return (
    <div
      role="button"
      aria-label="Estrella"
      title="Click para atrapar"
      onClick={() => onCatch(star.id)}
      className="d-flex align-items-center justify-content-center"
      style={{
        position: "absolute",
        left: star.left,
        top: star.top,
        transform: "translate(-50%,-50%)",
        fontSize: star.size,
        color: star.color,
        cursor: "pointer",
        userSelect: "none",
        zIndex: 1050,
        transition: "transform 0.12s ease, opacity 0.25s ease",
        // animacion ñam :3
        animation: `starFloat ${1 + (star.size % 3) * 0.2}s infinite alternate`,
      }}
    >
      ★
      <style>{`
        @keyframes starFloat {
          from { transform: translate(-50%,-50%) translateY(0) scale(1); opacity: 1; }
          to { transform: translate(-50%,-50%) translateY(-6px) scale(1.05); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}