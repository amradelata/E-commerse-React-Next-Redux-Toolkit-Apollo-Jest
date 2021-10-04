import Link from "next/link";
import Image from "next/image";
import styles from "./ErrorMessage.module.css";
import PurpleButton from "../PurpleButton/PurpleButton";
const ErrorMessage = (props) => {
  return (
    <div className={styles.empty}>
      <p>{props.title}</p>

      <Image
        src="/./icons/illustrations/empty.svg"
        alt="empty"
        width="400"
        height="400"
      />
      <Link href="/" passHref>
        <PurpleButton name={"Go to shopping"} width={"400px"} />
      </Link>
    </div>
  );
};
export default ErrorMessage;
