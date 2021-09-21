import styles from "./CheckOut.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
const CheckOut = (props) => {
  const authSlice = useSelector((state) => state.authSlice);
  return (
    <>
      <div className={styles.stepsBar}>
        <div className={styles.step}>
          <div className={!authSlice.Shipping ? styles.circle : styles.activ}>
            <div className={styles.stepName}>shipping</div>
            {authSlice.Shipping ? (
              <Image
                src="/./icons/checked.svg"
                alt="Picture of something nice"
                width="16"
                height="16"
              />
            ) : (
              <div className={styles.number}>1</div>
            )}
          </div>

          <div
            className={!authSlice.Shipping ? styles.line : styles.lineActiv}
          ></div>
        </div>
        {/* step */}

        <div className={styles.step}>
          <div className={!authSlice.Payment ? styles.circle : styles.activ}>
            <div className={styles.stepName}>payment</div>
            {authSlice.Payment ? (
              <Image
                src="/./icons/checked.svg"
                alt="Picture of something nice"
                width="16"
                height="16"
              />
            ) : (
              <div className={styles.number}>2</div>
            )}
          </div>
          <div
            className={!authSlice.Payment ? styles.line : styles.lineActiv}
          ></div>
        </div>

        {/* step */}

        <div className={styles.step}>
          <div className={!props.Done ? styles.circle : styles.activ}>
            <div className={styles.stepName}>Done</div>
            {props.Done ? (
              <Image
                src="/./icons/checked.svg"
                alt="Picture of something nice"
                width="16"
                height="16"
              />
            ) : (
              <div className={styles.number}>3</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
