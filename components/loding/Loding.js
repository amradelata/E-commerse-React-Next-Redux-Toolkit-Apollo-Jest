import styles from "./loding.module.css";
import Image from "next/Image";
const Loding = () => {
  return (
    <div className={styles.loding}>
      <Image src="/./icons/loding.gif" alt="loding" width="200" height="160" />
    </div>
  );
};

export default Loding;
