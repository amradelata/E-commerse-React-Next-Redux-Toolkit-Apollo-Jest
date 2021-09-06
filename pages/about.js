import styles from "./about.module.css";
const about = () => {
  return (
    <div className="container is-fluid">
      <div className={styles.dad}>
        <div className={styles.aboutLogo}>
          <img src="/./icons/1.png" />
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
