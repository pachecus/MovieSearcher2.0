import './App.css';
import { Home } from './components/Home';
import { Pelicula } from './components/Pelicula';
import { Serie } from './components/Serie';
import { Anime } from './components/Anime'
import { BrowserRouter as Router, Routes, Route, useLocation , Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Contacto } from './components/Contacto';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {

  const DetallePelicula = () => {
    const location = useLocation();
    const item = location.state.item;
    return (<Pelicula infoPelicula={item}/>)
  }
  const DetalleSerie = () => {
    const location = useLocation();
    const item = location.state.item;
    return (<Serie infoSerie={item}/>)
  }
  const DetalleAnime = () => {
    const location = useLocation();
    const item = location.state.item;
    return (<Anime infoAnime={item}/>)
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} /> {/* Para que la pagina de inicio sea Home */}
          <Route path="/Home" element={<Home />} />
          <Route path='Contacto' element={<Contacto />}></Route>
          <Route path='movie/:title' element={<DetallePelicula />}></Route>
          <Route path='serie/:name' element={<DetalleSerie />}></Route>
          <Route path='anime/:title' element={<DetalleAnime />}></Route>
          <Route path='/Login' element={<Login />} ></Route>
          <Route path='/Register' element={<Register />}></Route>
        </Routes>
      </Router>        
    </div>
  );
}

export default App;
