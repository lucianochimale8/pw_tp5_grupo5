import { Outlet, Link } from "react-router-dom";
import iconImage from '../img/icon.jpg';

function Layout(){

    return(
        <>
            <header className="py-4" style={{
                background: 'linear-gradient(135deg, #4a90e2 0%, #87ceeb 50%, #8b5cf6 100%)',
                color: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
                <div className="container d-flex align-items-center">
                    <div className="me-4" style={{
                        position: 'relative',
                        width: '140px',
                        height: '140px'
                    }}>
                        <img 
                            src={iconImage} 
                            alt="Icon" 
                            className="rounded-circle"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                border: '3px solid transparent',
                                boxShadow: '0 0 0 2px #4a90e2, 0 0 40px white',
                                animation: 'pulse 2s ease-in-out infinite alternate',
                                filter: 'brightness(1.1) contrast(1.1)'
                            }}
                        />
                    </div>
                    <div className="flex-grow-1">
                        <h1 className="display-5 mb-0 text-start" style={{
                            background: 'linear-gradient(45deg, #ffffff, #f8f9ff, #e2e8f0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px rgba(255, 255, 255, 0.8)'
                        }}>
                            <i className="fas fa-code me-3"></i>
                            Programación Web - Grupo 5
                        </h1>
                        <p className="lead mt-2 text-start" style={{opacity: 0.9, textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Proyectos Modernos y Creativos</p>
                    </div>
                </div>
            </header>
            
            <nav className="navbar navbar-expand-lg navbar-light" style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(135,206,235,0.9) 50%, rgba(139,92,246,0.9) 100%)',
                backdropFilter: 'blur(10px)',
                borderBottom: '3px solid #e2e8f0',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/" style={{
                        background: 'linear-gradient(45deg, #4a90e2, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '1.5rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        🚀 FPW
                    </Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <Link className="nav-link fw-bold px-3 py-2 rounded-pill" 
                                      to="/" 
                                      style={{
                                          background: 'rgba(255,255,255,0.9)',
                                          color: '#2c5aa0',
                                          transition: 'all 0.3s ease',
                                          backdropFilter: 'blur(5px)',
                                          border: '1px solid #e2e8f0'
                                      }}
                                      onMouseEnter={(e) => {
                                          e.target.style.background = 'rgba(74,144,226,0.9)';
                                          e.target.style.color = 'white';
                                          e.target.style.transform = 'scale(1.05)';
                                          // Emoji ya es blanco, no necesita cambio
                                      }}
                                      onMouseLeave={(e) => {
                                          e.target.style.background = 'rgba(255,255,255,0.9)';
                                          e.target.style.color = '#2c5aa0';
                                          e.target.style.transform = 'scale(1)';
                                          // Emoji mantiene su estilo blanco
                                      }}>
                                    <i className="fas fa-home" style={{
                                        color: '#ffffff',
                                        textShadow: '0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.6)',
                                        marginRight: '8px'
                                    }}></i> Home
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link fw-bold px-3 py-2 rounded-pill" 
                                      to="/games" 
                                      style={{
                                          background: 'rgba(255,255,255,0.9)',
                                          color: '#4682b4',
                                          transition: 'all 0.3s ease',
                                          backdropFilter: 'blur(5px)',
                                          border: '1px solid #e2e8f0'
                                      }}
                                      onMouseEnter={(e) => {
                                          e.target.style.background = 'rgba(135,206,235,0.9)';
                                          e.target.style.color = 'white';
                                          e.target.style.transform = 'scale(1.05)';
                                          // Emoji ya es blanco, no necesita cambio
                                      }}
                                      onMouseLeave={(e) => {
                                          e.target.style.background = 'rgba(255,255,255,0.9)';
                                          e.target.style.color = '#4682b4';
                                          e.target.style.transform = 'scale(1)';
                                          // Emoji mantiene su estilo blanco
                                      }}>
                                    <i className="fas fa-gamepad" style={{
                                        color: '#ffffff',
                                        textShadow: '0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.6)',
                                        marginRight: '8px'
                                    }}></i> Games
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link fw-bold px-3 py-2 rounded-pill" 
                                      to="/aboutus" 
                                      style={{
                                          background: 'rgba(255,255,255,0.9)',
                                          color: '#6b46c1',
                                          transition: 'all 0.3s ease',
                                          backdropFilter: 'blur(5px)',
                                          border: '1px solid #e2e8f0'
                                      }}
                                      onMouseEnter={(e) => {
                                          e.target.style.background = 'rgba(139,92,246,0.9)';
                                          e.target.style.color = 'white';
                                          e.target.style.transform = 'scale(1.05)';
                                          // Emoji ya es blanco, no necesita cambio
                                      }}
                                      onMouseLeave={(e) => {
                                          e.target.style.background = 'rgba(255,255,255,0.9)';
                                          e.target.style.color = '#6b46c1';
                                          e.target.style.transform = 'scale(1)';
                                          // Emoji mantiene su estilo blanco
                                      }}>
                                    <i className="fas fa-users" style={{
                                        color: '#ffffff',
                                        textShadow: '0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.6)',
                                        marginRight: '8px'
                                    }}></i> About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <main className="container py-5" style={{ minHeight: '70vh', position: 'relative' }}>
                {/* Efectos de partículas flotantes */}
                <div className="floating-particles">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 6}s`,
                                animationDuration: `${4 + Math.random() * 4}s`,
                                opacity: 0.3 + Math.random() * 0.4,
                                transform: `scale(${0.5 + Math.random() * 0.5})`
                            }}
                        />
                    ))}
                </div>
                <Outlet />
            </main>
            
            <footer className="text-center py-4 mt-5" style={{
                background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                borderTop: '2px solid #4a90e2',
                boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
            }}>
                <p className="mb-0" style={{color: '#4a90e2'}}>
                    <i className="fas fa-heart me-2" style={{color: '#8b5cf6'}}></i>
                    Hecho con amor por el Grupo 5 - FPW 2024
                    <i className="fas fa-star ms-2" style={{color: '#87ceeb'}}></i>
                </p>
            </footer>
        </>
    );
}

export default Layout;