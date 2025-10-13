import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import errorImage from "../img/error.png";
import Audio from "../audio/AtakeLoli.mp3";

function Error() {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  };

  return (
    <div
      className=".container-xl"
      style={{ overflow: "hidden", height: "100vh", width: "100vw" }}
    >
      <img
        src={errorImage}
        alt="Error"
        onClick={handleClick}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          cursor: "pointer",
        }}
      />
      <audio ref={audioRef} src={Audio} preload="auto" />
    </div>
  );
}

export default Error;