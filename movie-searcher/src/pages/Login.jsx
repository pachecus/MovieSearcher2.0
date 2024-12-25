import { Button } from '../components/Button';
import styles from './Login.module.css';
import { loginUser } from '../scripts/userData'; 
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';

export const Login = () => {
    const { user, setSession } = useContext(UserContext);
    const navigate = useNavigate();
    const handleForm = async (event) => {
        event.preventDefault();
        var form = document.getElementById('login-form');
        var datos = new FormData(form);
    
        const username = datos.get('login-username') || '';
        const password = datos.get('login-password') || '';

        let userInfo = {
            nickname: username,
            password: password,
        }
        try{
            let response = await loginUser(userInfo);
            if(response === 'user_not_exists'){
                console.log("La contrasenia no coincide con el usuario ingresado")
            } else if (response === "user_exists") {

                console.log("Ha iniciado sesion correctamente");
                setSession(username);
                sessionStorage.setItem('user', username);
                navigate(`/`);
                // setTimeout(() => { // Despues de 10 segundos desaparece el cartel ingreso correcto de usuario
                //     navigate(`/Home`);
                // }, 1000);
            }else{
                console.error("ERROR");
            }
        }catch (error){
            console.error("Error al iniciar sesion:" , error);
        }
    }

    return(
        <div className={styles.login}>
            <h1>Login</h1>
            <div className={styles.login_container}>
                <form onSubmit={handleForm} className={styles.login_form} id='login-form'>
                    {/* <h1>I'm building out this specific feature on the site, it'll be available shortly.</h1> */}
                    <label>Username: <input type="text" placeholder="Usuario o email" id='login-username' name='login-username'></input></label>
                    <label>Password: <input type="password" id='login-password' name='login-password'></input></label>
                    <Button text='Login'/>
                </form>
            </div>
        </div>
    );
}