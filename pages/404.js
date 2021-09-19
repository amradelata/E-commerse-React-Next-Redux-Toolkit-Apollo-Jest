import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/Link";
export default function Custom404() {
  return (
    <div className={styles.empty}>
      <p className="is-size-4">404</p>

      <Image
        src="/./icons/illustrations/no-data.svg"
        alt="empty"
        width="400"
        height="400"
      />
      <Link href="/" passHref>
        <a>
          <button>Go to shopping</button>
        </a>
      </Link>
    </div>
  );
}
