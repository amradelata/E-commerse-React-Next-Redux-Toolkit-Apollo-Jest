import styles from "./Loading.module.css";
import Image from "next/Image";
const Loading = () => {
  return (
    <div className={styles.Loading}>
      <Image
        src="/./icons/Loading.gif"
        alt="Loading"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Loading;
