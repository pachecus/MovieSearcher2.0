import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Pelicula } from './components/Pelicula';
import { Serie } from './components/Serie';
import { Anime } from './components/Anime';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Contacto } from './components/Contacto';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ErrorComponent } from './components/ErrorComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const showNavBar = !location.pathname.startsWith('/Error');

  return (
    <>
      <NavBar showNavBar={showNavBar} />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} /> {/* Para que la pagina de inicio sea Home */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/movie/:title" element={<DetallePelicula />} />
        <Route path="/serie/:name" element={<DetalleSerie />} />
        <Route path="/anime/:title" element={<DetalleAnime />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Navigate to="/Error"/>}/>
        <Route path="/Error" element={<ErrorComponent errorMessage="Ooops, where are you going?" />} />
      </Routes>
    </>
  );
}

function DetallePelicula() {
  const location = useLocation();
  const item = location.state?.item; 
  return <Pelicula infoPelicula={item} />;
}

function DetalleSerie() {
  const location = useLocation();
  const item = location.state?.item; 
  return <Serie infoSerie={item} />;
}

function DetalleAnime() {
  const location = useLocation();
  const item = location.state?.item; 
  return <Anime infoAnime={item} />;
}

export default App;

