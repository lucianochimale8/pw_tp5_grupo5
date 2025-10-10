export function iniciarIntervalo(agregarEstrella) {
  const intervalo = setInterval(() => {
    const nuevaEstrella = {
      id: Date.now(),
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10
    };

    agregarEstrella(nuevaEstrella);
  }, 500);

  return intervalo;
}