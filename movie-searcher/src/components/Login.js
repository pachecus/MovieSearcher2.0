import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const handleForm = () => {
        navigate('/Login');
    }
    return(
        <div className="login">
            <h1>Login</h1>
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