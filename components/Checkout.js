import styles from "./CheckOut.module.css";
import { useSelector } from "react-redux";

const CheckOut = (props) => {
  const authSlice = useSelector((state) => state.authSlice);
  return (
    <>
      <div className={styles.stepsBar}>
        <div className={styles.step}>
          <div
            className={styles.circle}
            style={{ backgroundColor: !authSlice.Shipping && "#ef5013" }}
          >
            <div className={styles.stepName}>shipping</div>
            {authSlice.Shipping ? (
              <img src="/./icons/checked.svg" />
            ) : (
              <div className={styles.number}>1</div>
            )}
          </div>

          <div className={styles.line}></div>
        </div>
        {/*  */}

        <div className={styles.step}>
          <div
            className={styles.circle}
            style={{ backgroundColor: !authSlice.Payment && "#ef5013" }}
          >
            <div className={styles.stepName}>payment</div>
            {authSlice.Payment ? (
              <img src="/./icons/checked.svg" />
            ) : (
              <div className={styles.number}>2</div>
            )}
          </div>
          <div className={styles.line}></div>
        </div>

        {/*  */}

        <div className={styles.step}>
          <div
            className={styles.circle}
            style={{ backgroundColor: !props.Done && "#ef5013" }}
          >
            <div className={styles.stepName}>Done</div>
            {props.Done ? (
              <img src="/./icons/checked.svg" />
            ) : (
              <div className={styles.number}>3</div>
            )}
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
