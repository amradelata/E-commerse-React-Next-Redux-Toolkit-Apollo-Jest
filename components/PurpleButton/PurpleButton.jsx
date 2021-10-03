import styles from "./PurpleButton.module.css";

const PurpleButton = (props) => {
  return (
    <button
      style={{ width: props.width }}
      className={styles.PurpleButton}
      disabled={props.myDisabled}
      type={props.myType}
    >
      {props.name}
    </button>
  );
};
export default PurpleButton;
