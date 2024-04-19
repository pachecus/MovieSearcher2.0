import { Button } from '../components/Button';
import styles from './ErrorPage.module.css';

import { useNavigate } from "react-router-dom";

export const ErrorComponent = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className={styles.error_container}>
            <h1>{props.errorMessage}</h1>
            {!props.home && <Button function={handleClick} text='Go Back'/>}
        </div>
    );
}