export const Login = () => {

    const handleForm = () => {

    }
    return(
        <div className="login">
            <h1>Iniciar Sesion</h1>
            <div className="login-container">
                
                <form onSubmit={handleForm} className="login-form">
                    <input type="text" placeholder="Usuario o email"></input>
                    <input type="password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}