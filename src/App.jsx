
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './assets/views/Home';
import Layout from './assets/views/Layout';
import Game from './assets/views/Game';
import AboutUs from './assets/views/AboutUs';
import Error from './assets/views/Error';


function App() {

  return (
    <>
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/Games" element={<Game />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Container>
      
    </>
  );
}

export default App;
