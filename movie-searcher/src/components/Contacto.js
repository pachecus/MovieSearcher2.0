import '../css/styles.css'

export const Contacto = () => {
    // const handleClick = () => {

    // }

    return (
        <div className="contacto">
            <form type='submit' className='contacto-form'>
                <div className='contacto-container'>
                    <input type="email" placeholder="juan@gmail.com" />
                    <textarea type="text" placeholder='Ingrese su mensaje aqui...' rows={10}/>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    );
}