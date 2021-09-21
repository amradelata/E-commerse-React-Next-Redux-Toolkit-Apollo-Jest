import styles from "./PurpleButton.module.css";

const PurpleButton = (props) => {
  return (
    <button
      className={styles.PurpleButton}
      disabled={props.mydisabled}
      type={props.mytype}
    >
      {props.name}
    </button>
  );
};
export default PurpleButton;
