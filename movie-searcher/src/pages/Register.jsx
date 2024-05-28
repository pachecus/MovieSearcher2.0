// import { Button } from '../components/Button';
import styles from './Register.module.css';
import { regitserUser } from '../scripts/userData.js';

export const Register = () => {
    const handleForm = () => {
        // if(passowrd === repeatedPassword){
        //     regitserUser(nickname, password, nombre, apellido, correo);
        // }else{
        //     console.log('Las contraseñas no coinciden')
        // }
    }

    return(
        <div className={styles.register}>
            <h1>Create Account</h1>
            <div className={styles.register_container}>
                <form className={styles.register_form} onSubmit={handleForm}>
                    <h1>I'm building out this specific feature on the site, it'll be available shortly.</h1>
                    {/* <div>
                        <label style={{color: "white"}}> First name:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}}> Last name:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}}> Mail:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}}> Username:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}} > Password:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}}> Repeat password:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <Button text='Submit'/> */}
                </form>
            </div>
        </div>
    );
}