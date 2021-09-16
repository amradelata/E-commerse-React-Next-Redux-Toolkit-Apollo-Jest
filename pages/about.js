import styles from "./about.module.css";
import Image from "next/image";
const about = () => {
  return (
    <div className="container is-fluid">
      <div className={styles.parents}>
        <div className={styles.aboutLogo}>
          <Image
            src="/./icons/1.png"
            alt="amradelataLogo"
            width={500}
            height={500}
          />
        </div>

        <div className={styles.aboutCart}>
          <p className="is-size-5">
            Amr Adel Ata frontend developer with a focus in react and looking
            for a job
            <br />
            Here you can find more
            <a href="https://amradelata.com/">amradelata.com</a>
            <a href="https://github.com/amradelata">github.com</a>
            <a href="https://www.linkedin.com/in/amr-adel-ata/">linkedin.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default about;
