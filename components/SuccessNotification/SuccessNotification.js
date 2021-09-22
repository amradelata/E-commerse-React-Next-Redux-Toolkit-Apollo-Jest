import styles from "./SuccessNotification.module.css";
const SuccessNotification = () => {
  return (
    <div className={`notification is-success ${styles.showNotification}`}>
      product added to cart
    </div>
  );
};
export default SuccessNotification;
