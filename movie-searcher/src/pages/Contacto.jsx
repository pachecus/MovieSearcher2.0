import '../css/styles.css';
import emailjs from 'emailjs-com';
import styles from './Contacto.module.css';
import { Button } from '../components/Button';

export const Contacto = () => {
    function handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_adwzx7h', 'template_ldaoz0q', e.target, 'J5V_y_se_P4zxmSDl')
            .then((res) => {
                alert("Se ha enviado correctamente");
            })
            .catch((error) => {
                alert("Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.");
            });
        
    }

    return (
        <div className={styles.contacto}>
            <h1>Contact</h1>
            <form className={styles.contacto_form} onSubmit={handleSubmit}>
                <div className={styles.contacto_container}>
                    <div className={styles.contact_input}>
                        <label style={{color: "white"}}>Name:
                            <input type='text' placeholder='Pedro' id='name' name='name' />
                        </label>
                    </div>
                    <div className={styles.contact_input}>
                        <label style={{color: "white"}}>Mail:
                            <input type="email" placeholder="pedro@gmail.com" id='mail' name='mail' />
                        </label>
                    </div>
                    <textarea placeholder='Write your message here...' rows={10} id='message' name='message' />
                    <Button text='Send'/>
                </div>
            </form>
        </div>
    );
};
