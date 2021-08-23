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
            I believe that anyone can create stunning things so I invested in
            myself physically by improving my lifestyle into a healthy lifestyle
            and mentally by reading as much as possible and commitment to Web
            Development because it combines creativity and logical thinking
            <br />
            here you can find my website :{" "}
            <a href="https://amradelata.com/">amradelata.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default about;
