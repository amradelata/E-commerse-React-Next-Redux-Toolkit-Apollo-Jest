import styles from "./CheckOut.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
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
              <Image
                src="/./icons/checked.svg"
                alt="Picture of something nice"
                layout="fill"
                objectFit="cover"
              />
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
              <Image
                src="/./icons/checked.svg"
                alt="Picture of something nice"
                layout="fill"
                objectFit="cover"
              />
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
              <Image
                src="/./icons/checked.svg"
                alt="Picture of something nice"
                layout="fill"
                objectFit="cover"
              />
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
