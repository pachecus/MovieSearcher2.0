import { Button } from '../components/Button';
import styles from './Register.module.css';
import { registerUser, verifyUser } from '../scripts/userData.js';
import { useState, useEffect } from 'react';

export const Register = () => {
    const [verificationError, setVerificationError] = useState("");

    const handleForm = async (event) => {
        event.preventDefault();
        var form = document.getElementById('register-form');
        var datos = new FormData(form);
    
        const firstName = datos.get('first-name') || '';
        const lastName = datos.get('last-name') || '';
        const email = datos.get('mail') || '';
        const username = datos.get('username') || '';
        const password = datos.get('password') || '';
        const repeatedPassword = datos.get('repeated-password') || '';

        let userInfo = {
            nickname: username,
            password: password,
            nombre: firstName,
            apellido: lastName,
            correo: email,
            repeatedPassword: repeatedPassword
        }
    
        if (verifyUser(userInfo, setVerificationError) !== 'no-errors') {
            return;
        }else{
    
            try {
                userInfo = {
                    nickname: username,
                    password: password,
                    nombre: firstName,
                    apellido: lastName,
                    correo: email
                };

                let response = await registerUser(userInfo);
        
                if (response === 'userName_exists') {
                    setVerificationError('Ya existe un usuario con ese username, por favor elija otro');
                } else if (response === 'userMail_exists') {
                    setVerificationError('Ya existe una cuenta asociada con este mail')
                }else if (response === 'user_registered_succesfully') {

                    setVerificationError('Su usuario se ha registrado correctamente');
                    document.getElementById('first-name').value = '';
                    document.getElementById('last-name').value = '';
                    document.getElementById('mail').value = '';
                    document.getElementById('username').value = '';
                    document.getElementById('password').value = '';
                    document.getElementById('repeated-password').value = '';
                    setTimeout(() => { // Despues de 10 segundos desaparece el cartel ingreso correcto de usuario
                        setVerificationError("");
                    }, 10000);
                }

            } catch (error) {
                console.error("Error al registrar usuario: ", error);
            }
        }
    };

    return(
        <div className={styles.register}>
            <h1>Create Account</h1>
            <div className={styles.register_container}>
                <form className={styles.register_form} id='register-form'>
                    {/* <h1>I'm building out this specific feature on the site, it'll be available shortly.</h1> */}
                    <div>
                        <label style={{ color: "white" }}> First name:         
                            <input type="text" id="first-name" name="first-name" />
                        </label>
                    </div>
                    <div>
                        <label style={{ color: "white" }}> Last name:         
                            <input type="text" id="last-name" name="last-name" />
                        </label>
                    </div>
                    <div>
                        <label style={{ color: "white" }}> Mail:         
                            <input type="text" id="mail" name="mail"  />
                        </label>
                    </div>
                    <div>
                        <label style={{ color: "white" }}> Username:         
                            <input type="text" id="username" name="username"  />
                        </label>
                    </div>
                    <div>
                        <label style={{ color: "white" }}> Password:         
                            <input type="password" id="password" name="password"  />
                        </label>
                    </div>
                    <div>
                        <label style={{ color: "white" }}> Repeat password:         
                            <input type="password" id="repeated-password" name="repeated-password"  />
                        </label>
                    </div>
                    <div>
                    <label
                        id='verification'
                        className={`${styles.registerVerification} ${
                            verificationError === 'Su usuario se ha registrado correctamente' ? styles.green : styles.red
                        }`}
                    >
                        {verificationError}
                    </label>
                    </div>
                    <Button text='Submit' function={handleForm} />
                </form>
            </div>
        </div>
    );
}