import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorComponent = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className="error-container">
            <h1 style={{color: "white"}}>{props.errorMessage}</h1>
            {!props.home && <button onClick={handleClick}>Volver</button>}
        </div>
    );
}