
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

import Home from './assets/views/Home';
import Layout from './assets/views/Layout';
import Game from './assets/views/Game';
import AboutUs from './assets/views/AboutUs';
import Error from './assets/views/Error';


function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Games" element={<Game />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Route>
          <Route path="/error" element={<Error />} /> {/* Ruta explícita para el error */}
          <Route path="*" element={<Error />} /> {/* Catch-all para rutas no encontradas */}
        </Routes>
    </>
  );
}

export default App;