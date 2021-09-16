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
        alt="Picture of something nice"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
