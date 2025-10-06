import logo from '../img/me.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Game(){

    const navegacion = useNavigate();

    const manejarClickImagen = () => {
        navegacion("/");
    };

    return(
        <>
            <h1> <Link to="/">Home</Link></h1>
            <img src={logo} width="70%" alt="perrito" onClick={manejarClickImagen} />
        </>
        
    );
}

export default Game;