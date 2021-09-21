import Link from "next/link";
import Image from "next/image";
import styles from "./EmptyProducts.module.css";
const EmptyProducts = (props) => {
  return (
    <div className={styles.empty}>
      <p className="is-size-4">{props.title}</p>

      <Image
        src="/./icons/illustrations/empty.svg"
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
};
export default EmptyProducts;
