import styles from './Dialogues.module.css';


function DialogueBox({ text }) {
    return (
        <div className={styles.dialogueBox}>
            {text}
        </div>
    );
}
export default DialogueBox;