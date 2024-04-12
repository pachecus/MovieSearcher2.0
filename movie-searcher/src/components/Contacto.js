import '../css/styles.css'

export const Contacto = () => {
    // const handleClick = () => {

    // }

    return (
        <div className="contacto">
            <form type='submit' className='contacto-form'>
                <div className='contacto-container'>
                    <input type="email" placeholder="juan@gmail.com" />
                    <textarea type="text" placeholder='Write your message here...' rows={10}/>
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
    );
}