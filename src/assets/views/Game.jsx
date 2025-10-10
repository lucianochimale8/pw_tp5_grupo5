import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Estrellas from '../component/Estrellas.jsx';

function Game(){
    
    const navegacion = useNavigate();

    const manejarClickImagen = () => {
        navegacion("/");
    };

    return(
        <>
            <h1> <Link to="/">Home</Link></h1>
            <img src={logo} width="25%" alt="perrito" onClick={manejarClickImagen} />

            <Estrellas />

        </>
    );
}

export default Game;