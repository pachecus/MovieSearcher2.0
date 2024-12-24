import React, { createContext, useContext, useState } from 'react';
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
import { User } from './pages/User';

export const UserContext = createContext();

function App() {
  let navegador = navigator.userAgent;
  let [user, setSession] = useState(null) ;
  const UserProvider = ({ children }) => (
    <UserContext.Provider value={{ user, setSession }}>
      {children}
    </UserContext.Provider>
  );
  if (navegador.match(/Android/i) || navegador.match(/webOS/i) || navegador.match(/iPhone/i) || navegador.match(/iPad/i) || navegador.match(/iPod/i) || navegador.match(/BlackBerry/i) || navegador.match(/Windows Phone/i)) {
    return(
      <UserProvider>
        <div className="App">
          <Mobile />
        </div>
      </UserProvider>
    );
  }else{
    return (
      <UserProvider>
        <div className="App">
            <Router>
              <AppRoutes />
            </Router>
        </div>
      </UserProvider>
    );
  }
}

function AppRoutes() {
  const location = useLocation();
  const showNavBar = !location.pathname.startsWith('/Error');
  const {user, setSession} = useContext(UserContext);
  if (user == null) { // No hay usuario con sesion iniciada
    return (
      <>
        <NavBar showNavBar={showNavBar} />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} /> {/* Para que la pagina de inicio sea Home */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/movie/:title/:id" element={<Pelicula />} />
          <Route path="/serie/:name/:id" element={<Serie />} />
          <Route path="/anime/:title/:id" element={<Anime />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Error" element={<ErrorComponent errorMessage="Ooops, where are you going?" />} />
          <Route path="*" element={<Navigate to="/Error"/>}/>
        </Routes>
      </>
    );
  }else{ // Hay un usuario con sesion iniciada
    console.log("KASDFJHASKFKDJSAFLAF")
    return (
      <>
        <NavBar showNavBar={showNavBar} />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} /> {/* Para que la pagina de inicio sea Home */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/movie/:title/:id" element={<Pelicula />} />
          <Route path="/serie/:name/:id" element={<Serie />} />
          <Route path="/anime/:title/:id" element={<Anime />} />
          <Route path="/porfile/:user" element={<User />} />
          <Route path="/logout/:user" element={<User />} />
          <Route path="/Error" element={<ErrorComponent errorMessage="Ooops, where are you going?" />} />
          <Route path="*" element={<Navigate to="/Error"/>}/>
        </Routes>
      </>
    );
  }

  
}

export default App;