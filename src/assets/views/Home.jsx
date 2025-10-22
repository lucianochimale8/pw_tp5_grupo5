function Home(){

    return(
        <>
            <div className="text-center">
                {/* Hero Section */}
                <div className="floating mb-5">
                    <div className="bloom-effect p-5 rounded-4" style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(74,144,226,0.1) 50%, rgba(139,92,246,0.1) 100%)',
                        backdropFilter: 'blur(15px)',
                        border: '2px solid #e2e8f0',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                    }}>
                        <h2 className="display-4 mb-4" style={{
                            background: 'linear-gradient(45deg, #4a90e2, #87ceeb, #8b5cf6, #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px rgba(74, 144, 226, 0.3)'
                        }}>
                            <i className="fas fa-sparkles me-3"></i>
                            ¡Bienvenidos a nuestra página de proyectos!
                            <i className="fas fa-sparkles ms-3"></i>
                        </h2>
                        <p className="lead mb-4" style={{color: '#4a90e2'}}>
                            Somos estudiantes apasionados de <span className="fw-bold" style={{color: '#8b5cf6'}}>Programación Web</span> 
                            <br/>y este sitio muestra algunos de nuestros trabajos más creativos.
                        </p>
                    </div>
                </div>

                {/* Tech Stack Cards */}
                <div className="row g-4 mb-5">
                    <div className="col-md-3 col-sm-6">
                        <div className="card h-100 border-0" style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(74,144,226,0.1) 100%)',
                            backdropFilter: 'blur(10px)',
                            transition: 'transform 0.3s ease',
                            border: '2px solid #e2e8f0',
                            borderRadius: '25px',
                            boxShadow: '0 4px 16px rgba(139, 92, 246, 0.1)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotateY(5deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotateY(0deg)'}>
                            <div className="card-body text-center">
                                <i className="fab fa-react fa-3x mb-3" style={{color: '#4a90e2'}}></i>
                                <h5 className="card-title fw-bold" style={{color: '#4a90e2'}}>React</h5>
                                <p className="card-text" style={{color: '#666'}}>Biblioteca moderna para interfaces de usuario</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="card h-100 border-0" style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(135,206,235,0.1) 100%)',
                            backdropFilter: 'blur(10px)',
                            transition: 'transform 0.3s ease',
                            border: '2px solid #e2e8f0',
                            borderRadius: '25px',
                            boxShadow: '0 4px 16px rgba(139, 92, 246, 0.1)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotateY(-5deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotateY(0deg)'}>
                            <div className="card-body text-center">
                                <i className="fas fa-route fa-3x mb-3" style={{color: '#87ceeb'}}></i>
                                <h5 className="card-title fw-bold" style={{color: '#87ceeb'}}>React Router</h5>
                                <p className="card-text" style={{color: '#666'}}>Navegación dinámica en aplicaciones</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="card h-100 border-0" style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(176,224,230,0.1) 100%)',
                            backdropFilter: 'blur(10px)',
                            transition: 'transform 0.3s ease',
                            border: '2px solid #e2e8f0',
                            borderRadius: '25px',
                            boxShadow: '0 4px 16px rgba(139, 92, 246, 0.1)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotateY(5deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotateY(0deg)'}>
                            <div className="card-body text-center">
                                <i className="fab fa-bootstrap fa-3x mb-3" style={{color: '#87ceeb'}}></i>
                                <h5 className="card-title fw-bold" style={{color: '#87ceeb'}}>Bootstrap</h5>
                                <p className="card-text" style={{color: '#666'}}>Framework CSS para diseño responsivo</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="card h-100 border-0" style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(139,92,246,0.1) 100%)',
                            backdropFilter: 'blur(10px)',
                            transition: 'transform 0.3s ease',
                            border: '2px solid #e2e8f0',
                            borderRadius: '25px',
                            boxShadow: '0 4px 16px rgba(139, 92, 246, 0.1)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) rotateY(-5deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotateY(0deg)'}>
                            <div className="card-body text-center">
                                <i className="fas fa-bolt fa-3x mb-3" style={{color: '#8b5cf6'}}></i>
                                <h5 className="card-title fw-bold" style={{color: '#8b5cf6'}}>Vite</h5>
                                <p className="card-text" style={{color: '#666'}}>Herramienta de construcción ultrarrápida</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;