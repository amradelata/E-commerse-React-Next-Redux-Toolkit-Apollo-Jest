import Link from "next/link";
import Image from "next/image";
import styles from "./PageNotFoundMessage.module.css";
import PurpleButton from "../PurpleButton/PurpleButton";
const PageNotFoundMessage = (props) => {
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
        <a>
          <PurpleButton name={"Go to shopping"} width={"400px"} />
        </a>
      </Link>
    </div>
  );
};
export default PageNotFoundMessage;
