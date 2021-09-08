import { style } from "dom-helpers";
import Link from "next/link";
import styles from "./index.module.css";
const FourOhFour = () => {
  return (
    <>
      <div className={styles.fourOhFour}>
        <div className={styles.emptySearch}>
          <h1>404 - Page Not Found</h1>
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default FourOhFour;
