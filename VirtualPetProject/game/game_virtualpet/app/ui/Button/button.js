import styles from './Button.module.css';

function Button({ value, type = "button", onClick, imageSrc, alt = "Button Image" }) {
    return (
      <div className={styles.button_container}>
        <button type={type} onClick={onClick} className={styles.button_style}>
          {imageSrc ? (
            <img src={imageSrc} alt={alt} />
          ) : (
            value
          )}
        </button>
      </div>
    );
  }

export default Button;