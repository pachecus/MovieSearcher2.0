import { Link, useNavigate } from 'react-router-dom';
import logo from '../files/logo.png'
import styles from './NavBar.module.css';
import { useContext } from 'react';
import { UserContext } from '../App';

export const NavBar = (props) => {
    const navigate = useNavigate();
    const {user, setSession} = useContext(UserContext)

    const handleClick = () => {
        navigate('/');
    }
    if(!props.showNavBar){
        return null;
    }
    if (user == null){
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
                        <Link to={`/porfile/${user}`} className={styles.nav_link}>{user}</Link>
                        <Link to={`/`} className={styles.nav_link} onClick={() => setSession(null)}>logout</Link>
                    </div>
                </div>
            </div>
        );
    }
}