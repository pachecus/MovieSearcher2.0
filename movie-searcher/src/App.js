import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Pelicula } from './pages/Pelicula';
import { Serie } from './pages/Serie';
import { Anime } from './pages/Anime';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Contacto } from './pages/Contacto';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ErrorComponent } from './pages/ErrorPage';
import { Mobile } from './pages/Mobile';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  // const client = new QueryClient();
  let navegador = navigator.userAgent;
  if (navegador.match(/Android/i) || navegador.match(/webOS/i) || navegador.match(/iPhone/i) || navegador.match(/iPad/i) || navegador.match(/iPod/i) || navegador.match(/BlackBerry/i) || navegador.match(/Windows Phone/i)) {
    return(
      <div className="App">
        <Mobile />
      </div>
    );
  }else{
    return (
      <div className="App">
        {/* <QueryClientProvider client={client}> */}
          <Router>
            <AppRoutes />
          </Router>
          {/* </QueryClientProvider> */}
      </div>
    );
  }
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
        <Route path="/movie/:title" element={<Pelicula />} />
        <Route path="/serie/:name" element={<Serie />} />
        <Route path="/anime/:title" element={<Anime />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Error" element={<ErrorComponent errorMessage="Ooops, where are you going?" />} />
        <Route path="*" element={<Navigate to="/Error"/>}/>
      </Routes>
    </>
  );
}

// function DetallePelicula() {
//   const location = useLocation();
//   const item = location.state?.item; 
//   return <Pelicula infoPelicula={item} />;
// }

// function DetalleSerie() {
//   const location = useLocation();
//   const item = location.state?.item; 
//   return <Serie infoSerie={item} />;
// }

// function DetalleAnime() {
//   const location = useLocation();
//   const item = location.state?.item; 
//   return <Anime infoAnime={item} />;
// }

export default App;

