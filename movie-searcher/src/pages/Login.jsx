// import { Button } from '../components/Button';
import styles from './Login.module.css';

export const Login = () => {
    const handleForm = () => {

    }

    return(
        <div className={styles.login}>
            <h1>Login</h1>
            <div className={styles.login_container}>
                <form onSubmit={handleForm} className={styles.login_form}>
                    <h1>I'm building out this specific feature on the site, it'll be available shortly.</h1>
                    {/* <label>Username: <input type="text" placeholder="Usuario o email"></input></label>
                    <label>Password: <input type="password"></input></label>
                    <Button text='Login'/> */}
                </form>
            </div>
        </div>
    );
}