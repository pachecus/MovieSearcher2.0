import { Link, useNavigate } from 'react-router-dom';
import logo from '../files/logo.png'
import styles from './NavBar.module.css';
import { useContext } from 'react';
import { UserContext } from '../App';

export const NavBar = (props) => {
    const navigate = useNavigate();
    const {user, setSession} = useContext(UserContext);

    const handleLogout = () => {
        setSession(null);
        sessionStorage.setItem("user", 'null');
    }

    const handleClick = () => {
        navigate('/');
    }
    if(!props.showNavBar){
        return null;
    }
    const usuario = sessionStorage.getItem('user');
    console.log('El usuario es:', usuario);
    if (String(usuario) == 'null'){
        return(
            <div className={styles.nav_bar}>
                <div className={styles.navandlogo}>
                    <div className={styles.logo_container}>
                        <img src={logo} alt="Logo" className='logo' onClick={handleClick}/>
                    </div>
                    <div className={styles.links_container}>
                        <Link to="/" className={styles.nav_link} >Home</Link>
                        <Link to="Contacto" className={styles.nav_link}>Contact</Link> 
                    </div>
                    <div className={styles.user_nav_links}>
                        <Link to="Login" className={styles.nav_link}>Login</Link>
                        <Link to="Register" className={styles.nav_link}>Register</Link>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className={styles.nav_bar}>
                <div className={styles.navandlogo}>
                    <div className={styles.logo_container}>
                        <img src={logo} alt="Logo" className='logo' onClick={handleClick}/>
                    </div>
                    <div className={styles.links_container}>
                        <Link to="/" className={styles.nav_link} >Home</Link>
                        <Link to="Contacto" className={styles.nav_link}>Contact</Link> 
                    </div>
                    <div className={styles.user_nav_links}>
                        <Link to={`/profile/${user}`} className={styles.nav_link} >{user}</Link>
                        <Link to={`/`} className={styles.nav_link} onClick={handleLogout}>logout</Link>
                    </div>
                </div>
            </div>
        );
    }
}