/*import logo from '../img/logo.png';
import { Link } from 'react-router-dom'; (ya no se usa) 
import { useNavigate } from 'react-router-dom'; */
import Estrellas from '../component/Estrellas.jsx';

function Game(){
   /* 
    const navegacion = useNavigate();

    const manejarClickImagen = () => 
        navegacion("/");
    };
*/
    return(
        <>
            {/*<h1> <Link to="/">Home</Link></h1>
            <img src={logo} width="25%" alt="perrito" onClick={manejarClickImagen} /> (queda feo de momento)*/}
            <Estrellas />

        </>
    );
}

export default Game;

{/*lo que queda en comentarios vean si lo pueden usar para seguir trabajando*/}