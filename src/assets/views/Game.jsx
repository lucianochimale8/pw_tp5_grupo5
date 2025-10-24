import { useState } from 'react';
import Estrellas from '../component/Estrellas.jsx';
import Formulario from '../component/Formulario.jsx';

function Game(){
    const [currentGame, setCurrentGame] = useState(null);

    const handleGameSelect = (game) => {
        if (game === 'estrellas') {
            setCurrentGame('estrellas');
        } else if (game === 'formulario') {
            // Juego no disponible aún
            setCurrentGame('formulario');
            //alert('¡Próximamente! Este juego estará disponible pronto.');
        }
    };

    const handleBackToGames = () => {
        setCurrentGame(null);
    };

    //Boton para volver al menu
    const BackButton = () => (
        <div className="text-center mb-4">
            <button 
                className="btn btn-outline-primary mb-3"
                onClick={handleBackToGames}
                style={{
                    borderRadius: '25px',
                    padding: '10px 20px',
                    border: '2px solid #4a90e2',
                    color: '#4a90e2',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <i className="fas fa-arrow-left me-2"></i>
                Volver a Juegos
            </button>
        </div>
    );

    // Si hay un juego seleccionado, mostrar el juego
    if (currentGame === 'estrellas') {
        return (
            <div className="container py-5">
                <BackButton />
                <Estrellas />
            </div>
        );
    }
    
    if (currentGame === 'formulario') {
        return (
            <div className="container py-5">
                <BackButton />
                <Formulario />
            </div>
        );
    }

    // Página principal de juegos
    return(
        <>
            <div className="container py-5">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <div className="floating">
                        <h2 className="display-3 mb-4" style={{
                            background: 'linear-gradient(45deg, #4a90e2, #87ceeb, #8b5cf6, #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px rgba(74, 144, 226, 0.3)'
                        }}>
                            <i className="fas fa-gamepad me-3"></i>
                            Nuestros Juegos
                            <i className="fas fa-gamepad ms-3"></i>
                        </h2>
                        <p className="lead mb-0" style={{
                            color: '#4a90e2',
                            fontSize: '1.2rem',
                            fontWeight: '600'
                        }}>
                            Aquí encontrarás los juegos increíbles que hemos desarrollado usando las mejores tecnologías.
                        </p>
                    </div>
                </div>

                {/* Games Cards */}
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 mb-4">
                        <div className="card border-0 bloom-effect floating" style={{
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(16, 185, 129, 0.6) 50%, rgba(6, 182, 212, 0.4) 100%)',
                            backdropFilter: 'blur(15px)',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                            borderRadius: '20px',
                            transition: 'all 0.4s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02) translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1) translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                        }}>
                            <div className="card-body text-center p-4">
                                <div className="mb-3">
                                    <span style={{fontSize: '3rem', filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'}}>⭐</span>
                                </div>
                                <h3 className="card-title mb-3" style={{
                                    color: '#ffffff',
                                    textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                                    fontSize: '1.5rem',
                                    fontWeight: '700'
                                }}>
                                    Atrapa las Estrellas
                                </h3>
                                <p className="card-text mb-4" style={{
                                    color: '#ffffff',
                                    textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                                    fontSize: '1rem'
                                }}>
                                    Juego de reflejos y velocidad
                                </p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => handleGameSelect('estrellas')}
                                    style={{
                                        borderRadius: '25px',
                                        padding: '12px 30px',
                                        background: 'linear-gradient(45deg, #4a90e2, #87ceeb)',
                                        border: 'none',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        boxShadow: '0 4px 15px rgba(74, 144, 226, 0.4)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(74, 144, 226, 0.6)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(74, 144, 226, 0.4)';
                                    }}
                                >
                                    ¡Jugar!
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-8 mb-4">
                        <div className="card border-0 bloom-effect floating" style={{
                            background: 'linear-gradient(135deg, rgba(251, 191, 207, 0.9) 0%, rgba(244, 63, 94, 0.8) 50%, rgba(219, 39, 119, 0.6) 100%)',
                            backdropFilter: 'blur(15px)',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                            borderRadius: '20px',
                            transition: 'all 0.4s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02) translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1) translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                        }}>
                            <div className="card-body text-center p-4">
                                <div className="mb-3">
                                    <span style={{fontSize: '3rem', filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'}}>📝</span>
                                </div>
                                <h3 className="card-title mb-3" style={{
                                    color: '#ffffff',
                                    textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                                    fontSize: '1.5rem',
                                    fontWeight: '700'
                                }}>
                                    Formulario de Registro
                                </h3>
                                <p className="card-text mb-4" style={{
                                    color: '#ffffff',
                                    textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                                    fontSize: '1rem'
                                }}>
                                    Completa tus datos y únete a está gran familia
                                </p>
                                <button 
                                    className="btn btn-secondary"
                                    onClick={() => handleGameSelect('formulario')}
                                    style={{
                                        borderRadius: '25px',
                                        padding: '12px 30px',
                                        background: 'linear-gradient(45deg, #da7676ff, #f1c69dff)',
                                        border: 'none',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        boxShadow: '0 4px 15px rgba(226, 157, 157, 0.4)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(107, 114, 128, 0.6)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(107, 114, 128, 0.4)';
                                    }}
                                >
                                    Completar Formulario
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Game;