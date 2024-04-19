import styles from './Button.module.css';

export const Button = (props) => {
    return (
        <div className={styles.button_styles}>
            <button type='submit' onClick={props.function}>{props.text}</button>
        </div>
    );
}