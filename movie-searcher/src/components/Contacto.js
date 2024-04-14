import '../css/styles.css';
import emailjs from 'emailjs-com';

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
        <div className="contacto">
            <h1>Contact</h1>
            <form className='contacto-form' onSubmit={handleSubmit}>
                <div className='contacto-container'>
                    <div className='contact-input'>
                        <label style={{color: "white"}}>Name:
                            <input type='text' placeholder='Pedro' id='name' name='name' />
                        </label>
                    </div>
                    <div className='contact-input'>
                        <label style={{color: "white"}}>Mail:
                            <input type="email" placeholder="pedro@gmail.com" id='mail' name='mail' />
                        </label>
                    </div>
                    <textarea placeholder='Write your message here...' rows={10} id='message' name='message' />
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
    );
};
