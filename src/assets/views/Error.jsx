import "bootstrap/dist/css/bootstrap.min.css";
import errorImage from "../img/error.png";

function Error() {
  return (
    <div 
      className=".container-xl"
      style={{ overflow: "hidden" }}
    >
      <img
        src={errorImage}
        alt="Error"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default Error;