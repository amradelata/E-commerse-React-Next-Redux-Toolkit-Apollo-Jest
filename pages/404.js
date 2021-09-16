import styles from "./index.module.css";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className={styles.emptySearch}>
      <p>No products match your search</p>
      <p>search: shoes,coat or suit</p>
      {/* <img src="/./icons/illustrations/no-data.svg" /> */}
      <Image
        src="/./icons/illustrations/no-data.svg"
        alt="no-data"
        width="300"
        height="500"
      />
    </div>
  );
}
