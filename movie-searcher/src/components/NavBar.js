import { Link, useNavigate } from 'react-router-dom';
import logo from '../files/logo.png'

export const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return(
        <div className='nav-bar'>
            <div className='navandlogo'>
                <div className='logo-container'>
                    <img src={logo} alt="Logo" className='logo' onClick={handleClick}/>
                </div>
                <div className='links-container'>
                    <Link to="/" className='nav-link' >Inicio</Link>
                    <Link to="Contacto" className='nav-link'>Contacto</Link> 
                </div>
                <div className='user-nav-links'>
                    <Link to="Login" className='nav-link'>Login</Link>
                    <Link to="Register" className='nav-link'>Register</Link>
                </div>
            </div>
        </div>
    );
}