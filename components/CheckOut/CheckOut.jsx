import styles from "./CheckOut.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
const CheckOut = (props) => {
  const AuthSlice = useSelector((state) => state.AuthSlice);
  return (
    <>
      <div className={styles.stepsBar}>
        <div className={styles.step}>
          <div className={!AuthSlice.Shipping ? styles.circle : styles.active}>
            <div className={styles.stepName}>shipping</div>
            {AuthSlice.Shipping ? (
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
            className={!AuthSlice.Shipping ? styles.line : styles.lineActive}
          ></div>
        </div>
        {/* step */}

        <div className={styles.step}>
          <div className={!AuthSlice.Payment ? styles.circle : styles.active}>
            <div className={styles.stepName}>payment</div>
            {AuthSlice.Payment ? (
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
            className={!AuthSlice.Payment ? styles.line : styles.lineActive}
          ></div>
        </div>

        {/* step */}

        <div className={styles.step}>
          <div className={!props.Done ? styles.circle : styles.active}>
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
