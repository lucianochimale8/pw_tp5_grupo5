import { Outlet, Link } from "react-router-dom";

function Layout(){

    return(
        <>
            <header className="bg-dark text-white text-center py-3">
                <h1>Programación Web - Grupo 5</h1>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FPW</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/games">Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container py-4">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;