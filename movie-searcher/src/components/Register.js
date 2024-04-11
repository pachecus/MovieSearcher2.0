export const Register = () => {
    const handleForm = () => {

    }

    return(
        <div className="register">
            <h1>Crear Cuenta</h1>
            <div className="register-container">
                <form className="register-form" onSubmit={handleForm}>
                    <div>
                        <label style={{color: "white"}}> Nombre:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}}> Correo:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}}> Usuario:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}} > Contraseña:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <div>
                        <label style={{color: "white"}}> Repetir Contraseña:         
                            <input type="text"></input>
                        </label>
                    </div>
                    <button type="submit"> Registrarse </button>
                </form>
            
            </div>
        </div>
    );
}